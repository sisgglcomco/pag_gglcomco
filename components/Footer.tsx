import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>
          &copy; {new Date().getFullYear()} {site.nombre}
        </span>
        <span>Hecho en Colombia</span>
      </div>
    </footer>
  );
}
