"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site, servicios, accesos } from "@/lib/site";

// Cuál de los dos desplegables está abierto (solo uno a la vez).
type Abierto = null | "servicios" | "ingreso";

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false); // menú móvil
  const [abierto, setAbierto] = useState<Abierto>(null);

  const servRef = useRef<HTMLDivElement>(null);
  const ingrRef = useRef<HTMLDivElement>(null);

  const enServicio = servicios.some((s) => pathname === `/${s.slug}`);

  // Cierra el desplegable abierto al hacer clic fuera o presionar Escape
  useEffect(() => {
    if (!abierto) return;

    const fuera = (e: MouseEvent) => {
      const destino = e.target as Node;
      if (servRef.current?.contains(destino)) return;
      if (ingrRef.current?.contains(destino)) return;
      setAbierto(null);
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(null);
    };

    document.addEventListener("mousedown", fuera);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", fuera);
      document.removeEventListener("keydown", esc);
    };
  }, [abierto]);

  const cerrar = () => {
    setMenu(false);
    setAbierto(null);
  };

  const alternar = (cual: Exclude<Abierto, null>) =>
    setAbierto((actual) => (actual === cual ? null : cual));

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link className="brand" href="/" onClick={cerrar}>
          {site.nombre}
        </Link>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={menu}
          aria-controls="menu"
          onClick={() => setMenu((v) => !v)}
        >
          Menú
        </button>

        <nav
          id="menu"
          className={`nav${menu ? " open" : ""}`}
          aria-label="Principal"
        >
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            onClick={cerrar}
          >
            Inicio
          </Link>

          <div className="has-sub" ref={servRef}>
            <button
              type="button"
              className="sub-btn"
              aria-expanded={abierto === "servicios"}
              aria-controls="submenu-servicios"
              aria-current={enServicio ? "page" : undefined}
              onClick={() => alternar("servicios")}
            >
              Servicios
            </button>
            <div
              id="submenu-servicios"
              className={`submenu${abierto === "servicios" ? " open" : ""}`}
            >
              <Link href="/#servicios" onClick={cerrar}>
                Ver todos los servicios
              </Link>
              {servicios.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  aria-current={pathname === `/${s.slug}` ? "page" : undefined}
                  onClick={cerrar}
                >
                  {s.nombre}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/nosotros"
            aria-current={pathname === "/nosotros" ? "page" : undefined}
            onClick={cerrar}
          >
            Nosotros
          </Link>

          <Link className="nav-cta" href="/#contacto" onClick={cerrar}>
            Contacto
          </Link>

          {/* Ingreso: último de la fila, con el desplegable alineado a la
              derecha para que no se salga del borde de la pantalla. */}
          <div className="has-sub" ref={ingrRef}>
            <button
              type="button"
              className="sub-btn ingreso"
              aria-expanded={abierto === "ingreso"}
              aria-controls="submenu-ingreso"
              onClick={() => alternar("ingreso")}
            >
              Ingreso
            </button>
            <div
              id="submenu-ingreso"
              className={`submenu derecha${
                abierto === "ingreso" ? " open" : ""
              }`}
            >
              {accesos.map((a) =>
                a.externo ? (
                  <a
                    key={a.nombre}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={cerrar}
                  >
                    {a.nombre}
                  </a>
                ) : (
                  <Link key={a.nombre} href={a.url} onClick={cerrar}>
                    {a.nombre}
                  </Link>
                ),
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
