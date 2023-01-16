function AddTeacher() {
    return (
        <>
        <h2>Add teacher</h2>
      <form>
        <label>Teachers first name:
          <input type="text" />
        </label>
        <label>Teachers last name:
          <input type="text" />
        </label>
        <label>Social security number:
          <input type="number" />
        </label>
        <label>E-mail:
          <input type="text" />
        </label>
        <label>Phone number:
          <input type="number" />
        </label>
        <label>List of competencies:
          <input type="text" />
        </label>
        <button>Add</button>
      </form>
      </>
    )
  }

  export default AddTeacher