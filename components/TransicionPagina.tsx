"use client";

import { usePathname } from "next/navigation";

/**
 * Suaviza el cambio de página.
 *
 * La clave (key) es la ruta actual: cada vez que navegas, React monta un
 * div nuevo y la animación de globals.css (.transicion) vuelve a correr.
 * Sin la key, el div sería el mismo y la animación solo se vería una vez.
 *
 * El movimiento se resuelve con CSS, no con JavaScript, así que no cuesta
 * nada y se desactiva solo con prefers-reduced-motion.
 */
export default function TransicionPagina({
  children,
}: {
  children: React.ReactNode;
}) {
  const ruta = usePathname();

  return (
    <div className="transicion" key={ruta}>
      {children}
    </div>
  );
}
