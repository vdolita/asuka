interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({
  children,
  className,
  ...rest
}: ContainerProps) {
  const mergedClassName = `container px-6 xl:px-0 ${className || ""}`;
  return (
    <div className={mergedClassName} {...rest}>
      {children}
    </div>
  );
}
