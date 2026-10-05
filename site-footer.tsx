import { socialLinks } from "@/config/socials";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
        </p>
        <ul className="flex gap-6">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a href={s.href} className="hover:text-foreground" aria-label={s.name}>
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
