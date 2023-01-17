import React, { useState, useEffect } from 'react';

const InfoContext = React.createContext({
  teachers: [],
  courses: [],
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


  return (
    <InfoContext.Provider
      value={{
        teachers,
        courses
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;