import {type ComponentPropsWithRef, type ElementType} from "react";

//NOTE - Polimorphic Component
type ContainerProps<T extends ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & ComponentPropsWithRef<T>;

function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}

export default Container;
