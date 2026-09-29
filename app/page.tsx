import Link from "next/link";
import Cifra from "@/components/Cifra";
import ContactBand from "@/components/ContactBand";
import HeroMedia from "@/components/HeroMedia";
import { site, servicios, porQue, cobertura, nosotros } from "@/lib/site";

export default function Inicio() {
  return (
    <>
      {/* 1. HERO (foto de fondo con elevación al bajar) */}
      <section className="hero">
        <HeroMedia />
        <div className="wrap">
          <div>
            <h1>{site.lema}.</h1>
            <p className="lead">
              Soluciones de comercio exterior, transporte internacional y
              nacional, valor agregado y consultoría logística para tu
              operación.
            </p>
            <div className="actions">
              <a className="btn" href="#contacto">
                Solicitar cotización
              </a>
              <a className="btn ghost" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>

          <nav className="pick" aria-label="Servicios">
            <p className="pick-title">¿Qué necesitas?</p>
            <ul>
              {servicios.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`}>
                    <strong>{s.nombre}</strong>
                    <span>{s.corta}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 2. SERVICIOS */}
      <section className="section" id="servicios">
        <div className="wrap">
          <div className="svc-intro">
            <h2>Nuestros servicios</h2>
            <p className="lead">
              Una sola empresa para coordinar tu carga de principio a fin.
            </p>
          </div>
          {/* Tarjetas 2x2 con la quinta centrada abajo. Toda la tarjeta
              es el enlace; al pasar el mouse sube un panel con la
              descripción. En pantallas táctiles la descripción se ve
              siempre, porque ahí no existe el "pasar el mouse". */}
          <ul className="svc-grid">
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link className="svc-card" href={`/${s.slug}`}>
                  <span className="svc-flecha" aria-hidden="true">
                    →
                  </span>
                  <h3>{s.nombre}</h3>
                  <div className="svc-panel">
                    <span className="svc-panel-titulo" aria-hidden="true">
                      {s.nombre}
                    </span>
                    <p>{s.corta}</p>
                    <span className="svc-ir" aria-hidden="true">
                      Ver servicio →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. PROMESA DE VALOR + POR QUÉ ELEGIRNOS */}
      <section className="section dark" id="por-que">
        <div className="wrap">
          <div className="split">
            <div>
              <h2>¿Por qué elegir {site.nombre}?</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                {porQue.promesa}
              </p>
            </div>
            <div className="features" style={{ marginTop: 0 }}>
              {porQue.razones.map((r) => (
                <div key={r.titulo}>
                  <h3>{r.titulo}</h3>
                  <p>{r.texto}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stats">
            {porQue.cifras.map((c) => (
              <div className="stat" key={c.etiqueta}>
                <strong>
                  <Cifra valor={c.valor} />
                </strong>
                <span>{c.etiqueta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COBERTURA Y UBICACIÓN */}
      <section className="section" id="cobertura">
        <div className="wrap">
          <h2>Cobertura y ubicación</h2>
          <p className="lead" style={{ marginTop: "0.75rem" }}>
            {cobertura.intro}
          </p>
          <div className="features cols-3">
            {cobertura.zonas.map((z) => (
              <div key={z.titulo}>
                <h3>{z.titulo}</h3>
                <p>{z.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUIÉNES SOMOS (resumen) */}
      <section className="section tint" id="quienes-somos">
        <div className="wrap split">
          <h2>Quiénes somos</h2>
          <div className="prose">
            <p>{nosotros.quienes[0]}</p>
            <Link className="btn ghost" href="/nosotros">
              Conoce más sobre {site.nombre}
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CONTACTO */}
      <ContactBand
        titulo="Hablemos de tu carga"
        texto="Cuéntanos qué necesitas mover y te respondemos lo antes posible."
      />
    </>
  );
}
