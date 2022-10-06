import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { TableWithPagination } from 'componentLib';
import Filter from 'components/Filter';
import EntityPagination from 'components/EntityPagination';
import { activityTypes } from 'utils/activity';
import { pageSizeOptions } from 'components/EntityPagination';
import './Activity.scss';
interface ActivityProps {
  
}

const mockActivityData = [
  [
    <div>
      John, <a>doe@company.com</a> added <a href='jane.doe@company.com'>jane.doe@company.com</a> as a member<br/>
      May 24, 2022 9.18 am GMT<br/>
      IP address 10.12.13.14<br/>
      User Agent: Mozilla 5.0(Macintosh 10.2.1)<br/>
    </div>
  ],
  [
    <div>
      John, <a>doe@company.com</a> added <a href='jane.doe@company.com'>jane.doe@company.com</a> as a member<br/>
      May 24, 2022 9.18 am GMT<br/>
      IP address 10.12.13.14<br/>
      User Agent: Mozilla 5.0(Macintosh 10.2.1)<br/>
    </div>
  ],
  [
    <div>
      John, <a>doe@company.com</a> added <a href='jane.doe@company.com'>jane.doe@company.com</a> as a member<br/>
      May 24, 2022 9.18 am GMT<br/>
      IP address 10.12.13.14<br/>
      User Agent: Mozilla 5.0(Macintosh 10.2.1)<br/>
    </div>
  ]
]

const Activity: React.FC<ActivityProps> = () => {

  const [dummyActivityMatrix] = useState(mockActivityData)
  
  const [searchParams] = useSearchParams()
  const [pageNumber, setPageNumber] = useState(1)
  const [total, setTotal] = useState(10)
  const [count, setCount] = useState<number>(1)
  const [pageSize, setPageSize] = useState(pageSizeOptions[0].value)

  useEffect(() => {
    //api call with searchParams
  }, [searchParams])

  useEffect(() => {
    setCount(Math.ceil(total / pageSize))
  }, [total, pageSize])

  return (
    <div className='activity'>
      <h2 className='activity__title'>Activity Logs</h2>
      <Filter activityType={activityTypes[0]} onFilterChange={() => setPageNumber(1)}/>
      <div className="activity__table">
        <TableWithPagination className='activity__table-content' highlightedRowIndexes={[]} rowsPerPage={pageSize} rows={dummyActivityMatrix} />
      </div>
      <div className='activity__footer'>
        <div>Export</div>
        <div className='activity__footer-pagination'>
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

export default Activity;
