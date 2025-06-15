import { useState } from 'react';
import styles from '../styles/AddTodo.module.css';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
        placeholder="Add a new todo..."
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}

export default AddTodo;


