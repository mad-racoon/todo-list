export default function Form() {
  return (
    <form action=''>
      <p>
        <label htmlFor=''>Task</label>
        <input type='text' placeholder='Enter a name of task' />
      </p>
      <p>
        <label htmlFor=''>Description</label>
        <textarea />
      </p>
      <p>
        <label htmlFor=''>due date</label>
        <input type='date' />
      </p>
    </form>
  );
}
