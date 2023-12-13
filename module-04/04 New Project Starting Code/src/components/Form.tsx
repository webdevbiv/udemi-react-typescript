import { ComponentPropsWithRef, FormEvent } from "react";

type FormProps = ComponentPropsWithRef<"form">;

function Form(props: FormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...props}
    >
      {props.children}
    </form>
  );
}

export default Form;
