import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';


function AddTeacher() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const socSecInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const compentenceInputRef = useRef();

  const clearForm = () => {
    firstNameInputRef.current.value = '';
    lastNameInputRef.current.value = '';
    socSecInputRef.current.value = '';
    emailInputRef.current.value = '';
    phoneInputRef.current.value = '';
    compentenceInputRef.current.value = '';
  };

  const onSubmitHandler = (e) => {

    const teacher = {
      firstname: firstNameInputRef.current.value,
      lastname: lastNameInputRef.current.value,
      socialSecNum: socSecInputRef.current.value,
      email: emailInputRef.current.value,
      phoneNum : phoneInputRef.current.value,
      competentencies: compentenceInputRef.current.value,
      id: uuidv4()
    };

    (async () => {
      const rawResponse = await fetch('http://localhost:3010/teachers', {
        method: 'POST',
        body: JSON.stringify(teacher)
      });
      const content = await rawResponse.json();
    
      console.log(content);
    })();
    clearForm();
  }

 



  const onCancelClickHandler = (e) => {
    e.preventDefault();
    clearForm();
  }

    return (
        <>
        <h2>Add teacher</h2>
      <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor='firstName'>Teachers first name:  </label>
          <input type="text" name='firstName' id='firstName' ref={firstNameInputRef} />
      </div>
      <div>
        <label htmlFor='lastName'>Teachers last name:  </label>
          <input type="text" name='lastName' id='lastName' ref={lastNameInputRef} />
      </div>
      <div>
        <label htmlFor='socSecNum'>Social security number:  </label>
          <input type="text" name='socSecNum' id='socSecNum' ref={socSecInputRef} />
      </div>
      <div>
        <label htmlFor='email'>E-mail:  </label>
          <input type="text" name='email' id='email' ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor='phoneNum'>Phone number:  </label>
          <input type="text" name='phoneNum' id='phoneNum' ref={phoneInputRef} />
      </div>
      <div>
        <label htmlFor='competence'>Competencies:  </label>
          <input type="text" name='competence' id='competence' ref={phoneInputRef} />
      </div>
      <div className='btns-container'>
      <button>Add</button>
      <button onClick={onCancelClickHandler}>Cancel</button>
      </div>
        
      </form>
      </>
    )
  }

  export default AddTeacher