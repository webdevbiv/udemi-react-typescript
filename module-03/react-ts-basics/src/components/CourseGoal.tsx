//NOTE - This is type CourseGoalPropsType
// type CourseGoalPropsType = {
//   title: string;
//   description: string;
// };

import {
  PropsWithChildren,
  // FC,
  // ReactNode
} from "react";

//NOTE - This is interface CourseGoalPropsInterface
// interface CourseGoalPropsInterface {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalPropsType = PropsWithChildren<{ title: string }>;

//NOTE - This is function CourseGoal
function CourseGoal({ title, children }: CourseGoalPropsType) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

export default CourseGoal;

//NOTE - This is arrow function CourseGoal2
// const CourseGoal2: FC<CourseGoalPropsType> = ({ title, children }) => (
//   <article>
//     <div>
//       <h2>{title}</h2>
//       {children}
//     </div>
//     <button>Delete</button>
//   </article>
// );

// export default CourseGoal2;
