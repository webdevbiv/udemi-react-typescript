import {useRef} from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, {type FormHandle} from "./components/Form";

function App() {
  const input = useRef(null);
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as {name: string; age: string};
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href='https://google.com'>Link</Button>
      </p>
      <Container as={Button}>Click me</Container>
      <Input
        label='Name'
        id='name'
        ref={input}
      />
      <Form
        onSave={handleSave}
        ref={customForm}>
        <Input
          type='text'
          label='Name'
          id='name'
          ref={input}
        />
        <Input
          type='number'
          label='Age'
          id='age'
        />
        <p>
          <Button>Submit</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
