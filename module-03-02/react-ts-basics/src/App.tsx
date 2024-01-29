import { CourseGoal } from "./components";
import { Header } from "./components";
import goalsImg from "./assets/goals.png";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
      <CourseGoal
        title='Learn React + TS'
        // description='Learn it from ground up'
      >
        <p>Learn it from ground up</p>
      </CourseGoal>
    </main>
  );
}
