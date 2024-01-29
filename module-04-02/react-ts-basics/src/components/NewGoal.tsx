import {useRef, type FormEvent} from "react";

export type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

function NewGoal({onAddGoal}: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  //NOTE - Function handleSubmit with useRef. onAddGoal from App.tsx
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input
          ref={goal}
          id='goal'
          name='goal'
          type='text'
        />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input
          ref={summary}
          id='summary'
          name='summary'
          type='text'
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
