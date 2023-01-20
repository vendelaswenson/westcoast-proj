import TeacherList from "../components/teacherList/teacherList";
import InfoContext from '../store/info-context';
import React, { useContext} from 'react'
import './styles/teacher.css'

const TeacherPage = () => {
    const context = useContext(InfoContext);
  return (
    <>
    <div className="h1-container">
     <h1>Teachers</h1>
     </div>
    <div className="centered">
    <div className="infoContainer">
      {
      context.teachers.map((teacher,i) =>{
         return <TeacherList data={teacher} key={i} />
      })
      }
    </div>
  </div>
  </>
  );
};

export default TeacherPage;
