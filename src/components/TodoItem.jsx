import styles from '../styles/TodoItem.module.css';
import { Link } from 'react-router-dom';

function TodoItem({ todo }) {
  return (
    <li className={styles.item}>
      <Link to={`/todos/${todo.id}`}>
        <input type="checkbox" checked={todo.completed} readOnly />
        <span>{todo.title}</span>
      </Link>
    </li>
  );
}

export default TodoItem;
