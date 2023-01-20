import { Link } from "react-router-dom";
import  ReactDOM  from "react-dom"
import { Fragment, useState } from "react"
import AddPage from "../../pages/AddPage";
import './MainHeader.css'
import React from "react";

const MainHeader = () => {

  const [modal, setModal] = useState(false);

  const clickHandler = () => {
    setModal(!modal);
  }

  return (
    <header>
      <nav className="list">
        <ul className="listelements">
          <li className="listelement">
            <Link to="/landingpage">Homepage</Link>
          </li>
          <li className="listelement">
            <Link to="/courselist">Course List</Link>
          </li>
          <li className="listelement">
            <Link to="/teacherlist">Teacher List</Link>
          </li>
          <li onClick={clickHandler} className="listelement">
            Add teacher/course
          </li>
          {modal && <Fragment>
        {ReactDOM.createPortal(
        <AddPage closeModal={setModal}/>,
        document.querySelector('#modal-root'),
      )}
      </Fragment>}
          <li className="listelement">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
