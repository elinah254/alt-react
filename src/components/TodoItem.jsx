import styles from '../styles/TodoItem.module.css';
import { Link } from 'react-router-dom';

function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete?.(todo.id)}
        />
        <Link to={`/todos/${todo.id}`} className={styles.title}>
          {todo.title}
        </Link>
      </div>
      {onDelete && (
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      )}
    </li>
  );
}

export default TodoItem;
