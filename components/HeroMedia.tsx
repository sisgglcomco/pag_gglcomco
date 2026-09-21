"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Fondo fotográfico del hero con efecto de elevación al hacer scroll.
 *
 * El recuadro ocupa exactamente la sección .hero, es decir: empieza donde
 * termina el menú y acaba donde empieza "Clientes y aliados".
 *
 * La imagen se dibuja más alta que el recuadro y se desplaza hacia arriba a
 * medida que la sección sale de la pantalla, así que nunca quedan bordes
 * descubiertos. Todo el movimiento se resuelve con una variable CSS
 * (--avance, de 0 a 1) para que el navegador solo tenga que animar un
 * transform, que es lo barato.
 */
export default function HeroMedia() {
  const marco = useRef<HTMLDivElement>(null);
  const capa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marcoEl = marco.current;
    const capaEl = capa.current;
    if (!marcoEl || !capaEl) return;

    // Si el usuario pidió menos movimiento, dejamos la foto quieta.
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (quieto.matches) return;

    let encolado = false;

    const pintar = () => {
      encolado = false;
      const caja = marcoEl.getBoundingClientRect();
      const alto = caja.height || 1;

      // 0 = el hero recién toca el borde superior de la ventana.
      // 1 = el hero ya salió por completo por arriba.
      const avance = Math.min(Math.max(-caja.top / alto, 0), 1);
      capaEl.style.setProperty("--avance", avance.toFixed(4));
    };

    const alMover = () => {
      if (encolado) return;
      encolado = true;
      requestAnimationFrame(pintar);
    };

    pintar();
    window.addEventListener("scroll", alMover, { passive: true });
    window.addEventListener("resize", alMover);

    return () => {
      window.removeEventListener("scroll", alMover);
      window.removeEventListener("resize", alMover);
    };
  }, []);

  return (
    <div className="hero-media" ref={marco} aria-hidden="true">
      <div className="hero-capa" ref={capa}>
        <Image
          src="/img/hero-logistica.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-foto"
        />
      </div>
      <div className="hero-velo" />
    </div>
  );
}
