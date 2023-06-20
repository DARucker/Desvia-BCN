import React from "react";
import "./styles/index.css";
import { Header } from "./components/Header";



import { Navbar } from "./components/Navbar";
import Carousel from "./components/Carousel";
import { Footer } from "./components/Footer";
import { Information } from "./components/Information";
import { Search } from "./components/Search";
import Filters from "./components/Filters";
import { MotoSharing } from "./components/MotoSharing";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Information />
      <Carousel />
      <Search />
      <Filters />
      <MotoSharing />
      <Footer />
    </>
  );
}

export default App;
