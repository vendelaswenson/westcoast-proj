import { NavLink } from "react-router-dom";
import  ReactDOM  from "react-dom"
import { Fragment, useState } from "react"
import AddPage from "../pages/AddPage";

const MainHeader = () => {

  const [modal, setModal] = useState(false);

  const clickHandler = () => {
    setModal(!modal);
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/landingpage">Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/courselist">Course List</NavLink>
          </li>
          <li>
            <NavLink to="/teacherlist">Teacher List</NavLink>
          </li>
          <li onClick={clickHandler}>
            Add teacher/course
            {modal && <Fragment>
        {ReactDOM.createPortal(
        <AddPage closeModal={setModal}/>,
        document.querySelector('#modal-root'),
      )}
      </Fragment>}
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
