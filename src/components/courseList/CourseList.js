import { Link } from 'react-router-dom'
import React from "react";
import './courselist.css'

const CourseList  =  ({data}) => {
  return (
    <div className='courseContainer'>
        <Link state={data} to={`/course/${data?.id}`}>
      <h2 className='course-name'>Course name: {data?.name}</h2>
      <p className='course-number'>Course number: {data?.number}</p>
    </Link>
    </div>
  
  )
}


export default CourseList;