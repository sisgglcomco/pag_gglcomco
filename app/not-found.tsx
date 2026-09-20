import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <h1>Esta página no existe</h1>
        <p className="lead">
          Puede que el enlace esté mal escrito o que la página ya no esté
          disponible.
        </p>
        <div className="actions">
          <Link className="btn" href="/">
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
