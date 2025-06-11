import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoDetail from './pages/TodoDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <main className="p-4 max-w-3xl mx-auto text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos/:id" element={<TodoDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
