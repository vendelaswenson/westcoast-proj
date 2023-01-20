import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InfoContext from '../../store/info-context';
import React, { useContext, useState} from 'react';
import './addcomp.css';

function AddTeacher() {

  const [modal, setModal] = useState(true);
  const context = useContext(InfoContext);

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

    let firstname = firstNameInputRef.current.value
    let lastname = lastNameInputRef.current.value
    let socialSecNum = socSecInputRef.current.value
    let email = emailInputRef.current.value
    let phoneNum = phoneInputRef.current.value
    let competencies = compentenceInputRef.current.value
    let id = uuidv4()


    const teacherBody = {
      firstname, lastname, socialSecNum, email, phoneNum, competencies, id 
    }

    context.postTeacher(teacherBody)
    
  }

  const onCancelClickHandler = (e) => {
    setModal(!modal);
    e.preventDefault();
    clearForm();
  }

    return (
        <>
        {modal ? <div className='teacher-form'> <h2 className='add-h2'>Add teacher</h2>
      <form  onSubmit={onSubmitHandler}>
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
          <input type="text" name='competence' id='competence' ref={compentenceInputRef} />
      </div>
      <div className='btns-container'>
      <button data-testid="add-word-button" className='btn'>Add</button>
      <button className='btn' onClick={onCancelClickHandler}>Cancel</button>
      </div>
        
      </form>  </div> : null}
        
      </>
    )
  }

  export default AddTeacher