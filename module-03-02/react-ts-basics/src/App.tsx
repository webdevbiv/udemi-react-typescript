import {CourseGoal} from "./components";
import {Header} from "./components";
import goalsImg from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header image={{src: goalsImg, alt: "A list of goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal
        title='Learn React + TS'
        // description='Learn it from ground up'
      >
        <p>Learn it from ground up</p>
      </CourseGoal>
    </main>
  );
}
