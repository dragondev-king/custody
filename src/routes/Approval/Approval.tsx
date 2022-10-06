import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { TableWithPagination } from 'componentLib';
import Filter from 'components/Filter';
import EntityPagination from 'components/EntityPagination';
import { activityTypes } from 'utils/activity';
import { pageSizeOptions } from 'components/EntityPagination';
import './Approval.scss';
import { Trans } from 'react-i18next';

interface ApprovalProps {
  
}

const mockApprovalData = [
  ['Signature required for transaction. Transaction Id 0xcdeeabeebabb3432eeabdc', 'May3, 2022 6.15 pm GMT', <div className='activity__table-status'><span>pending</span></div>, 'jode@xyz.com', 'Due by 15th May, 10 am GMT'],
  ['Signature required for transaction. Transaction Id 0x1ecdabeebabb3432ee2ecd', 'Apr 12, 2022 3.20 pm GMT', <div className='activity__table-status'><span>completed</span></div>, 'mark@xyz.com', 'All process completed'],
  ['Signature required for transaction. Transaction Id 0x1ecdabeebabb3432ee2ecd', 'Apr 12, 2022 3.20 pm GMT', <div className='activity__table-status'><span>pending</span></div>, 'mark@xyz.com', 'All process completed'],
  ['Signature required for transaction. Transaction Id 0x1ecdabeebabb3432ee2ecd', 'Apr 12, 2022 3.20 pm GMT', <div className='activity__table-status'><span>completed</span></div>, 'mark@xyz.com', 'All process completed'],
  ['Signature required for transaction. Transaction Id 0x1ecdabeebabb3432ee2ecd', 'Apr 12, 2022 3.20 pm GMT', <div className='activity__table-status'><span>completed</span></div>, 'mark@xyz.com', 'All process completed'],
  ['Signature required for transaction. Transaction Id 0x1ecdabeebabb3432ee2ecd', 'Apr 12, 2022 3.20 pm GMT', <div className='activity__table-status'><span>pending</span></div>, 'mark@xyz.com', 'All process completed'],
  ['Signature required for transaction. Transaction Id 0x1ecdabeebabb3432ee2ecd', 'Apr 12, 2022 3.20 pm GMT', <div className='activity__table-status'><span>completed</span></div>, 'mark@xyz.com', 'All process completed'],
]

const Approval: React.FC<ApprovalProps> = () => {

  const [dummyApprovalMatrix] = useState(mockApprovalData)
  
  const [searchParams] = useSearchParams()
  const [pageNumber, setPageNumber] = useState(1)
  const [total, setTotal] = useState(30)
  const [count, setCount] = useState<number>(1)
  const [pageSize, setPageSize] = useState(pageSizeOptions[0].value)

  useEffect(() => {
    //api call with searchParams
  }, [searchParams])

  useEffect(() => {
    setCount(Math.ceil(total / pageSize))
  }, [total, pageSize])

  return (
    <div className='approval'>
      <h2 className='approval__title'>
        <Trans i18nKey={'approval.title'} />
      </h2>
      <Filter activityType={activityTypes[1]} onFilterChange={() => setPageNumber(1)}/>
      <div className="approval__table">
          <TableWithPagination className='approval__table-content' highlightedRowIndexes={[]} rowsPerPage={3} rows={dummyApprovalMatrix} headers={['Task', 'Request Time', 'Status', 'Owner', 'Comments']} />
      </div>
      <div className='approval__footer'>
        <div>Export</div>
        <div className='approval__footer-pagination'>
          <EntityPagination
            pageSize={pageSize}
            pageNumber={pageNumber}
            count={count}
            onPageChange={setPageNumber}
            onPageSizeChange={setPageSize}
          />
        </div>
      </div>
    </div>
  )
}

export default Approval;
