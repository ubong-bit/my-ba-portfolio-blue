export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-20 md:py-28">
      <div className="container grid gap-10 md:grid-cols-[260px_1fr] md:gap-16">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {intro && <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{intro}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
