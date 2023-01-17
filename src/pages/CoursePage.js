import CourseList from "../components/courseList/CourseList";
import InfoContext from '../store/info-context';
import React, { useContext} from 'react'

const CoursePage = () => {
  const context = useContext(InfoContext);

    return (
  <div>
    <div className="infoContainer">
      <h1>Courses</h1>
      {
      context.courses.map((course,i) =>{
         return <CourseList data={course} key={i} />
      })
      }
    </div>
  </div>
)
}

export default CoursePage