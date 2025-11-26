// src/pages/index.tsx

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-[80vh] relative">
        
        {/* Fondo con imagen para la Hero Section */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1595568582041-3b764c63283f?fit=crop&w=1920&q=80")', 
            backgroundPosition: '50% 75%',
          }}
        >
          {/* 

[Image of elegant modern living room interior]
 */}
        </div>

        <div className="inline-block max-w-4xl text-center justify-center relative z-10 p-4">
          
          {/* Título y Subtítulo */}
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-foreground/90">
            <span className="text-foreground">Diseño que</span>&nbsp;
            <span className="text-indigo-600 dark:text-primary">Transforma</span>&nbsp;
            <span className="text-foreground">tu Espacio</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-8 text-foreground/80 max-w-3xl mx-auto">
            Cada pieza de CRM Muebles es creada pensando en la durabilidad, el estilo y la comodidad. Descubre la calidad artesanal.
          </p>

          {/* Botones: Ver Muebles y Contactar */}
          <div className="flex justify-center gap-4 mt-8"> 
            
            {/* Botón 1: Ver Muebles */}
            <Link
              href="/muebles"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                size: "lg",
              })}
            >
              Ver Muebles 
            </Link>
            
            {/* Botón 2: Contáctanos */}
            <Link
              href="/contacto" // Puedes crear esta página después
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "bordered", // Usamos un estilo delineado para diferenciar
                size: "lg",
              })}
            >
              Contáctanos 💬
            </Link>

          </div>
        </div>
        
        {/* Sección de Nosotros Rápida (Manteniéndola sencilla y limpia) */}
        <div className="relative z-10 mt-16 p-4 max-w-xl text-center">
            <p className="text-lg text-foreground/70 mb-2">
                Más de 25 años creando mobiliario de alta calidad.
            </p>
            <Link 
                href="/nosotros" 
                className="text-indigo-600 dark:text-primary hover:opacity-80 font-medium transition duration-150"
            >
                Conoce Nuestra Historia →
            </Link>
        </div>

      </section>
    </DefaultLayout>
  );
}