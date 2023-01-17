import { useLocation } from 'react-router-dom'

const TeacherDetail = () => {

  const { state } = useLocation();

console.log(state)

  return(
  <>
  <h1> Teacher details</h1>
  <h2> First name: {state?.firstname}</h2>
  <h3> Last name: {state?.lastname}</h3>
  <p> Social security number: {state?.socialSecNum}</p>
  <p> E-mail: {state?.email}</p>
  <p> Phone number: {state?.phoneNum}</p>
  <p> Competencies: {state?.competentencies}</p>
</>
  )
};

export default TeacherDetail;
