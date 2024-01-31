import {type ComponentPropsWithoutRef} from "react";

// type BaseProps = {
//   text?: string;
//   className?: string;
// };

// type ButtonProps = BaseProps & {
//   el: "button";
// } & Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps>;

// type AnchorProps = BaseProps & {
//   el: "a";
//   href: string;
// } & Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps>;

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

//NOTE - Type Predicate
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

type ButtonComponentProps = ButtonProps | AnchorProps;

function Button(props: ButtonComponentProps) {
  // if ("href" in props)
  if (isAnchorProps(props)) {
    return (
      <a
        {...props}
        className='button'></a>
    );
  }

  return (
    <button
      {...props}
      className='button'></button>
  );
}

export default Button;
