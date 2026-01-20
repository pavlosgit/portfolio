
import type { ReactNode } from "react";

export default function ExternalLink({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  const isEmail = href.startsWith("mailto:");
  const isPhone = href.startsWith("tel:");

  return (
    <a
      href={href}
      target={isEmail || isPhone ? undefined : "_blank"}
      rel={isEmail || isPhone ? undefined : "noreferrer"}
    >
      {children}
    </a>
  );
}
