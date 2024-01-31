import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <p>
        <Button el='button'>Button</Button>
      </p>
      <p>
        <Button
          el='a'
          href='https://google.com'>
          Link
        </Button>
      </p>
    </main>
  );
}

export default App;
