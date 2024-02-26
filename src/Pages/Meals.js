import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextProvider from '../context/ContextProvider';
import Recipe from '../components/Recipes';

export default function Meals() {
  return (
    <ContextProvider>
      <div>
        <Header />
        <Footer />

        <Recipe type="meals" />
      </div>
    </ContextProvider>
  );
}
