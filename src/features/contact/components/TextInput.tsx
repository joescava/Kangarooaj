import { forwardRef, type InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    { label, name, type = "text", required = false, error, ...inputProps },
    ref,
  ) {
    const errorId = `${name}-error`;

    return (
      <label className="grid min-w-0 gap-2 text-sm font-medium text-slate-300">
        <span>
          {label}
          {required && <span className="ml-1 text-cyan-200">*</span>}
        </span>
        <input
          {...inputProps}
          ref={ref}
          name={name}
          type={type}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="min-h-12 w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-2 text-white outline-none ring-cyan-300/40 transition placeholder:text-slate-600 hover:border-white/20 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60"
        />
        {error && (
          <span id={errorId} role="alert" className="text-xs text-red-300">
            {error}
          </span>
        )}
      </label>
    );
  },
);
