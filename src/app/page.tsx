'use client'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import { useContext, useEffect, useState } from "react";
import { CartContextValue } from "./context/CartContext";

export default function Home() {
  const cartItems = useContext(CartContextValue)
  console.log(cartItems)

  return (

    <div className="Home">
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>

  );
}
