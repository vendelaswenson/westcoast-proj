import AddTeacher from "../components/add/AddTeacher"
import AddCourse from "../components/add/AddCourse"
import './add.css';

function AddTeacherPage() {
    return (
        <>
        <div className="modal-container">
      <AddTeacher />
      <AddCourse />
      </div>
      </>
    )
}

export default AddTeacherPage