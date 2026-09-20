import type { Metadata } from "next";
import Image from "next/image";
import ContactBand from "@/components/ContactBand";
import { site, nosotros } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Conoce quiénes somos en ${site.nombre}: nuestro propósito, misión, visión, valores y equipo.`,
};

function iniciales(nombre: string) {
  return nombre
    .replace(/[\[\]]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function Nosotros() {
  return (
    <>
      {/* Quiénes somos */}
      <section className="page-hero">
        <div className="wrap">
          <h1>Quiénes somos</h1>
          {nosotros.quienes.map((p, i) => (
            <p key={i} className={i === 0 ? "lead" : "lead second"}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Propósito, misión y visión */}
      <section className="section">
        <div className="wrap">
          <div className="features cols-3" style={{ marginTop: 0 }}>
            <div>
              <h3>Nuestro propósito</h3>
              <p>{nosotros.proposito}</p>
            </div>
            <div>
              <h3>Nuestra misión</h3>
              <p>{nosotros.mision}</p>
            </div>
            <div>
              <h3>Nuestra visión</h3>
              <p>{nosotros.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADN */}
      <section className="section tint">
        <div className="wrap split">
          <h2>Nuestro ADN</h2>
          <div className="prose">
            <p className="motto">{site.lema}</p>
            <p>{nosotros.adn}</p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section">
        <div className="wrap">
          <h2>Valores corporativos</h2>
          <div className="features cols-3">
            {nosotros.valores.map((v) => (
              <div key={v.titulo}>
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivo corporativo (opcional: borra esta sección si no la usas) */}
      <section className="section tint">
        <div className="wrap split">
          <h2>Nuestro objetivo</h2>
          <div className="prose">
            <p>{nosotros.objetivo}</p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="section">
        <div className="wrap">
          <h2>Nuestro equipo</h2>
          <ul className="team">
            {nosotros.equipo.map((m, i) => (
              <li key={i} className="member">
                <div className="avatar">
                  {m.foto ? (
                    <Image src={m.foto} alt={m.nombre} width={96} height={96} />
                  ) : (
                    iniciales(m.nombre)
                  )}
                </div>
                <h3>{m.nombre}</h3>
                <p>{m.cargo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand
        titulo="Hablemos"
        texto="Cuéntanos qué necesitas y te respondemos lo antes posible."
      />
    </>
  );
}
