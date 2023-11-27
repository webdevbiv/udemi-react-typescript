import { type FormEvent } from "react";

function NewGoal({ onAddGoal }: { onAddGoal: () => void }) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAddGoal;
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input
          type='text'
          id='goal'
        />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>

        <input
          type='text'
          id='summary'
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
