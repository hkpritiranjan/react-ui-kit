import React from "react";
import { clsx } from "clsx";
import "./styles/button.css";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx("rk-btn", `rk-btn--${variant}`, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
