import { type ReactNode } from "react";

interface CodeProps {
  children: ReactNode;
  className?: string;
}

export function Code({ children, className }: CodeProps) {
  return (
    <code
      className={className}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.875em",
        backgroundColor: "var(--color-surface-soft)",
        padding: "2px 6px",
        borderRadius: 4,
      }}
    >
      {children}
    </code>
  );
}
