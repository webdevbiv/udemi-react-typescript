import { ComponentPropsWithRef, type ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  // as: ElementType;
  as?: T;
  children: React.ReactNode;
} & ComponentPropsWithRef<T>;

function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  return (
    <Component
      onClick={() => console.log("clicked")}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
