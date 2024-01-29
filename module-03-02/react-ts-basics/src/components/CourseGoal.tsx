import {FC, PropsWithChildren, ReactNode} from "react";

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

const CourseGoal: FC<CourseGoalProps> = ({
  title,
  children,
}: CourseGoalProps) => {
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
};

export default CourseGoal;

// function CourseGoal({
//   title,
//   children,
// }: // description
// CourseGoalProps) {
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
// }

// export default CourseGoal;
