import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClientesStrip from "@/components/ClientesStrip";
import ContactBand from "@/components/ContactBand";
import { servicios, porQue } from "@/lib/site";

// Solo existen las páginas listadas en lib/site.ts; cualquier otra da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  if (!servicio) return {};
  return { title: servicio.titular, description: servicio.corta };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  if (!servicio) notFound();

  const otros = servicios.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>{servicio.titular}</h1>
          <p className="lead">{servicio.entrada}</p>
          <div className="actions">
            <Link className="btn" href="/#contacto">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Qué incluye</h2>
          <div className="features">
            {servicio.incluye.map((item) => (
              <div key={item.titulo}>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <h2>¿Por qué elegirnos para esto?</h2>
          <div className="features">
            {porQue.razones.slice(0, 3).map((r) => (
              <div key={r.titulo}>
                <h3>{r.titulo}</h3>
                <p>{r.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientesStrip />

      <section className="section">
        <div className="wrap">
          <h2>Cómo trabajamos</h2>
          <ol className="steps">
            {servicio.pasos.map((paso) => (
              <li key={paso.titulo}>
                <h3>{paso.titulo}</h3>
                <p>{paso.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <h2>Preguntas frecuentes</h2>
          <div className="faq">
            {servicio.preguntas.map((p) => (
              <details key={p.pregunta}>
                <summary>{p.pregunta}</summary>
                <p>{p.respuesta}</p>
              </details>
            ))}
          </div>

          <h3 className="others-title">Otros servicios</h3>
          <div className="others">
            {otros.map((s) => (
              <Link key={s.slug} className="btn ghost" href={`/${s.slug}`}>
                {s.nombre}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        titulo="¿Empezamos?"
        texto="Cuéntanos qué necesitas y te enviamos una propuesta."
      />
    </>
  );
}
