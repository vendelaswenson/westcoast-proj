
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

const TeacherList = () => {
 const [teachers, setTeacher] = useState([])

  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:3010/teachers')
      .then((response) => response.json()).then((data) => setTeacher(data)).catch(rejected => {
              console.log(rejected);
          });
    }
    fetchData();
  }, []);

  return (
    <>
      <h3>Teachers:</h3>
      {teachers?.map((item) => (
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
