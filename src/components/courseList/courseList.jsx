import { courseItems } from "../../__mocks__/courseItems";
import { Link } from "react-router-dom";

const CourseList = () => {
  return (
    <>
      <h3>Courses</h3>
      {courseItems?.map((item) => (
        <div name={item.name} number={item.number}>
          <Link to={`/course/${item.id}`}>
            <div>{item.name}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CourseList;
