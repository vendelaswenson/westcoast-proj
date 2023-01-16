function AddCourse() {
    return (
        <>
        <h2>Add course</h2>
      <form>
        <label>Course name:
          <input type="text" />
        </label>
        <label>Course number:
          <input type="number" />
        </label>
        <label>Length:
          <input type="number" />
        </label>
        <label>Description:
          <input type="text" />
        </label>
        <label>Start date:
          <input type="text" />
        </label>
        <button>Add</button>
      </form>
      </>
    )
  }

  export default AddCourse