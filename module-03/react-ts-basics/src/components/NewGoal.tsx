import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // new FormData(event.currentTarget).forEach((value, key) => {
    //   console.log(key, value);
    // });

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input
          id='goal'
          name='goal'
          ref={goal}
          type='text'
        />
      </p>

      <p>
        <label htmlFor='summary'>Short summary</label>
        <input
          id='summary'
          name='summary'
          ref={summary}
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
