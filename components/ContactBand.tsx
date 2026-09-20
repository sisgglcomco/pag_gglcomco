import { site } from "@/lib/site";

export default function ContactBand({
  titulo,
  texto,
}: {
  titulo: string;
  texto: string;
}) {
  return (
    <section className="section band" id="contacto">
      <div className="wrap">
        <h2>{titulo}</h2>
        <p className="lead">{texto}</p>
        <div className="actions">
          <a className="btn light" href={site.whatsapp}>
            Escríbeme por WhatsApp
          </a>
          <a className="btn outline-light" href={site.correo}>
            Envíame un correo
          </a>
        </div>
      </div>
    </section>
  );
}
