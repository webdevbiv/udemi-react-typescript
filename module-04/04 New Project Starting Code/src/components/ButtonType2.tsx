import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href: never;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

function ButtonType2(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) return <a {...props}>Button</a>;

  return <button {...props}>Button</button>;
}

export default ButtonType2;
