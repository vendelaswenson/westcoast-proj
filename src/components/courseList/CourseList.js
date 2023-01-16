import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

const CourseList  =  () => {
  const [courses, setCourse] = useState([])

  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:3010/courses')
      .then((response) => response.json()).then((data) => setCourse(data)).catch(rejected => {
              console.log(rejected);
          });
    }
    fetchData();
  }, []);

  return (
    <>
      <h3>Courses:</h3>
      {courses?.map((item) => (
        <div key={item.id}>
          <Link to={`/course/${item.id}`} style={{ textDecoration: 'none' }}>
            <h3>Name: {item.name}</h3>
            <div>Duration: {item.length} weeks</div>
            <div>Description: {item.description}</div>
            <div>Start date: {item.startDate}</div>
          </Link>
        </div>
      ))}
    </>
  );
}


export default CourseList;