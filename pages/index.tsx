// next.js-app/pages/index.tsx
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to ALX Listing App!</h1>
    </div>
  );
};

export default HomePage;

// pages/index.tsx
import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

const Hero: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-96 text-white flex items-center justify-center"
      style={{
        backgroundImage: "url('https://example.com/hero-bg.jpg')",
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="mt-2 text-xl">The best prices for over 2 million properties worldwide.</p>
      </div>
    </section>
  );
};

const Listing: React.FC = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {PROPERTYLISTINGSAMPLE.map((property) => (
        <div
          key={property.name}
          className="border rounded-lg shadow-lg p-4"
        >
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-2 text-xl font-semibold">{property.name}</h3>
          <p className="text-gray-500">{property.address.city}, {property.address.country}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">{property.rating}⭐</span>
            <span className="ml-2 text-xl font-bold">${property.price}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Listing />
    </div>
  );
};

export default Home;
