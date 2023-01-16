import { teacherItems } from "../../__mocks__/teacherItems";
import { Link } from "react-router-dom";
import React from "react";

const TeacherList = () => {
  return (
    <>
      <h3>Teachers:</h3>
      {teacherItems?.map((item) => (
        <div firstName={item.firstName} lastName={item.lastName}>
          <Link to={`/teacher/${item.id}`} style={{ textDecoration: 'none' }}>
            <h3>First name: {item.firstName}</h3>
            <div>Last name:{item.lastName}</div>
            <div>Social security number:{item.socialSecNum}</div>
            <div>Email:{item.email}</div>
            <div>Phone number: {item.phoneNum}</div>
            <div>Competencies: {item.competentencies}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeacherList;
