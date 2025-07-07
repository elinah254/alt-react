import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // ✅ Toast import

function TodoItem({ todo, onToggleComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description || '');

  const handleSave = () => {
    if (!editTitle.trim()) return;

    onEdit(todo.id, {
      title: editTitle.trim(),
      description: editDescription.trim(),
    });

    toast.success('Todo updated successfully!'); // ✅ Toast call
    setIsEditing(false);
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete?.(todo.id)}
        />

        {isEditing ? (
          <div className={styles.editArea}>
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className={styles.editInput}
              placeholder="Edit title"
            />
            <input
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className={styles.editInput}
              placeholder="Edit description"
            />
          </div>
        ) : (
          <div>
            <Link to={`/todos/${todo.id}`} className={styles.title}>
              {todo.title}
            </Link>
            {todo.description && (
              <p className={styles.description}>{todo.description}</p>
            )}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        {isEditing ? (
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className={styles.editButton} onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className={styles.deleteButton} onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
