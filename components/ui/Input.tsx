import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, className, required, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-small font-semibold text-text-primary">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={cn(error && errorId, helperText && helperId) || undefined}
          className={cn(
            "min-h-11 rounded-md border bg-surface px-4 py-2.5 text-body text-text-primary placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
            error ? "border-error" : "border-border",
            className
          )}
          {...props}
        />
        {helperText && !error && (
          <p id={helperId} className="text-small text-text-secondary">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} role="alert" className="text-small text-error">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
