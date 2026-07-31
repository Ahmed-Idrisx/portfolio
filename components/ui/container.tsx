interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="container max-w-7xl mx-auto relative">{children}</div>;
}
