import React, { useCallback, useMemo } from 'react';
import { URLSearchParamsInit, useSearchParams  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Label, Select } from 'componentLib';
import { coinOptions, activityOptions, statusOptions, activityTypes } from 'utils/activity';
import { getNonBlankAttributes, dateToFormattedString } from 'utils'
import DateRangeFilter, { DateRangeFilterFields } from './components/DateRangeFilter/DateRangeFilter';
import './Filter.scss';

interface FilterProps {
  activityType: string;
  onFilterChange: () => void;
}

interface FilterFormFields extends DateRangeFilterFields {
  coin?: string;
  activity?: string;
  user?: string;
  status?: string;
}

const transformToUndefined = (val: any) => isNaN(val) ? undefined : val

const validationSchema = yup.object({
  coin: yup.string(),
  activity: yup.string(),
  user: yup.string(),
  status: yup.string(),
  from: yup.date().nullable(true).transform(transformToUndefined).default(undefined),
  to: yup.date().when('from', (from, schema) => {
    return from && schema.min(from, 'End date must be later than start date')
  }).nullable(true).transform(transformToUndefined).default(undefined)
})

const users = ['jode@xyz.com', 'mark@xyz.com']

const Filter: React.FC<FilterProps> = ({ activityType, onFilterChange }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { register, handleSubmit, formState: { errors } } = useForm<FilterFormFields>({
    resolver: yupResolver(validationSchema),
    defaultValues: Object.fromEntries(searchParams)
  })

  const handleApply = useCallback((formData: FilterFormFields) => {
    const { coin, from, to, activity, status, user } = formData
    const pageSize = searchParams.get('pageSize')
    const params = {
      pageSize,
      coin,
      from: dateToFormattedString(from),
      to: dateToFormattedString(to),
      ...activityType === activityTypes[0] ? { activity } : { user, status }
    }
    const paramsWithoutBlankAttributes = getNonBlankAttributes(params) as URLSearchParamsInit
    setSearchParams(paramsWithoutBlankAttributes)
    onFilterChange()
  }, [FormData, searchParams, dateToFormattedString, setSearchParams])

  const userOptions = useMemo(
    () => [
      { labelText: 'All Users', value: 'all'},
      ...(
        users.map(user => ({
          labelText: user,  
          value: user 
        }))
      )
    ],
    [users] 
  )

  return (
    <div className='filter'>
      <form className='filter__wrapper' onSubmit={handleSubmit(handleApply)}>
        <div className='filter__coins'>
          <Label>
            Select Coin
          </Label>
          <Select {...register('coin')} options={coinOptions}></Select>
        </div>
        {activityType === activityTypes[0] ? 
          <div className='filter__types'>
            <Label>
              Select Activity Type
            </Label>
            <Select {...register('activity')} options={activityOptions} ></Select>
          </div> : 
          <div className='filter__users'>
            <Label>
              Select User
            </Label>
            <Select {...register('user')} options={userOptions}></Select>
          </div>
        }
        <div className='filter__date-range'>
          <DateRangeFilter register={register} errors={errors}/>
        </div>
        {activityType === activityTypes[1] && 
          <div className='filter__status'>
            <Label>
              Select Status
            </Label>
            <Select {...register('status')} options={statusOptions} className='filter__status-select'></Select>
          </div>
        }
        <div className='filter__button'>
          <Button onClick={handleSubmit(handleApply)}>Apply</Button>
        </div>
      </form>
    </div>
  )
}

export default Filter
