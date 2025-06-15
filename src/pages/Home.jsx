import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../lib/api';
import TodoList from '../components/TodoList';
import Pagination from '../components/Pagination';
import AddTodo from '../components/AddTodo';

function Home() {
  const [page, setPage] = useState(1);
  const [localTodos, setLocalTodos] = useState([]);
  const { data: remoteTodos = [], isLoading, isError } = useQuery(['todos', page], () => fetchTodos(page));

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      title: text,
      completed: false
    };
    setLocalTodos([newTodo, ...localTodos]);
  };

  const todos = [...localTodos, ...remoteTodos];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching todos</p>;

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Todo App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Home;
