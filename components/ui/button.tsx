import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "lg" | "md" | "sm";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base = "font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      default: "bg-cyan-600 text-white hover:bg-emerald-600",
      outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    };
    const sizes = {
      lg: "px-6 py-3 text-base",
      md: "px-4 py-2 text-sm",
      sm: "px-2 py-1 text-xs",
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
