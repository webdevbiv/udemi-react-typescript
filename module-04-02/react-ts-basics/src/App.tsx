import {useState} from "react";

import {CourseGoalList, Header, NewGoal} from "./components";
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
  function handleAddGoal(goal: string, summary: string) {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
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
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
      />
    </main>
  );
}
