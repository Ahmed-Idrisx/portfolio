import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}
