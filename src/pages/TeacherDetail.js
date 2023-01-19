import { useLocation } from 'react-router-dom'
import './styles/detail.css'

const TeacherDetail = () => {

  const { state } = useLocation();

console.log(state)

  return(
  <>
  <div className='detail-container'>
  <h1> Teacher details</h1>
  <div className='info'>
  <h2> First name: {state?.firstname}</h2>
  <h3> Last name: {state?.lastname}</h3>
  <p> Social security number: {state?.socialSecNum}</p>
  <p> E-mail: {state?.email}</p>
  <p> Phone number: {state?.phoneNum}</p>
  <p> Competencies: {state?.competencies}</p>
  </div>
  </div>
</>
  )
};

export default TeacherDetail;
