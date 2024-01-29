import {type ReactNode} from "react";
import {CourseGoal, InfoBox} from ".";
import {type CourseGoal as CourseGoalProps} from "../App";

type CourseGoalListProps = {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox
        mode='warning'
        severity='medium'>
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
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
    </>
  );
}

export default CourseGoalList;
