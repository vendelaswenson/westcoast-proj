
import { Link } from "react-router-dom";
import { useContext } from "react";
import InfoContext from "../../store/info-context";
import React from "react";

const TeacherList = () => {
  const context = useContext(InfoContext)

  return (
    <>
      <h3>Teachers:</h3>
      {context.teachers?.map((item) => (
        <div key={item.id}>
          <Link to={`/teacher/${item.id}`} style={{ textDecoration: 'none' }}>
            <h3>First name: {item.firstname}</h3>
            <div>Last name:{item.lastname}</div>
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
