import { Button } from 'antd'

export const Pagination = ({ page, totalPages, setPage }) => (
  <>
    {totalPages && (
      <div className='pagination'>
        <Button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
          Prev
        </Button>
        <Button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
        {page} / {totalPages}
      </div>
    )}
  </>
)
