import { Label, TextInput } from 'componentLib';
import { FieldError, UseFormRegister } from 'react-hook-form';
import './DateRangeFilter.scss';

export interface DateRangeFilterFields {
  from?: Date;
  to?: Date;
}

interface DateRangeErrorProps {
  from?: FieldError;
  to?: FieldError;
}

interface DateRangeFilterProp {
  register: UseFormRegister<DateRangeFilterFields>;
  errors: DateRangeErrorProps
}


const DateRangeFilter: React.FC<DateRangeFilterProp> = ({ register, errors }) => {

  return (
    <div className='date-range-filter'>
      <Label>
        Select Date Range
      </Label>
      <div className='date-range-filter__inputs'>
        <div className='date-range-filter__inputs-from-wrapper'>
          <TextInput {...register('from')} type='date' />
        </div>
        <div className='date-range-filter__inputs-to-wrapper'>
          <TextInput  {...register('to')} type='date'/>
        </div>
      </div>
      <span className='date-range-filter__error-message'>{errors?.to && errors.to?.message} </span>
    </div>
  )
}

export default DateRangeFilter
