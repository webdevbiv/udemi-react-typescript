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
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              key={goal.id}
              title={goal.title}
              description={goal.description}
            />
          </li>
        ))}
      </ul>
      <CourseGoal
        title='Learn React + TS'
        // description='Learn it from ground up'
      >
        <p>Learn it from ground up</p>
      </CourseGoal>
    </main>
  );
}
