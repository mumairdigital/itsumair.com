import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  helperText?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, id, className, required, rows = 5, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={textareaId} className="text-small font-semibold text-text-primary">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={cn(error && errorId, helperText && helperId) || undefined}
          className={cn(
            "resize-y rounded-md border bg-surface px-4 py-2.5 text-body text-text-primary placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
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

Textarea.displayName = "Textarea";
