import Button from "./components/Button";
import Container from "./components/Container";
// import Input from "./components/Input";

function App() {
  return (
    <main>
      <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href='https://google.com'>Link</Button>
      </p>
      <Container as={Button}>Click me</Container>
    </main>
  );
}

export default App;
