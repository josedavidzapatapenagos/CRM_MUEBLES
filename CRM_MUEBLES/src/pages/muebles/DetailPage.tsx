import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Select, SelectItem } from '@heroui/select';
import { Divider } from '@heroui/divider';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/table'; 
import DefaultLayout from '@/layouts/default';

// --- INTERFACES y TIPOS ---
interface Client {
    name: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    email: string;
}

interface Order {
    client: string;
    product: string; // Nombre del producto y cantidad, ej: "Sofá (2)"
    total: number;
    vendor: string;
}

// --- DATA: Productos y Vendedores ---
const products = [
    { id: '1', name: "Sofá Modular Helsinki", price: 1850000 },
    { id: '2', name: "Mesa Comedor Nórdica", price: 920000 },
    // Puedes añadir más productos aquí si es necesario
];
const vendors = ["Ana María", "Juan David", "Marta Lucía"]; 

const DetailPage = () => {
    const { id } = useParams<{ id: string }>(); 
    // Busca el producto, o usa el primero si el ID no es válido (solo para evitar errores)
    const product = products.find(p => p.id === id) || products[0];
    
    // --- ESTADOS DE LA APLICACIÓN ---
    // 🚨 CLIENTES Y ÓRDENES INICIAN VACÍOS
    const [registeredClients, setRegisteredClients] = useState<Client[]>([]);
    const [clientData, setClientData] = useState<Client>({ name: '', phone: '', address: '', city: '', country: '', email: '' });
    const [orderData, setOrderData] = useState({ client: '', product: product.name, price: product.price, quantity: 1, vendor: '' });
    const [orders, setOrders] = useState<Order[]>([]);

    // Estados de animación/feedback
    const [clientFeedback, setClientFeedback] = useState(false);
    const [orderFeedback, setOrderFeedback] = useState(false);

    // Opciones de cliente generadas a partir del estado de clientes registrados
    const clientOptions = registeredClients.map(client => ({
        key: client.name, 
        label: `${client.name} (${client.phone})`
    }));

    const formatPrice = (price: number) => {
        return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
    };

    // --- LÓGICA DE REGISTRO DE CLIENTE ---
    const handleClientRegister = () => {
        if (!clientData.name || !clientData.phone) return alert('Por favor, complete el nombre y celular del cliente.');
        
        // Simula la persistencia
        setRegisteredClients(prev => [...prev, clientData]);
        
        setClientFeedback(true);
        setTimeout(() => {
            setClientFeedback(false);
            alert(`Cliente ${clientData.name} registrado con éxito.`);
            // Selecciona automáticamente el cliente recién registrado y limpia el formulario
            setOrderData(prev => ({...prev, client: clientData.name}));
            setClientData({ name: '', phone: '', address: '', city: '', country: '', email: '' });
        }, 1500);
    };

    // --- LÓGICA DE CREACIÓN DE ORDEN ---
    const handleOrderCreation = () => {
        if (!orderData.client || !orderData.vendor) return alert('Por favor, seleccione cliente y vendedor.');
        if (orderData.quantity <= 0) return alert('La cantidad debe ser mayor a cero.');

        const newOrder: Order = {
            client: orderData.client,
            product: `${product.name} (${orderData.quantity})`,
            total: product.price * orderData.quantity,
            vendor: orderData.vendor,
        };
        
        setOrderFeedback(true);
        // Agrega la nueva orden al principio de la lista
        setOrders(prevOrders => [newOrder, ...prevOrders]);

        setTimeout(() => {
            setOrderFeedback(false);
            alert(`Orden para ${product.name} creada con éxito.`);
            // Limpia la selección del vendedor y restablece la cantidad
            setOrderData(prev => ({...prev, vendor: '', quantity: 1}));
        }, 1500);
    };

    return (
        <DefaultLayout>
            <div className="py-10 max-w-5xl mx-auto">
                
                <h1 className="text-4xl font-extrabold text-foreground mb-10 text-center">
                    CRM - Empresa de Muebles 
                </h1>

                {/* === 1. REGISTRAR CLIENTE === */}
                <section 
                    className={`p-6 md:p-8 rounded-xl bg-background border border-border mb-10 ${
                        clientFeedback ? 'shadow-2xl shadow-blue-500/50 transform scale-[1.01] transition-all duration-500 ease-in-out' : ''
                    }`}
                >
                    <h2 className={`text-2xl font-semibold mb-6 text-foreground/90 ${clientFeedback ? 'animate-pulse text-primary' : ''}`}>
                        Registrar Cliente
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder="Nombre completo" value={clientData.name} onChange={(e) => setClientData({...clientData, name: e.target.value})} />
                        <Input placeholder="Celular" value={clientData.phone} onChange={(e) => setClientData({...clientData, phone: e.target.value})} />
                        <Input placeholder="Dirección" value={clientData.address} onChange={(e) => setClientData({...clientData, address: e.target.value})} />
                        <Input placeholder="Ciudad" value={clientData.city} onChange={(e) => setClientData({...clientData, city: e.target.value})} />
                        <Input placeholder="País" value={clientData.country} onChange={(e) => setClientData({...clientData, country: e.target.value})} />
                        <Input placeholder="Email" value={clientData.email} onChange={(e) => setClientData({...clientData, email: e.target.value})} />
                    </div>
                    
                    <Button 
                        color="primary" 
                        size="lg" 
                        className="w-full mt-6 transition-all duration-300 active:scale-[0.99]"
                        onClick={handleClientRegister}
                        disabled={clientFeedback}
                    >
                        {clientFeedback ? 'Registrando Cliente...' : 'Guardar Cliente'}
                    </Button>
                </section>
                
                <Divider className="my-8" />

                {/* === 2. CREAR ORDEN === */}
                <section 
                    className={`p-6 md:p-8 rounded-xl bg-background border border-border mb-10 ${
                        orderFeedback ? 'shadow-2xl shadow-green-500/50 transform scale-[1.01] transition-all duration-500 ease-in-out' : ''
                    }`}
                >
                    <h2 className={`text-2xl font-semibold mb-6 text-foreground/90 ${orderFeedback ? 'animate-pulse text-success' : ''}`}>
                        Crear Orden
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        <Select 
                            placeholder={clientOptions.length > 0 ? "Seleccionar Cliente" : "No hay clientes registrados"} 
                            label="Cliente"
                            selectedKeys={[orderData.client]}
                            onSelectionChange={(keys) => setOrderData({...orderData, client: Array.from(keys).join('')})}
                            disabled={registeredClients.length === 0}
                        >
                            {clientOptions.map((client) => (
                                <SelectItem key={client.key}>{client.label}</SelectItem>
                            ))}
                        </Select>

                        <Input label="Mueble" value={product.name} isReadOnly />
                        
                        <Input label="Precio Unitario" value={formatPrice(product.price)} isReadOnly />
                        <Input 
                            label="Cantidad" 
                            type="number" 
                            value={String(orderData.quantity)} 
                            onChange={(e) => setOrderData({...orderData, quantity: Number(e.target.value)})} 
                            min={1}
                        />
                        
                        <Select 
                            placeholder="Seleccionar Vendedor" 
                            label="Vendedor"
                            selectedKeys={[orderData.vendor]}
                            onSelectionChange={(keys) => setOrderData({...orderData, vendor: Array.from(keys).join('')})}
                        >
                            {vendors.map(vendor => (
                                <SelectItem key={vendor}>{vendor}</SelectItem>
                            ))}
                        </Select>

                        <Input 
                            label="Total a Pagar" 
                            value={formatPrice(product.price * orderData.quantity)} 
                            isReadOnly 
                            className="col-span-1 md:col-span-2"
                        />
                    </div>
                    
                    <Button 
                        color="success" 
                        size="lg" 
                        className="w-full mt-6 transition-all duration-300 active:scale-[0.99]"
                        onClick={handleOrderCreation}
                        disabled={orderFeedback || registeredClients.length === 0}
                    >
                        {orderFeedback ? 'Generando Orden...' : 'Crear Orden'}
                    </Button>
                </section>

                <Divider className="my-8" />
                
                {/* === 3. ÓRDENES REALIZADAS (Tabla) === */}
                <section className="p-6 md:p-8 rounded-xl bg-background border border-border">
                    <h2 className="text-2xl font-semibold mb-6 text-foreground/90">
                        Órdenes Realizadas
                    </h2>

                    <Table aria-label="Órdenes Realizadas">
                        <TableHeader>
                            <TableColumn>Cliente</TableColumn>
                            <TableColumn>Mueble (Cantidad)</TableColumn>
                            <TableColumn>Total</TableColumn>
                            <TableColumn>Vendedor</TableColumn>
                        </TableHeader>
                        <TableBody emptyContent="No hay órdenes registradas.">
                            {orders.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.client}</TableCell>
                                    <TableCell>{item.product}</TableCell>
                                    <TableCell className="font-semibold">{formatPrice(item.total)}</TableCell>
                                    <TableCell>{item.vendor}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </section>

            </div>
        </DefaultLayout>
    );
};

export default DetailPage;