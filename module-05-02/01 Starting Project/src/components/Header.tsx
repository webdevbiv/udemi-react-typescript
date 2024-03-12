import {useTimersContext} from "../context/timers-context.tsx";
``;
import Button from "./UI/Button.tsx";

export default function Header() {
  const timersCtx = useTimersContext();
  console.log(timersCtx);

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersCtx.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
}
