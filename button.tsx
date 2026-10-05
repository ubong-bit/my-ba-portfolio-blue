import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-border bg-card text-foreground hover:border-primary hover:text-link",
        ghost: "text-foreground hover:bg-muted",
      },
      size: { default: "h-10 px-4", lg: "h-12 px-6 text-[15px]", sm: "h-9 px-3" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export const btn = (v?: ButtonVariants, className?: string) =>
  cn(buttonVariants(v), className);
