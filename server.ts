import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN || '',
  options: { timeout: 5000 } 
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // MercadoPago Preference API
  app.post("/api/create-preference", async (req, res) => {
    try {
      const { items, payer } = req.body;
      
      const preference = new Preference(client);
      
      const result = await preference.create({
        body: {
          items: items.map((item: any) => ({
            id: item.id,
            title: item.name,
            unit_price: Number(item.price),
            quantity: Number(item.quantity),
            currency_id: 'ARS'
          })),
          payer: {
            name: payer.name,
            email: payer.email,
          },
          back_urls: {
            success: `${process.env.APP_URL}/confirmacion?status=approved`,
            failure: `${process.env.APP_URL}/checkout?status=failure`,
            pending: `${process.env.APP_URL}/confirmacion?status=pending`,
          },
          auto_return: 'approved',
        }
      });

      res.json({ id: result.id, init_point: result.init_point });
    } catch (error) {
      console.error("MP Preference Error:", error);
      res.status(500).json({ error: "No se pudo crear la preferencia de pago" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`ROVE Server running on http://localhost:${PORT}`);
  });
}

startServer();
