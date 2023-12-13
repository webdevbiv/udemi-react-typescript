import { ComponentPropsWithoutRef } from "react";

// Define a type for the text property
type TextProp = {
  text?: string;
};

// Include TextProp in ButtonProps
type ButtonProps = {
  el: "button";
} & TextProp &
  ComponentPropsWithoutRef<"button">;

// Include TextProp in AnchorProps
type AnchorProps = {
  el: "anchor";
} & TextProp &
  ComponentPropsWithoutRef<"a">;

function Button({
  text = "default text",
  ...props
}: ButtonProps | AnchorProps) {
  if (props.el === "anchor") return <a {...props}>{text}</a>;

  return <button {...props}>{text}</button>;
}

export default Button;
