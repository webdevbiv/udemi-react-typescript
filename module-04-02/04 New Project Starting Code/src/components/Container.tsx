import {type ComponentPropsWithRef, type ElementType} from "react";

//NOTE - #55 Polimorphic Component with Generic
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
  return (
    <Component
      className='container'
      {...props}>
      {children}
    </Component>
  );
}

export default Container;
