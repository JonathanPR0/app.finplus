import { type VariantProps, cva } from "class-variance-authority";
import { Text, TouchableOpacity } from "react-native";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "flex flex-row items-center justify-center disabled:opacity-70 rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
        tertiary: "bg-tertiary",
        destructive: "bg-destructive",
        success: "bg-success",
        warning: "bg-warning",
        ghost: "bg-slate-700",
        link: "text-primary underline-offset-4",
        outline: "border border-foreground",
      },
      size: {
        default: "h-14 px-4",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("text-center font-poppins font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground font-bold",
      secondary: "text-secondary-foreground",
      tertiary: "text-tertiary-foreground",
      destructive: "text-destructive-foreground",
      success: "text-success-foreground",
      warning: "text-warning-foreground",
      ghost: "text-primary-foreground",
      link: "text-primary-foreground underline",
      outline: "text-foreground",
    },
    size: {
      default: "text-lg",
      sm: "text-sm",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string;
  labelClasses?: string;
}
function Button({ label, labelClasses, className, variant, size, ...props }: ButtonProps) {
  return (
    <TouchableOpacity className={cn(buttonVariants({ variant, size, className }))} {...props}>
      <Text className={cn(buttonTextVariants({ variant, size, className: labelClasses }))}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export { Button, buttonTextVariants, buttonVariants };
