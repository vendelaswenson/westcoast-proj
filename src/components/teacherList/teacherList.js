import { teacherItems } from "../../__mocks__/teacherItems";
import { Link } from "react-router-dom";
import React from "react";

const TeacherList = () => {
  return (
    <>
      <h3>Teachers:</h3>
      {teacherItems?.map((item) => (
        <div firstName={item.firstName} lastName={item.lastName}>
          <Link to={`/teacher/${item.id}`}>
            <div>{item.firstName}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeacherList;
