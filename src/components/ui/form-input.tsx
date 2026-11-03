import { InputHTMLAttributes, ReactNode } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export function FormInput({ label, icon, id, ...props }: FormInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={`w-full ${icon ? "pl-10" : "px-3"} pr-3 py-2.5 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink/20 focus:border-pink transition`}
          {...props}
        />
      </div>
    </div>
  );
}

export function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-gray-600">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-[11px] text-red-500">{error}</span>
      )}
    </label>
  );
}

export const inputClass =
  "h-10 w-full rounded-lg border border-border bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-pink";
