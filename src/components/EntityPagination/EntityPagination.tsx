import React, { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import { Select } from "componentLib";
import Pagination from "components/Pagination";
import './EntityPagination.scss';

export const pageSizeOptions = [
  {
    labelText: '3',
    value: 3
  },
  {
    labelText: '5',
    value: 5
  },
  {
    labelText: '10',
    value: 10
  },
  {
    labelText: '20',
    value: 20
  },
]
interface EntityPaginationProps {
  pageSize: number;
  pageNumber: number;
  count: number;
  onPageChange: (pageNumber: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const EntityPagination: React.FC<EntityPaginationProps> = ({  pageSize, count, pageNumber, onPageChange, onPageSizeChange }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handlePageSizeChange = useCallback((e: React.ChangeEvent<any>) => {
  const pageSize = e.target.value
  onPageSizeChange(pageSize)
  onPageChange(1)
  const query = Object.fromEntries(searchParams)
  const newQuery = {
    ...query,
    ...{ pageSize: pageSize.toString() }, 
  }
  setSearchParams(newQuery)
  }, [searchParams, pageSize])

  const handlePageChange = useCallback((pageNum: number) => {
    onPageChange(pageNum)
    const query = Object.fromEntries(searchParams)
    const newQuery = {
      ...query,
      ...{ pageNumber: pageNum.toString() } 
    }
    setSearchParams(newQuery)
  }, [searchParams])

  return (
    <div className="entity-pagination">
      <div className='entity-pagination__select-wrapper'>
        <span>Displaying</span>
        <Select className="entity-pagination__select-content" options={pageSizeOptions} size='extra-small' value={pageSize} onChange={handlePageSizeChange} />
        <span>Items Per Page</span>
      </div>
      <Pagination pageCount={count} pageNumber={pageNumber} onPageChange={handlePageChange} />
    </div>
  )
}

export default EntityPagination
