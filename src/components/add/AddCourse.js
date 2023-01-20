import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InfoContext from '../../store/info-context';
import React, { useContext, useState} from 'react';



function AddCourse() {

  const [modal, setModal] = useState(true);
  const context = useContext(InfoContext);

  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const lengthInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();

  const clearForm = () => {
    nameInputRef.current.value = '';
    numberInputRef.current.value = '';
    lengthInputRef.current.value = '';
    descriptionInputRef.current.value = '';
    dateInputRef.current.value = '';
  };
  

  const onSubmitHandler = (e) => {

    let name = nameInputRef.current.value
    let number = numberInputRef.current.value
    let length = lengthInputRef.current.value
    let description = descriptionInputRef.current.value
    let startDate = dateInputRef.current.value
    let id = uuidv4()


    const courseBody = {
      name, number, length, description, startDate, id 
    }
    context.postCourse(courseBody)
  }

  const onCancelClickHandler = (e) => {
    setModal(!modal);
    e.preventDefault();
    clearForm();
  }

    return (
      <>
      {modal ? <div className='course-container'> <h2 className='add-h2'>Add Course</h2>
    <form onSubmit={onSubmitHandler}>
    <div>
      <label htmlFor='name'>Course name:  </label> <br/>
        <input type="text" name='name' id='name' ref={nameInputRef} />
    </div>
    <div>
      <label htmlFor='number'>Course number:  </label><br/>
        <input type="text" name='number' id='number' ref={numberInputRef} />
    </div>
    <div>
      <label htmlFor='length'>Length:  </label><br/>
        <input type="text" name='length' id='length' ref={lengthInputRef} />
    </div>
    <div>
      <label htmlFor='description'>Description:  </label><br/>
        <input type="text" name='description' id='description' ref={descriptionInputRef} />
    </div>
    <div>
      <label htmlFor='startDate'>Start date:  </label><br/>
        <input type="text" name='startDate' id='startDate' ref={dateInputRef} />
    </div>
    <div className='btns-container'>
    <button data-testid="button" className='btn'>Add</button>
    <button className='btn' onClick={onCancelClickHandler}>Cancel</button>
    </div>
      
    </form> </div> : null }
      
      
    </>
    )
  }

  export default AddCourse