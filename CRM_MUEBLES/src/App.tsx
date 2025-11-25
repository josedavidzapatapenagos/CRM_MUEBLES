import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

// ==========================================================
// 🚨 IMPORTAR LAS NUEVAS PÁGINAS (COMPLETAS) 🚨
// ==========================================================
import MueblesPage from "@/pages/muebles"; 
import NosotrosPage from "@/pages/nosotros"; // <-- Necesitas esta para /nosotros
import DetailPage from "@/pages/muebles/DetailPage"; // <-- Necesitas esta para /muebles/:id

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      
      {/* ========================================================== */}
      {/* 🛋️ RUTAS DE CRM MUEBLES */}
      {/* ========================================================== */}
      
      {/* 1. Catálogo */}
      <Route element={<MueblesPage />} path="/muebles" />
      
      {/* 2. Detalle de Producto (Ruta Dinámica) */}
      <Route element={<DetailPage />} path="/muebles/:id" />
      
      {/* 3. Nosotros */}
      <Route element={<NosotrosPage />} path="/nosotros" />
      
      {/* Rutas originales */}
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;