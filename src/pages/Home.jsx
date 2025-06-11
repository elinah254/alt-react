import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchTodos } from '../lib/api';
import TodoList from '../components/TodoList';
import Pagination from '../components/Pagination';

function Home() {
  const [page, setPage] = useState(1);
  const { data: todos = [], isLoading, isError } = useQuery(['todos', page], () => fetchTodos(page));

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error fetching todos</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <TodoList todos={todos} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Home;
