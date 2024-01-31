import {type ComponentPropsWithoutRef} from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

function Button(props: ButtonProps | AnchorProps) {
  // const {el, ...restProps} = props;
  if (props.el === "anchor") return <a {...props}></a>;

  return <button {...props}>Button</button>;
}

export default Button;
