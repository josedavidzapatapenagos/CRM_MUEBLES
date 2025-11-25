import { useState } from 'react';
import { Link } from '@heroui/link';
import { Input } from '@heroui/input'; // Componente de input para la búsqueda
import { Button } from '@heroui/button'; // Componente de botón para filtros
import { Card, CardBody, CardFooter } from '@heroui/card'; // Componente Card para cada mueble
import DefaultLayout from '@/layouts/default'; // Tu layout personalizado

// --- DATA: Productos de Ejemplo (Reemplaza esto con tu fuente de datos real) ---
const products = [
    { id: 1, name: "Sofá Modular Helsinki", category: "Salón", price: 1850000, image: '/images/m-1.png' },
    { id: 2, name: "Mesa Comedor Nórdica", category: "Comedor", price: 920000, image: '/images/m2.png' },
    { id: 3, name: "Silla Eames Clásica", category: "Sillas", price: 180000, image: '/images/m3.png' },
    { id: 4, name: "Librero Flotante Z", category: "Almacenamiento", price: 450000, image: '/images/m4.png' },
    { id: 5, name: "Cama King Viena", category: "Dormitorio", price: 2100000, image: '/images/m5.png' },
    { id: 6, name: "Mesa Auxiliar Cobre", category: "Salón", price: 230000, image: '/images/m6.png' },
    { id: 7, name: "Escritorio Minimalista", category: "Oficina", price: 680000, image: '/images/m7.png' },
    { id: 8, name: "Butaca Terciopelo Azul", category: "Salón", price: 750000, image: '/images/m8.png' },
];

// Array de categorías para los botones de filtro
const categories = ["Todos", "Salón", "Comedor", "Dormitorio", "Sillas", "Almacenamiento"];

const MueblesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('Todos');

    // Lógica de filtrado
    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Función para dar formato al precio (moneda colombiana COP)
    const formatPrice = (price: number) => {
        return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
    };

    return (
        <DefaultLayout>
            <div className="py-10">
                
                {/* === Título y Herramientas === */}
                <header className="mb-10 text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight text-foreground mb-2">
                        Nuestro Catálogo de Muebles
                    </h1>
                    <p className="text-lg text-foreground/70">
                        Encuentra la pieza perfecta que define tu estilo.
                    </p>
                </header>

                {/* === Filtros y Búsqueda === */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    
                    {/* Búsqueda */}
                    <div className="w-full md:w-1/3">
                        <Input
                            placeholder="Buscar por nombre..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            // Puedes añadir un icono de lupa aquí si lo tienes definido
                        />
                    </div>

                    {/* Botones de Categoría */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-2">
                        {categories.map(category => (
                            <Button
                                key={category}
                                size="sm"
                                variant={activeCategory === category ? "shadow" : "bordered"}
                                color={activeCategory === category ? "primary" : "default"}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* === Cuadrícula de Productos === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Link href={`/muebles/${product.id}`} key={product.id}>
                                <Card isHoverable className="h-full transition-all duration-300 hover:shadow-2xl">
                                    <CardBody className="overflow-visible p-0">
                                        <img
                                            alt={product.name}
                                            className="w-full object-cover h-64 rounded-t-xl"
                                            src={product.image}
                                        />
                                    </CardBody>
                                    <CardFooter className="flex flex-col items-start px-4 pb-4 pt-2">
                                        <h4 className="font-bold text-lg text-foreground/90">{product.name}</h4>
                                        <small className="text-default-500">{product.category}</small>
                                        <p className="text-primary font-semibold text-xl mt-1">
                                            {formatPrice(product.price)}
                                        </p>
                                        <Button size="sm" color="primary" className="mt-3 w-full">
                                            Ver Detalle
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 text-foreground/70">
                            No se encontraron muebles que coincidan con los criterios de búsqueda. 
                        </div>
                    )}
                </div>

            </div>
        </DefaultLayout>
    );
};

export default MueblesPage;