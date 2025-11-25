// src/pages/nosotros.tsx

import DefaultLayout from "@/layouts/default";
import { Divider } from '@heroui/divider';


const NosotrosPage = () => {
  return (
    <DefaultLayout>
      <div className="py-16 md:py-24 max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-foreground mb-4">
            Nuestra Historia en CRM Muebles
          </h1>
          <p className="text-xl text-foreground/70">
            25 años transformando espacios con diseño, calidad y pasión artesanal.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-10 items-center">
            
            <div className="md:order-2">
                <img 
                    src="/images/taller.jpg" 
                    alt="Taller de carpintería artesanal"
                    className="rounded-xl shadow-lg w-full h-auto"
                />
            </div>

            <div className="md:order-1">
                <h2 className="text-3xl font-bold text-primary mb-4">
                    Comienzos Sencillos, Visión Clara
                </h2>
                <p className="text-foreground/80 mb-4">
                    Fundada en 1998 por Carlos Ruiz, CRM Muebles nació con el compromiso de crear piezas que combinaran la estética moderna con la durabilidad tradicional. Lo que comenzó como un pequeño taller familiar es hoy un referente en mobiliario de alta gama en la región.
                </p>
                <p className="text-foreground/80">
                    Creemos firmemente que un mueble debe ser una inversión para toda la vida. Por ello, seleccionamos solo las mejores maderas y materiales, aplicando técnicas artesanales que garantizan la máxima calidad en cada sofá, mesa y silla que sale de nuestro taller.
                </p>
            </div>
        </section>

        <Divider className="my-16" />

        <section className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
                Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-4">
                    <p className="text-4xl mb-3">🔨</p>
                    <h3 className="font-semibold text-xl mb-2 text-foreground">Artesanía</h3>
                    <p className="text-sm text-foreground/70">Cuidado en el detalle y técnicas tradicionales que aseguran la longevidad de cada pieza.</p>
                </div>
                <div className="p-4">
                    <p className="text-4xl mb-3">📐</p>
                    <h3 className="font-semibold text-xl mb-2 text-foreground">Innovación</h3>
                    <p className="text-sm text-foreground/70">Siempre a la vanguardia en diseño ergonómico y tendencias de interiorismo.</p>
                </div>
                <div className="p-4">
                    <p className="text-4xl mb-3">🌍</p>
                    <h3 className="font-semibold text-xl mb-2 text-foreground">Sostenibilidad</h3>
                    <p className="text-sm text-foreground/70">Comprometidos con el uso responsable de recursos y maderas certificadas.</p>
                </div>
            </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default NosotrosPage;