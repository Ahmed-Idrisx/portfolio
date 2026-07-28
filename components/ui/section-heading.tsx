import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block font-mono text-sm uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </span>
      )}

      <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
