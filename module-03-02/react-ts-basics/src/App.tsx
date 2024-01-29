import {useState} from "react";

import {CourseGoalList, Header} from "./components";
import goalsImg from "./assets/goals.jpg";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  //NOTE - State with type CourseGoal
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

  function handleDeleteGoal(id: number) {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  }

  return (
    <main>
      <Header image={{src: goalsImg, alt: "A list of goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
      />
    </main>
  );
}
