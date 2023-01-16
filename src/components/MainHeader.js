import { NavLink } from "react-router-dom";

const MainHeader = () => {
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
          <li>
            <NavLink to="/add">Add teachers/courses</NavLink>
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
