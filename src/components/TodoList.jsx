import TodoItem from './TodoItem';
import styles from '../styles/TodoList.module.css';

function TodoList({ todos }) {
  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
