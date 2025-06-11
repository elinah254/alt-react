function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center p-2 bg-gray-800 border border-gray-700 mb-2 rounded">
      <span
        onClick={onToggle}
        className={`cursor-pointer flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`}
      >
        {todo.text}
      </span>
      <button onClick={onDelete} className="ml-2 text-red-500 hover:text-red-300">
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
