
import { Routes, Route } from "react-router-dom";

//Navbar
import Navbar from "./Components/Navbar";

//Hero
import Hero from "./Components/Hero";

//Footer 
import Footer from "./Components/Footer";

//Solutions
import Solutions from "./Components/Solutions";
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
          {/* Hero */}
        <Route path="/" element={<Hero />} />

         {/* Solution */}
 <Route path="/solutions" element={<Solutions />} />
      </Routes>

      <Footer />
    </div>
  );
}
