import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "font-semibold py-3 rounded-lg transition cursor-pointer text-sm";
  const variants = {
    primary: "bg-pink hover:bg-pink-hover text-white",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };
  const width = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${base} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

