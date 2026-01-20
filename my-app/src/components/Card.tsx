
import type { ReactNode } from "react";

type CardProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
};

export default function Card({ title, subtitle, meta, children, footer }: CardProps) {
  return (
    <div className="card">
      <div className="cardTop">
        <div className="cardTitle">
          <h3>{title}</h3>
          {subtitle ? <div className="muted">{subtitle}</div> : null}
        </div>
        {meta ? <div className="meta">{meta}</div> : null}
      </div>

      {children ? <div className="cardBody">{children}</div> : null}
      {footer ? <div className="cardFooter">{footer}</div> : null}
    </div>
  );
}
