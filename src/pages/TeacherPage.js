import TeacherList from "../components/teacherList/teacherList";
import InfoContext from '../store/info-context';
import React, { useContext} from 'react'

const TeacherPage = () => {
    const context = useContext(InfoContext);
  return (
    <div>
    <div className="infoContainer">
      <h1>Teachers:</h1>
      {
      context.teachers.map((teacher,i) =>{
         return <TeacherList data={teacher} key={i} />
      })
      }
    </div>
  </div>
  );
};

export default TeacherPage;
