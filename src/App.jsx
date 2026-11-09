
import { Routes, Route } from "react-router-dom";

//Navbar
import Navbar from "./Components/Navbar";

//Hero
import Hero from "./Components/Hero";

//Footer 
import Footer from "./Components/Footer";

//Solutions
import Solutions from "./Components/Solutions";

//services pages
import MedicalBilling from "./Pages/MedicalBilling";
import ClaimsManagement from "./pages/ClaimsManagement";
import Payment from "./pages/Payment";

//Rwsources 
import WorkFlow from "./pages/WorkFlow";
import RevenueCalculator from "./Pages/RevenueCalculator";
import FAQs from "./Pages/FAQs";


//About 
import About from "./Pages/About";

//Contact
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        {/* Hero */}
        <Route path="/" element={<Hero />} />


        {/* services */}
        <Route path="/services/medical-billing" element={<MedicalBilling />} />
        <Route path="/services/claims-management" element={<ClaimsManagement />} />
        <Route path="/services/payment" element={<Payment />} />

        {/* Resources */}
        <Route path="/resources/workflow" element={<WorkFlow />} />
        <Route path="/resources/revenue-calculator" element={<RevenueCalculator />} />
<Route path="/resources/faqs" element={<FAQs />} />



        {/* Solution */}
        <Route path="/solutions" element={<Solutions />} />

        {/* About */}
        <Route path="/About" element={<About />} />

        {/* Contact */}
        <Route path="/Contact" element={<Contact />} />

      </Routes>

      <Footer />
    </div>
  );
}
