
import { Link } from "react-router-dom";
import React from "react";

const TeacherList  =  ({data}) => {
  return (
    <div className='courseContainer'>
        <Link state={data} to={`/teacher/${data?.id}`}>
      <h2 data-testid="name-element">Teacher firstname: {data?.firstname}</h2>
      <h3 data-testid="lastname-element">Teacher lastname: {data?.lastname}</h3>
    </Link>
    </div>
  
  )
}


export default TeacherList;
