import { Button } from 'antd'
import { useMemo } from 'react'

export const Pagination = ({ page, totalPages, setPage }) => {
  const pagesArray = useMemo(() => {
    let start = Math.floor((page - 1) / 5) * 5
    return new Array(5)
      .fill()
      .map((_, idx) => start + idx + 1)
      .filter((i) => i <= totalPages)
  }, [page, totalPages])

  const handlePrevious = () => setPage((p) => p - 1)
  const handleNext = () => setPage((p) => p + 1)

  return (
    totalPages && (
      <div className='posts'>
        <Button onClick={handlePrevious} disabled={page === 1}>
          Prev
        </Button>
        {pagesArray?.map((pageNum) => (
          <Button key={pageNum} onClick={() => setPage(pageNum)}>
            {pageNum}
          </Button>
        ))}
        <Button onClick={handleNext} disabled={page === totalPages}>
          Next
        </Button>
        <span className='pages'>
          {page} / {totalPages}
        </span>
      </div>
    )
  )
}
