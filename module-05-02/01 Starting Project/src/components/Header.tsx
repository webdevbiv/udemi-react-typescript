import Button from "./UI/Button.tsx";
import {useTimersContext} from "../context/timers-context.tsx";

export default function Header() {
  const timersCtx = useTimersContext();
  console.log(timersCtx);

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
        }>
        {timersCtx.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
