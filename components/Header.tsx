"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site, servicios } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false); // menú móvil
  const [sub, setSub] = useState(false); // submenú de servicios
  const subRef = useRef<HTMLDivElement>(null);

  const enServicio = servicios.some((s) => pathname === `/${s.slug}`);

  // Cierra el submenú al hacer clic fuera o presionar Escape
  useEffect(() => {
    if (!sub) return;
    const fuera = (e: MouseEvent) => {
      if (subRef.current && !subRef.current.contains(e.target as Node)) {
        setSub(false);
      }
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSub(false);
    };
    document.addEventListener("mousedown", fuera);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", fuera);
      document.removeEventListener("keydown", esc);
    };
  }, [sub]);

  const cerrar = () => {
    setMenu(false);
    setSub(false);
  };

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

          <div className="has-sub" ref={subRef}>
            <button
              type="button"
              className="sub-btn"
              aria-expanded={sub}
              aria-controls="submenu-servicios"
              aria-current={enServicio ? "page" : undefined}
              onClick={() => setSub((v) => !v)}
            >
              Servicios
            </button>
            <div
              id="submenu-servicios"
              className={`submenu${sub ? " open" : ""}`}
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
        </nav>
      </div>
    </header>
  );
}
