import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';
import { Link } from 'react-router-dom';

function TodoItem({ todo, onToggleComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description || '');

  const handleSave = () => {
    if (!editedTitle.trim()) return;
    onEdit(todo.id, {
      title: editedTitle.trim(),
      description: editedDescription.trim(),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(todo.title);
    setEditedDescription(todo.description || '');
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className={styles.editInput}
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className={styles.editTextarea}
            />
            <div className={styles.editActions}>
              <button onClick={handleSave} className={styles.saveButton}>Save</button>
              <button onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
            </div>
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
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className={styles.editButton}
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
