"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

const variantStyles: Record<
  string,
  React.CSSProperties
> = {
  primary: {
    backgroundColor: "var(--color-button-primary)",
    color: "var(--color-button-primary-text)",
    border: "none",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--color-ink)",
    border: "1px solid var(--color-hairline-medium)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-ink-muted)",
    border: "none",
  },
};

export function Button({
  children,
  variant = "primary",
  className,
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      className={className}
      style={{
        height: 44,
        paddingInline: 24,
        borderRadius: 9999,
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.15s, border-color 0.15s",
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
