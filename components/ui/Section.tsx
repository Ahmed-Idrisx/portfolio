import { cn } from "@/lib/cn";

import GlowOrbs from "./GlowOrbs";
import Container from "./Container";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  bordered?: boolean;
}

export default function Section({
  id,
  children,
  bordered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-8 md:py-24 px-4 md:px-8 bg-background overflow-hidden",
        bordered && "border-t border-border",
      )}
    >
      <GlowOrbs />
      <Container>{children}</Container>
    </section>
  );
}
