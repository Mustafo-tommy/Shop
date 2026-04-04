import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";

createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Products />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
   </BrowserRouter>
);
