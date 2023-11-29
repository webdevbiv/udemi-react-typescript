import { type ReactNode } from "react";
import { type CourseGoal as CourseGoalType } from "../App";

import { CourseGoal, InfoBox } from ".";

type CourseGoalPropsType = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalPropsType) {
  console.log(goals.length);

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
      <InfoBox mode='warning'>
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
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
    </>
  );
}

export default CourseGoalList;
