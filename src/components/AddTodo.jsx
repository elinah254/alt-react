import { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        className="flex-grow p-2 rounded-l bg-gray-800 border border-gray-700"
        placeholder="Add todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-600 px-4 py-2 rounded-r text-white">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
