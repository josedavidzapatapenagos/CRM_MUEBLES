import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

// Eliminamos la importación de siteConfig si definimos los links aquí
// import { siteConfig } from "@/config/site"; 

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons"; 

// ==========================================================
// 🚨 DEFINICIÓN DE ENLACES DE LA NAVBAR 🚨
// ==========================================================
const navItems = [
  {
    label: "Inicio",
    href: "/", 
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "Muebles",
    href: "/muebles",
  },
];

// Para el menú móvil, usamos la misma lista
const navMenuItems = navItems; 
// ==========================================================


export const Navbar = () => {
  // Se elimina la función searchInput y sus imports

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* Opcional: Si quieres usar el Logo, déjalo. */}
            <Logo className="w-6 h-6" /> 
            <p className="font-bold text-xl text-inherit">CRM Muebles </p>
          </Link>
        </NavbarBrand>
        
        {/* Enlaces principales (Inicio, Nosotros, Muebles) */}
        <div className="hidden lg:flex gap-4 justify-start ml-4">
          {navItems.map((item) => ( // USAMOS LA VARIABLE 'navItems' definida internamente
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex gap-2">
          {/* Mantenemos el ThemeSwitch para el cambio de color */}
          <ThemeSwitch />
        </NavbarItem>
        {/* Se eliminan el searchInput y el botón de Sponsor */}
      </NavbarContent>

      {/* Menú de Toggle para móviles */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Menú Móvil */}
      <NavbarMenu>
        {/* Se elimina el searchInput del menú móvil */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navMenuItems.map((item, index) => ( // USAMOS LA VARIABLE 'navMenuItems' definida internamente
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <Link
                color="foreground" // Establece un color estándar para el menú móvil
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};