import { Layout } from "@/components/common/Pagination/Pagination.styled";

function Pagination({ total = 100, limit, setPage, page }) {
  const numPages = Math.ceil(total / limit);
  return (
    <Layout>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        {"<"}
      </button>
      {Array(numPages)
        .fill(numPages)
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        ))}

      <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        {">"}
      </button>
    </Layout>
  );
}
export default Pagination;
