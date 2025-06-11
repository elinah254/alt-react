function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 bg-gray-800 rounded"
        >
          <span
            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
            onClick={() => onToggle && onToggle(todo.id)}
          >
            {todo.text || todo.title}
          </span>
          {onDelete && (
            <button
              className="text-red-400 hover:text-red-600"
              onClick={() => onDelete(todo.id)}
            >
              ❌
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
