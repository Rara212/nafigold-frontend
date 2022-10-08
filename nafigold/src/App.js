import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Price />
      <Products />
    </div>
  );
}

export default App;
