import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/common/section";
import { btn } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { skillGroups } from "@/config/skills";
import { socialLinks } from "@/config/socials";
import { withBase } from "@/lib/utils";

function ProcessCompare() {
  const row = (n: number, label: string, muted: boolean) => (
    <div>
      <div className="mb-3 flex items-baseline justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{n} steps</span>
      </div>
      <div className="flex gap-1.5" aria-hidden>
        {Array.from({ length: n }).map((_, i) => (
          <span key={i} className={`h-8 flex-1 rounded-sm ${muted ? "bg-border" : "bg-primary"}`} />
        ))}
      </div>
    </div>
  );
  return (
    <figure className="rounded-lg border border-border bg-card p-6">
      <figcaption className="mb-6 text-sm text-muted-foreground">
        Checkout process, before and after analysis
      </figcaption>
      <div className="space-y-6">
        {row(12, "AS-IS", true)}
        {row(5, "TO-BE", false)}
      </div>
      <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
        E-Commerce Checkout Optimization: 70% cart abandonment addressed through requirements and process redesign.
      </p>
    </figure>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <h3 className="mt-5 text-lg font-medium text-link sm:text-xl">{siteConfig.role}</h3>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {siteConfig.bio}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{siteConfig.location}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#projects" className={btn({ size: "lg" })}>
                View projects <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={withBase(siteConfig.social.resume)} target="_blank" rel="noreferrer" className={btn({ variant: "outline", size: "lg" })}>
                <Download className="h-4 w-4" /> Download resume
              </a>
              <a href={siteConfig.social.email} className={btn({ variant: "outline", size: "lg" })}>
                <Mail className="h-4 w-4" /> Contact me
              </a>
            </div>
          </div>
          <ProcessCompare />
        </div>
      </section>

      <Section id="projects" title="Projects" intro="Case studies from requirements through delivery.">
        <ul className="divide-y divide-border border-y border-border">
          {projects.map((p) => (
            <li key={p.id} className="py-10 first:pt-8">
              <h3 className="text-xl font-semibold tracking-tight">
                <Link href={`/projects/${p.id}`} className="hover:text-link">{p.title}</Link>
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-sm border border-border bg-card px-2 py-1 text-xs font-medium text-muted-foreground">{t}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href={`/projects/${p.id}`} className={btn({ size: "sm" })}>
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={p.github} className={btn({ variant: "outline", size: "sm" })}>GitHub</a>
                <a href={p.demo} className={btn({ variant: "outline", size: "sm" })}>Demo</a>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" title="Experience">
        <ol className="divide-y divide-border border-y border-border">
          {experiences.map((e) => (
            <li key={e.id} className="grid gap-2 py-8 sm:grid-cols-[1fr_auto] sm:gap-8">
              <div>
                <h3 className="text-lg font-semibold">{e.position}</h3>
                <p className="text-muted-foreground">{e.company}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                  {e.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                {e.tools && <p className="mt-4 text-sm text-muted-foreground">Tools: {e.tools.join(", ")}</p>}
              </div>
              <p className="text-sm text-muted-foreground sm:text-right">{e.period}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="skills" title="Skills" intro="Techniques, tools, and delivery methods.">
        <div className="space-y-12">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" intro="Open to Business Analyst roles.">
        <p className="max-w-xl text-lg leading-8">
          If you have a business problem that needs clear requirements, I would like to hear about it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={siteConfig.social.email} className={btn({ size: "lg" })}>
            <Mail className="h-4 w-4" /> Email me
          </a>
          {socialLinks.filter((s) => s.name !== "Email").map((s) => (
            <a key={s.name} href={s.href} className={btn({ variant: "outline", size: "lg" })}>
              <s.icon className="h-4 w-4" /> {s.name}
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
