import {type ComponentPropsWithoutRef} from "react";

type BaseProps = {
  text?: string;
  className?: string;
};

type ButtonProps = BaseProps & {
  el: "button";
} & Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps>;

type AnchorProps = BaseProps & {
  el: "a";
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps>;

type ButtonComponentProps = ButtonProps | AnchorProps;

function Button(props: ButtonComponentProps) {
  const {el, text, className = "button", ...restProps} = props;

  if ("href" in props) {
    return (
      <a
        {...(restProps as ComponentPropsWithoutRef<"a">)}
        className={className}>
        {text}
      </a>
    );
  }

  return (
    <button
      {...(restProps as ComponentPropsWithoutRef<"button">)}
      className={className}>
      {text}
    </button>
  );
}

export default Button;
