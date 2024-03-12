import {useEffect, useRef, useState} from "react";
import {type Timer as TimerProps} from "../context/timers-context.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({name, duration}: TimerProps) {
  const interval = useRef<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(duration * 1000);

  if (timeLeft <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    const timer = (interval.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 50);
    }, 50));
    interval.current = timer;
    console.log(interval.current);

    return () => clearInterval(timer);
  }, []);

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
