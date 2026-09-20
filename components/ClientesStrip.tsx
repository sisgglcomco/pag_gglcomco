import Image from "next/image";
import { clientes } from "@/lib/site";

export default function ClientesStrip({
  titulo = "Clientes y aliados",
}: {
  titulo?: string;
}) {
  return (
    <section className="logos" aria-label={titulo}>
      <div className="wrap">
        <p>{titulo}</p>
        <ul>
          {clientes.map((c) =>
            c.logo ? (
              <li key={c.nombre}>
                <Image src={c.logo} alt={c.nombre} width={140} height={56} />
              </li>
            ) : (
              <li key={c.nombre} className="ph">
                {c.nombre}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
