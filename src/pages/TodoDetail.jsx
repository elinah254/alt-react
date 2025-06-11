import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTodoById } from '../lib/api';

function TodoDetail() {
  const { id } = useParams();
  const { data: todo, isLoading, isError } = useQuery(['todo', id], () => fetchTodoById(id));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading todo.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto text-white">
      <h2 className="text-2xl font-semibold mb-4">Todo Detail</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
      <Link to="/" className="text-blue-400 mt-4 inline-block">← Back to Todos</Link>
    </div>
  );
}

export default TodoDetail;
