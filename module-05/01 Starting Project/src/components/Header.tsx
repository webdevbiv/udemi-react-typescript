import { useTimersContext } from "../context/timers.tsx";

import Button from "./UI/Button.tsx";

export default function Header() {
  const timers = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timers.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
}
