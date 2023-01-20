import CourseList from "../components/courseList/CourseList";
import InfoContext from '../store/info-context';
import React, { useContext} from 'react'
import './styles/course.css'

const CoursePage = () => {
  const context = useContext(InfoContext);

    return (
      <>
      <div>
      <h1 className="h1-container">Courses</h1>
      </div>
  <div className="centered">
    <div className="infoContainer">
      {
      context.courses.map((course,i) =>{
         return <CourseList data={course} key={i} />
      })
      }
    </div>
  </div>
  </>
)
}

export default CoursePage