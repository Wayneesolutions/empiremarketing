import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex items-center gap-2 text-sm text-warm-white/50">
      <li>
        <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
          <Home className="w-3.5 h-3.5" /> Home
        </Link>
      </li>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5" />
          {item.path ? (
            <Link to={item.path} className="hover:text-gold transition-colors">{item.label}</Link>
          ) : (
            <span className="text-gold">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
