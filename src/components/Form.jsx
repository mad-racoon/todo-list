export default function Form() {
  return (
    <form action="">
      <p>
        <label htmlFor="">Task</label>
        <input type="text" placeholder="Enter a name of task" />
      </p>
      <p>
        <label htmlFor="">Description</label>
        <textarea />
      </p>
      <p>
        <label htmlFor="">Due Date</label>
        <input type="date" />
      </p>
      <p>
        <label htmlFor="">Select Label</label>
        <select name="label" id="label">
          <option value="green">green</option>
          <option value="yellow">yellow</option>
          <option value="red">red</option>
        </select>
      </p>
    </form>
  );
}
