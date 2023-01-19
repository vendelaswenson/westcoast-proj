import AddTeacher from "../components/add/AddTeacher"
import AddCourse from "../components/add/AddCourse"
import './styles/add.css';

function AddPage() {
    return (
        <>
        <div className="modal-container">
      <AddTeacher />
      <AddCourse />
      </div>
      </>
    )
}

export default AddPage