import { useLocation } from 'react-router-dom'

const CourseDetail = () => {

  const { state } = useLocation();

console.log(state)

  return(
  <>
  <h1>Course detail</h1>
  <h2> Course name: {state?.name}</h2>
  <p> Course number: {state?.number}</p>
  <p> Length: {state?.length} weeks</p>
  <p> Description: {state?.description}</p>
  <p> Start date: {state?.startDate}</p>
</>
  )
};

export default CourseDetail;
