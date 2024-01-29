import {useState} from "react";

import {CourseGoal} from "./components";
import {Header} from "./components";
import goalsImg from "./assets/goals.jpg";

type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  //NOTE - Function handleAddGoal to add new goal
  function handleAddGoal() {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth",
      };

      return [...prev, newGoal];
    });
  }

  return (
    <main>
      <Header image={{src: goalsImg, alt: "A list of goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map(({id, title, description}) => (
          <li key={id}>
            <CourseGoal title={title}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
