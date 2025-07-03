import TodoItem from './TodoItem';
import styles from '../styles/TodoList.module.css';

function TodoList({ todos, onToggleComplete, onDelete }) {
  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
