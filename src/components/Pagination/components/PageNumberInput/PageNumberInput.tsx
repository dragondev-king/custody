import { useCallback, useState, useRef } from 'react';
import { Button } from 'componentLib';
import Typography from 'componentLib/typography/Typography';

import './PageNumberInput.scss'

export interface PageNumberInputProps {
  onPageChange: (nextPage: number) => void
  pageCount: number
}

const PageNumberInput: React.FC<PageNumberInputProps> = ({ onPageChange, pageCount }) => {
  const [value, setValue] = useState(0)
  const inputEl = useRef<HTMLInputElement>(null)

  const handleChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const newValue: number = Number(event.currentTarget.value)
      if (isNaN(newValue)) {
        return
      }
      setValue(newValue)
    },
    [setValue]
  )

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()
      onPageChange(value)
    },
    [onPageChange, value]
  )

  return (
    <form className='PageNumberInput' onSubmit={handleSubmit}>
      <Typography className='PageNumberInput__label'>
        Go to page
      </Typography>
      <div className='PageNumberInput__input-wrapper'>
        <input
          ref={inputEl}
          type='text'
          className='PageNumberInput__input'
          onChange={handleChange}
          value={value || ''}
        />
      </div>
      <div>
        <Button
          type='submit'
          disabled={value < 1 || value > pageCount}
          className='PageNumberInput__submit'
        >
          Go
        </Button>
      </div>
    </form>
  )
}

export default PageNumberInput
