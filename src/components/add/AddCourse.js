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
        <button>Add</button>
      </form>
      </>
    )
  }

  export default AddCourse