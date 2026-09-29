"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Cifra que cuenta desde cero hasta su valor cuando entra en pantalla.
 *
 * Los valores de lib/site.ts son texto ("+03", "+350", "00%"), así que
 * primero se separan en tres partes: lo que va antes del número, el
 * número, y lo que va después. Si el texto no tiene un número claro
 * (por ejemplo "24/7"), se muestra tal cual sin animar.
 *
 * El HTML que sale del servidor ya trae el valor final. La animación
 * solo lo reemplaza si el navegador puede ejecutarla, así que la cifra
 * correcta se ve siempre, incluso sin JavaScript.
 */

const PATRON = /^(\D*)(\d+)(\D*)$/;
const DURACION = 1200;

export default function Cifra({ valor }: { valor: string }) {
  const partes = useMemo(() => valor.match(PATRON), [valor]);
  const destino = partes ? Number(partes[2]) : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const [actual, setActual] = useState<number | null>(null);

  useEffect(() => {
    if (!partes) return;

    const el = ref.current;
    if (!el) return;

    // Si el usuario pidió menos movimiento, la cifra se queda quieta.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cuadro = 0;
    let inicio = 0;

    const observador = new IntersectionObserver(
      (entradas) => {
        if (!entradas[0]?.isIntersecting) return;
        observador.disconnect(); // cuenta una sola vez

        const paso = (ahora: number) => {
          if (!inicio) inicio = ahora;
          const t = Math.min((ahora - inicio) / DURACION, 1);
          // Arranca rápido y frena al final.
          const suave = 1 - Math.pow(1 - t, 3);
          setActual(Math.round(destino * suave));
          if (t < 1) cuadro = requestAnimationFrame(paso);
        };

        setActual(0);
        cuadro = requestAnimationFrame(paso);
      },
      { threshold: 0.4 },
    );

    observador.observe(el);

    return () => {
      observador.disconnect();
      cancelAnimationFrame(cuadro);
    };
  }, [partes, destino]);

  if (!partes) return <>{valor}</>;

  const [, antes, digitos, despues] = partes;

  // "+03" lleva cero a la izquierda; "+350" no. Solo se rellena el primero.
  const rellenar = digitos.length > 1 && digitos.startsWith("0");
  const numero = actual === null ? destino : actual;
  const texto = rellenar
    ? String(numero).padStart(digitos.length, "0")
    : String(numero);

  return (
    <span ref={ref}>
      {antes}
      {texto}
      {despues}
    </span>
  );
}
