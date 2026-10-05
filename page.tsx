import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { btn } from "@/components/ui/button";
import { projects } from "@/config/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ projectId: p.id }));
}

type Props = { params: Promise<{ projectId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const p = projects.find((x) => x.id === projectId);
  return { title: p?.title, description: p?.summary };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-border py-8 md:grid-cols-[180px_1fr] md:gap-10">
      <h2 className="text-sm font-semibold">{title}</h2>
      <div className="leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-2 pl-5 marker:text-primary">
    {items.map((i) => <li key={i}>{i}</li>)}
  </ul>
);

export default async function ProjectPage({ params }: Props) {
  const { projectId } = await params;
  const p = projects.find((x) => x.id === projectId);
  if (!p) notFound();

  return (
    <article className="container max-w-3xl py-16 md:py-24">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>
      <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{p.title}</h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">{p.summary}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={p.github} className={btn({ variant: "outline", size: "sm" })}>GitHub</a>
        <a href={p.demo} className={btn({ variant: "outline", size: "sm" })}>Demo</a>
      </div>
      <div className="mt-12">
        <Block title="Problem"><p>{p.problem}</p></Block>
        <Block title="My role"><p>{p.role}</p></Block>
        <Block title="Deliverables"><List items={p.deliverables} /></Block>
        <Block title="Impact"><List items={p.impact} /></Block>
        <Block title="Tools"><p>{p.tools.join(", ")}</p></Block>
      </div>
    </article>
  );
}
