import { Spark } from "@/components/spark";
import { scrollToId } from "@/lib/utils";

const links = [
  { id: "journeys", label: "Journeys" },
  { id: "fleet", label: "Fleet" },
  { id: "packages", label: "Casino Nights" },
  { id: "book", label: "Airports" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="band-inner flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="wordmark text-bone">
            <Spark className="size-3.5" />
            Northline
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Private group days. Partner vehicles. GTA ↔ Niagara.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.label}
              href={`#${l.id}`}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToId(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="nav-book"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("book", "guest-name");
            }}
          >
            Book
          </a>
        </nav>
      </div>
    </footer>
  );
}
