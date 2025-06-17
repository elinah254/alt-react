// import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { fetchTodoById } from '../lib/api';

// function TodoDetail() {
//   const { id } = useParams();
//   const { data, isLoading, isError } = useQuery(['todo', id], () => fetchTodoById(id));

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error fetching todo</p>;

//   return (
//     <div style={{ padding: '1rem' }}>
//       <h2>Todo Detail</h2>
//       <p><strong>ID:</strong> {data.id}</p>
//       <p><strong>Title:</strong> {data.title}</p>
//       <p><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
//     </div>
//   );
// }

// export default TodoDetail;

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTodoById } from '../lib/api';

function TodoDetail() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodoById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching todo</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Todo Detail</h2>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default TodoDetail;
