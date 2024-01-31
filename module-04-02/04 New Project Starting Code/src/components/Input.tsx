import {ComponentPropsWithoutRef} from "react";

//NOTE - #56 forwardRef
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

function Input({label, id, ...props}: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
      />
    </p>
  );
}

export default Input;
