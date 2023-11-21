import { CourseGoal } from ".";
import { type CourseGoal as CourseGoalType } from "../App";

type CourseGoalPropsType = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};
function CourseGoalList({ goals, onDeleteGoal }: CourseGoalPropsType) {
  return (
    <ul>
      {goals.map(({ id, title, description }) => (
        <li key={id}>
          <CourseGoal
            id={id}
            title={title}
            onDelete={onDeleteGoal}
          >
            <p>{description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
