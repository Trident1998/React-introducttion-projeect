// eslint-disable-next-line react/prop-types
export function TodoItem({ completed, id, title, togleTodo, deleteTodos }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => togleTodo(id, e.target.checked)}
        />
        {title}
      </label>

      <button className="btn btn-danger" onClick={() => deleteTodos(id)}>
        Delete
      </button>
    </li>
  );
}
