import { cn } from "@/lib/utils";

type SparkProps = {
  className?: string;
  title?: string;
};

export function Spark({ className, title }: SparkProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("shrink-0", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M8 0.4 L9.15 6.85 L15.6 8 L9.15 9.15 L8 15.6 L6.85 9.15 L0.4 8 L6.85 6.85 Z"
        fill="currentColor"
      />
    </svg>
  );
}
