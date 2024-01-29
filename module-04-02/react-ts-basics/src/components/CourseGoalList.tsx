import {CourseGoal} from ".";
import {type CourseGoal as CourseGoalProps} from "../App";

type CourseGoalListProps = {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map(({id, title, description}) => (
        <li key={id}>
          <CourseGoal
            title={title}
            onDelete={onDeleteGoal}
            id={id}>
            <p>{description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
