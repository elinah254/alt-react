function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center mt-4 gap-2">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        disabled={page === 1}
      >
        Prev
      </button>
      <span className="px-4 py-1">{page}</span>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
