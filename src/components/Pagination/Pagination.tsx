import PaginationItem, { PaginationItemVariant } from './components/PaginationItem';
import PageNumberInput from './components/PageNumberInput';
import TriangleLeft from '../../images/icons/TriangleLeft';
import TriangleRight from '../../images/icons/TriangleRight'
import './Pagination.scss'

const MAX_VISIBLE_PAGE_COUNT = 5

const getPagingRange = (pageNumber: number, pageCount: number = 20): number[] => {
  const minPage = 1
  const length = Math.min(pageCount, MAX_VISIBLE_PAGE_COUNT)
  let start = pageNumber - Math.floor(length / 2)
  start = Math.max(start, minPage)
  start = Math.min(start, minPage + pageCount - length)

  return Array.from({ length }, (el, i) => start + i)
}

export interface PaginationProps {
  pageNumber: number
  pageCount: number
  onPageChange: (nextPage: number) => void
  hidePageNumbers?: boolean
}

const PaginationComponent: React.FC<PaginationProps> = ({ pageNumber, pageCount, onPageChange, hidePageNumbers }) => {
  const pages = getPagingRange(pageNumber, pageCount)
  return pageCount > 1 ? (
    <div className='Pagination'>
      {pageCount > MAX_VISIBLE_PAGE_COUNT && (
        <div className='Pagination__group'>
          <PaginationItem
            onPageChange={onPageChange}
            pageNumber={1}
            disabled={pageNumber === 1}
            variant={PaginationItemVariant.SIDE}>
            1
          </PaginationItem>
        </div>
      )}
      <div className='Pagination__group'>
        <PaginationItem
          aria-label='prev'
          onPageChange={onPageChange}
          pageNumber={pageNumber - 1}
          variant={PaginationItemVariant.ARROW}
          disabled={pageNumber === 1}>
          <TriangleLeft className='Pagination__arrow' />
        </PaginationItem>
        {!hidePageNumbers &&
          pages.map((page) => (
            <PaginationItem
              aria-label={page}
              onPageChange={onPageChange}
              key={page}
              active={pageNumber === page}
              pageNumber={page}
              variant={PaginationItemVariant.NUMBER}
            />
          ))}
        <PaginationItem
          aria-label='next'
          onPageChange={onPageChange}
          pageNumber={pageNumber + 1}
          variant={PaginationItemVariant.ARROW}
          disabled={pageNumber === pageCount}>
          <TriangleRight className='Pagination__arrow' />
        </PaginationItem>
      </div>
      {pageCount > MAX_VISIBLE_PAGE_COUNT && (
        <div className='Pagination__group'>
          <PaginationItem
            onPageChange={onPageChange}
            pageNumber={pageCount}
            disabled={pageNumber === pageCount}
            variant={PaginationItemVariant.SIDE}>
            {pageCount}
          </PaginationItem>
        </div>
      )}

     <PageNumberInput onPageChange={onPageChange} pageCount={pageCount} />
    </div>
  ) : null
}

export default PaginationComponent
