import { createContext, useContext, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: false,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timers = useContext(TimersContext);
  if (timers === null) {
    throw new Error(
      "TimersContext is not available. Did you forget to wrap your component in TimersContextProvider?"
    );
  }

  return timers;
}

type TimersContextProps = {
  children: React.ReactNode;
};

function timersReducer(state, action): TimersState {}

export default function TimersContextProvider({
  children,
}: TimersContextProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: [01],
    isRunning: false,
    addTimer(timerData) {},
    startTimer() {},
    stopTimer() {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
