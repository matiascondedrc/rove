import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { ProductListing } from '../components/ProductListing';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../types';

export const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main>
      <Hero />
      <AboutUs />
      <ProductListing onShowDetail={setSelectedProduct} />
      <WhyChooseUs />
      
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </main>
  );
};
