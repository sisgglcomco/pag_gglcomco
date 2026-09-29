import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>
          &copy; {new Date().getFullYear()} {"Global Group Logistics SAS"}
        </span>
        <span>Designed by Ing. Felipe Diaz</span>
      </div>
    </footer>
  );
}
