import {useRef} from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const input = useRef(null);

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
    </main>
  );
}

export default App;
