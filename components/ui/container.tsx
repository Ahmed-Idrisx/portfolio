import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg" | "xl";
}

const sizes = {
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
};

export default function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8 lg:px-10",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
