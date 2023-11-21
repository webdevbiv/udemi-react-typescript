import { Header, CourseGoal } from "./components";
import goalsImg from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title='Learn React + TypeScript'>
        <p>Learn it form the ground up!</p>
      </CourseGoal>
    </main>
  );
}
