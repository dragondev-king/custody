import * as moment from 'moment'

/**
 * Functions related to date / time
 */
export const getFormattedTime = (date: any) => {
  const time = moment(date)
  return time.format('MMM D, YYYY')
}

export const getCSVFriendlyFormattedTime = (date: any) => {
  const time = moment(date)
  return time.format('MMM/D/YYYY')
}

export const getFormattedTimeShort = (date: any) => {
  const time = moment(date)
  return time.format('MMM D')
}

export const getFormattedTimeDay = (date: any) => {
  const time = moment(date)
  return time.format('MMM D, h:mm A z')
}

export const getFormattedTimeLong = (date: any) => {
  const time = moment(date)
  return time.format('MMM D YYYY, h:mm A z')
}

export const getDiffDays = (firstDate: any, secondDate: any) => {
  return moment(firstDate).diff(
    secondDate ? moment(secondDate) : moment(),
    'days'
  )
}

export const addDays = (date: any, daysToAdd: number) => {
  return moment(date).add(daysToAdd, 'days')
}

/**
 * Expects D
 */
export const changeDay = (date: any, newDay: any): Date => {
  return moment(date).date(newDay).toDate()
}

/**
 * Expects MMMM
 */
export const changeMonth = (date: any, newMonth: any): Date => {
  return moment(date).month(newMonth).toDate()
}

/**
 * Expects YYYY
 */
export const changeYear = (date: any, newYear: any): Date => {
  return moment(date).year(newYear).toDate()
}

export const getDayFromDate = (date: any) => {
  return moment(date).format('D')
}

export const getYearFromDate = (date: any) => {
  return moment(date).format('YYYY')
}

export const getMonthFromDate = (date: any) => {
  return moment(date).format('MMMM')
}

export const getCurrMonth = () => {
  return moment().format('MMMM')
}

export const getDaysForMonthArr = (
  month: string,
  year: string
): Array<string> => {
  const daysForMonth = []
  const daysInMonth = moment(`${year}-${month}`, 'YYYY-MMMM').daysInMonth()
  for (let i = 1; i <= daysInMonth; i++) {
    daysForMonth.push(i)
  }
  return daysForMonth.map((day) => day.toString())
}

export const getAllMonthsArr = (): Array<string> => {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
}

export const getAllYearsArr = (): Array<string> => {
  const allYears = []
  const currYear = parseInt(moment().format('YYYY'))
  for (let i = currYear + 1; i >= currYear - 10; i--) {
    allYears.push(i)
  }
  return allYears.map((year) => year.toString())
}
