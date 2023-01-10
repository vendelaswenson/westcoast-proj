import { courseItems } from "../../__mocks__/courseItems";

const CourseList = () => {
  return (
    <>
      <h3>Courses</h3>
      {courseItems.map((item) => (
        <div title={item.name} number={item.number}>
          <div>{item.name}</div>
        </div>
      ))}
    </>
  );
};

export default CourseList;
