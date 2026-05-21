export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Buzos' | 'Joggins' | 'Conjuntos';
  color: 'Negro' | 'Gris' | 'Azul';
  description: string;
  features: string[];
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface PayerInfo {
  name: string;
  email: string;
  phone: string;
  province: string;
  city: string;
  address: string;
  zipCode: string;
  notes?: string;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string; size: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; size: string; quantity: number } }
  | { type: 'CLEAR_CART' };

export interface CartState {
  items: CartItem[];
  total: number;
}
