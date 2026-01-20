
import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  kicker,
  children
}: {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="sectionHead">
        <h2>{title}</h2>
        {kicker ? <p className="muted">{kicker}</p> : null}
      </div>
      {children}
    </section>
  );
}
