import { teacherItems } from "../../__mocks__/teacherItems";

const TeacherList = () => {
  return (
    <>
      <h3>Teachers:</h3>
      {teacherItems.map((item) => (
        <div firstName={item.firstName} lastName={item.lastName}>
          <div>{item.firstName}</div>
        </div>
      ))}
    </>
  );
};

export default TeacherList;
