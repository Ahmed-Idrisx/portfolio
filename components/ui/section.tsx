import { cn } from "@/lib/cn";
import Container from "./container";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
