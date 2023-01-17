
import { Link } from "react-router-dom";
import React from "react";

const TeacherList  =  ({data}) => {
  return (
    <div className='courseContainer'>
        <Link state={data} to={`/teacher/${data?.id}`}>
      <h2>Teacher firstname: {data?.firstname}</h2>
      <h3>Teacher lastname: {data?.lastname}</h3>
    </Link>
    </div>
  
  )
}


export default TeacherList;
