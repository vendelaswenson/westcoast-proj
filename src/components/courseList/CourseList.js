import { Link } from "react-router-dom";
import { useContext } from "react";
import InfoContext from "../../store/info-context";
import React from "react";


const CourseList  =  () => {
  const context = useContext(InfoContext)

  return (
    <>
      <h3>Courses:</h3>
      {context.courses?.map((item) => (
        <div key={item.id}>
          <Link to={`/course/${item?.id}`} style={{ textDecoration: 'none' }}>
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