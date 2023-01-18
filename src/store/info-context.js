import React, { useState, useEffect } from 'react';

const InfoContext = React.createContext({
  teachers: [],
  courses: [],
  postTeacher: ()=>{},
});

export const InfoContextProvider = (props) => {
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchTeachers = async()=>{
        const response = await fetch("http://localhost:3010/teachers")
        const data = await response.json()
        setTeachers(data)
    }
    const fetchCourses = async()=>{
      const response = await fetch("http://localhost:3010/courses")
      const data = await response.json()
      setCourses(data)
  }
  fetchTeachers()
  fetchCourses()
  }, []);

  const postTeacher = (teacherBody)=>{
    fetch('http://localhost:3010/teachers', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacherBody),
    });
  }

  // const postCourse = (teacherBody)=>{
  //   fetch('http://localhost:3010/courses', {
  //       method: 'POST',
  //       headers: {
  //       'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(teacherBody),
  //   });
  // }


  return (
    <InfoContext.Provider
      value={{
        teachers,
        courses,
        postTeacher
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;