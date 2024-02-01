import {
  FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

//NOTE - #58 Wrapper Component

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  {onSave, children, ...props},
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {clear: () => form.current?.reset()};
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...props}
      ref={form}>
      {children}
    </form>
  );
});

export default Form;
