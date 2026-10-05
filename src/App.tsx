import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Booking } from "./pages/Booking";
import { FlightInstructionN57 } from "./pages/FlightInstructionN57";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/flight-instruction-n57" element={<FlightInstructionN57 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
