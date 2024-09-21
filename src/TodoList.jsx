/* eslint-disable react/prop-types */
import { TodoItem } from './TodoItem';

export function TodoList({ todos, togleTodo, deleteTodos }) {
  return (
    <ul className="list">
      {todos.length === 0 && 'No Todos'}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.key}
            togleTodo={togleTodo}
            deleteTodos={deleteTodos}
          />
        );
      })}
    </ul>
  );
}
