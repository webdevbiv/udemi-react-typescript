import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";
import InputWithRef from "./components/InputWithRef.tsx";
import { useRef } from "react";
import Form from "./components/Form.tsx";

function App() {
  const input = useRef<HTMLInputElement>(null);
  console.log(input);

  return (
    <main>
      <Form>
        <Input
          id='name'
          label='Your name'
          type='text'
        />
        <Input
          id='age'
          label='Your age'
          type='number'
        />
        <InputWithRef
          label='Test'
          id='test'
          ref={input}
        />
        <p>
          <Button
            text='Submit'
            el='button'
          />
        </p>
      </Form>
      <Container as='div'>
        <p>
          <Button
            text='Save'
            el='button'
          />
        </p>
        <p>
          <Button
            el='anchor'
            text='Go to Udemy'
            href='https://www.udemy.com'
            target='_blank'
            rel='noopener noreferrer'
          />
        </p>
      </Container>
    </main>
  );
}

export default App;
