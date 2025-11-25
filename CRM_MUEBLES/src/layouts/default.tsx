import { Link } from "@heroui/link";
import { Navbar } from "@/components/navbar"; // Asume que esta es la ruta a tu Navbar

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Usamos min-h-screen para que el contenido pueda crecer
    <div className="relative flex flex-col min-h-screen">
      
      {/* 1. Navbar */}
      <Navbar />
      
      {/* 2. Contenido Principal */}
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      
      {/* 3. Footer Personalizado */}
      <footer className="w-full flex items-center justify-center py-6 bg-background/50 border-t border-border">
        <div className="text-center">
            <p className="text-default-600 text-sm">
                © {new Date().getFullYear()} **CRM Muebles**. 
                Diseño, Calidad y Tradición.
            </p>
            <div className="flex justify-center gap-4 mt-1 text-xs text-default-400">
                <Link href="/nosotros" className="hover:text-primary transition">Nosotros</Link>
                <span>|</span>
                <Link href="/muebles" className="hover:text-primary transition">Catálogo</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}