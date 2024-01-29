import {ReactNode} from "react";

//NOTE - Type
type CourseGoalProps = {
  title: string;
  // description: string;
  children: ReactNode;
};

//NOTE - Interface
// interface CourseGoalProps {
//   title: string;
//   description: string;
// }

function CourseGoal({
  title,
  children,
}: // description
CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
        {/* <p>{description}</p> */}
      </div>
      <button>Delete</button>
    </article>
  );
}

export default CourseGoal;
