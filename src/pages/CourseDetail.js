import { useLocation } from 'react-router-dom'

const CourseDetail = () => {

  const { state } = useLocation();

console.log(state)

  return(
  <>
  <div className='detail-container'>
  <h1>Course detail</h1>
  <div className='info'>
  <h2> Course name: {state?.name}</h2>
  <p> Course number: {state?.number}</p>
  <p> Length: {state?.length} weeks</p>
  <p> Description: {state?.description}</p>
  <p> Start date: {state?.startDate}</p>
  </div>
  </div>
</>
  )
};

export default CourseDetail;
