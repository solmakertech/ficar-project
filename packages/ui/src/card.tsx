import { type ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export function Card({ className, children, style }: CardProps) {
  return (
    <div
      className={className}
      style={{
        borderRadius: 24,
        border: "1px solid var(--color-hairline)",
        backgroundColor: "var(--color-surface)",
        padding: 24,
        boxShadow: "var(--shadow-card)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
