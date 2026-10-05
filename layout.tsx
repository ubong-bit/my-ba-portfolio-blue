import Link from "next/link";

import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { btn } from "@/components/ui/button";
import { mainNav } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { withBase } from "@/lib/utils";

export default function RootGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            {siteConfig.name}
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <a href={withBase(siteConfig.social.resume)} target="_blank" rel="noreferrer" className={btn({ size: "sm" })}>
              Resume
            </a>
          </div>
        </div>
        <nav aria-label="Primary mobile" className="container flex gap-5 overflow-x-auto pb-3 md:hidden">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground">
              {item.title}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
