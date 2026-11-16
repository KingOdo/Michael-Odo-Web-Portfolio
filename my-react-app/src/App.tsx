import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Connect from "./Connect";
import Portfolio from "./Portfolio";
import ScrollToTop from "./ScrollToTop";
import PageMetadata from "./PageMetadata";

export default function App() {
  return (
    <BrowserRouter>
      <PageMetadata />
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>

      <Connect />
    </BrowserRouter>
  );
}