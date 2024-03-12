import {useEffect, useState} from "react";
import {type Timer as TimerProps} from "../context/timers-context.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({name, duration}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 1000);

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 50);
      }, 50);
    }
  });

  const formattedTimeLeft = (timeLeft / 1000).toFixed(2);

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress
          value={timeLeft}
          max={duration * 1000}
        />
      </p>
      <p>{formattedTimeLeft}</p>
    </Container>
  );
}
