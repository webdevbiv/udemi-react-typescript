import {
  ComponentPropsWithRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithRef<"form"> & {
  onSubmitForm: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSubmitForm, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("clear");
        form.current?.reset();
      },
    };
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSubmitForm(data);
    console.log(data);
    form.current?.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...otherProps}
      ref={form}
    >
      {children}
    </form>
  );
});

export default Form;
