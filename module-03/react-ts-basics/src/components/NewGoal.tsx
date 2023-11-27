import { type FormEvent } from "react";

function NewGoal() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
