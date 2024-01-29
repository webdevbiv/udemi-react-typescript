import {PropsWithChildren} from "react";

//NOTE - Type
// type CourseGoalProps = {
//   title: string;
//   // description: string;
//   children: ReactNode;
// };

//NOTE - Interface
// interface CourseGoalProps {
//   title: string;
//   description: string;
// }

//NOTE - PropsWithChildren
type CourseGoalProps = PropsWithChildren<{title: string}>;

function CourseGoal({title, children}: CourseGoalProps) {
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

//NOTE - FC
// type CourseGoalProps = PropsWithChildren<{title: string}>;

// const CourseGoal: FC<CourseGoalProps> = ({
//   title,
//   children,
// }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//         {/* <p>{description}</p> */}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };
// export default CourseGoal;
