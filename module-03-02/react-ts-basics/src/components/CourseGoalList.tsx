import {CourseGoal} from ".";
import {CourseGoalProps} from "../App";

type CourseGoalListProps = {
  goals: CourseGoalProps[];
};

function CourseGoalList({goals}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map(({id, title, description}) => (
        <li key={id}>
          <CourseGoal title={title}>
            <p>{description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
