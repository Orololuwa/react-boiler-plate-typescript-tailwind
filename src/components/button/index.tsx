import cn from "classnames";

interface ButtonProps {
  variant?: "primary" | "inverted" | "outline";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn({
        [`border-[1px] rounded-lg text-sm transition-colors`]: true,
        "px-1 py-[0.1rem]": size === "small",
        "px-2 py-1": size === "medium",
        "px-3 py-2": size === "large",
        "bg-main-primary-400 text-white border-main-primary-400  hover:bg-transparent hover:text-main-primary-400":
          variant === "primary",
        "text-main-primary-400 bg-white border-white hover:text-white hover:bg-main-primary-400 hover:border-main-primary-400":
          variant === "inverted",
        "bg-transparent text-main-primary-400 border-main-primary-400 hover:bg-main-primary-400 hover:text-white":
          variant === "outline",
        [`${className}`]: className
      })}
      {...props}
    >
      {children}
    </button>
  );
};
