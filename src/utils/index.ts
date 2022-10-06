import { useMediaQuery } from 'react-responsive'
import { StakingAsset } from '../types/types'
import { getDiffDays, getFormattedTime } from './date'

/**
 * Used for placed loans components
 */
export const getStateText = (loan: any) => {
  const onGoingStr = 'On going'
  if (loan.state === 'awaiting_collateral_payment') {
    return 'Awaiting collateral'
  }
  if (loan.state === 'completed') {
    return 'Completed'
  }
  if (loan.state === 'cancelled') {
    return 'Cancelled'
  }
  if (!loan.collateral_required) {
    return onGoingStr
  }
  const currCollateralPercent = loan.collateral_percentage * 100
  const marginCallPercent = loan.margin_call_level * 100
  const overPercent = loan.over_collateralized_level * 100
  if (
    currCollateralPercent < marginCallPercent &&
    Math.abs(currCollateralPercent - marginCallPercent) > 1
  ) {
    return 'Under collateralized'
  }
  if (currCollateralPercent > overPercent) {
    return 'Overcollateralized'
  }
  return onGoingStr
}

export const getTextForPlacedLoanPaymentState = (payment: any) => {
  const diffDays = getDiffDays(payment.due_date, null)
  switch (payment.state) {
    case 'active':
      return diffDays < 0
        ? `Was due ${-diffDays} day${diffDays === -1 ? '' : 's'} ago`
        : diffDays === 0
          ? 'Due today'
          : `Due in ${diffDays} day${diffDays === 1 ? '' : 's'}`
    case 'awaiting_payment':
      return `Failed ${-diffDays} day${diffDays === -1 ? '' : 's'} ago`
    case 'cancelled':
      return 'Cancelled'
    case 'completed':
      return 'Completed'
  }
}

export const getTextForPaymentType = (type: any) => {
  switch (type) {
    case 'fund_loan':
      return 'Loan funding'
    case 'interest':
      return 'Interest payment'
    case 'interest_and_principal':
      return 'Interest & principal'
    case 'principal':
      return 'Principal'
    case 'move_locked_collateral_from_user_to_coinlist':
      return 'Move locked collateral from user to CL'
  }
}

export const upperCaseFirstLetter = (str: any) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const caseInsensitiveStringComparison = (
  str1: string,
  str2: string
): boolean => {
  return str1.toUpperCase() === str2.toUpperCase()
}

export const roundFloat = (value: number, precision: number): number => {
  return parseFloat(value.toFixed(precision))
}

export const roundFloatStr = (value: string, precision: number): number => {
  return parseFloat(parseFloat(value).toFixed(precision))
}

export const truncateFloat = (value: number): number => {
  const match = value.toString().match(/^-?\d+(?:\.\d{0,6})?/)!
  return roundFloatStr(match[0], 6)
}

export const appendQueryStringToCurrentUrl = (queryString: any) => {
  const origin = window.location.origin
  const pathname = window.location.pathname
  return `${origin}${pathname}${queryString}`
}

export const isInt = (n: number) => {
  return n % 1 === 0
}

/**
 * Common to get entity data passed from controller
 * & we need it formatted for Select component
 */
export const getEntitiesForSelect = (entities: any[]) => {
  return entities.map((entity) => ({
    labelText: entity.name,
    slug: entity.slug,
    value: entity.id
  }))
}

/**
 * Breakpoint sizes
 */
export const BREAKPOINTS = {
  lg: 1280,
  md: 960,
  sm: 600,
  xl: 1920,
  xs: 599
}

/* Maxes */
export const isExtraLargeOrSmaller = () =>
  useMediaQuery({ maxWidth: BREAKPOINTS.xl })
export const isLargeOrSmaller = () =>
  useMediaQuery({ maxWidth: BREAKPOINTS.lg })
export const isMediumOrSmaller = () =>
  useMediaQuery({ maxWidth: BREAKPOINTS.md })
export const isSmallOrSmaller = () =>
  useMediaQuery({ maxWidth: BREAKPOINTS.sm })
export const isExtraSmallOrSmaller = () =>
  useMediaQuery({ maxWidth: BREAKPOINTS.xs })
/* Mins */
export const isExtraLargeOrBigger = () =>
  useMediaQuery({ minWidth: BREAKPOINTS.xl })
export const isLargeOrBigger = () =>
  useMediaQuery({ minWidth: BREAKPOINTS.lg })
export const isMediumOrBigger = () =>
  useMediaQuery({ minWidth: BREAKPOINTS.md })
export const isSmallOrBigger = () =>
  useMediaQuery({ minWidth: BREAKPOINTS.sm })

export const invalidNumber = (amount: any) => {
  return !amount || isNaN(parseFloat(amount))
}
/* Ranges */
export const hasFullSidebarButSmall = () =>
  useMediaQuery({ minWidth: 970, maxWidth: 1150 })

export const dollarValue = (units: any, pricePerUnit: any) => {
  return invalidNumber(units)
    ? 0
    : parseFloat(units) * parseFloat(pricePerUnit)
}

/**
 * TODO ARJUN -- move all this staking
 * specific stuff to a better place
 */
export const createWalletCells = (asset: StakingAsset) => {
  const cells: any = [
    {
      labelText: 'Currently Staked',
      value: asset.currentlyStakedAmount
    },
    {
      labelText: 'Pending',
      value: asset.pendingBalance || `0 ${asset.symbol.toUpperCase()}`
    }
  ]
  if (asset.rewardsEarned) {
    cells.push({
      labelText: 'Est. Total Rewards',
      toolTipText: 'The total of your earnings from previous staking periods',
      value: asset.rewardsEarned
    })
  }
  if (!asset.autoStaking && asset.startDate) {
    cells.push({
      labelText: 'Next Staking Period',
      toolTipText: 'The date the next staking period starts',
      value: getFormattedTime(asset.startDate)
    })
  }
  return cells
}

export const createLinkObjects = (project: any) => {
  const linksArr = []
  if (project.website_url) {
    linksArr.push({
      href: project.website_url,
      iconClassName: 'icon-link',
      title: 'Website'
    })
  }
  if (project.whitepaper_url) {
    linksArr.push({
      href: project.whitepaper_url,
      iconClassName: 'icon-doc',
      title: 'Whitepaper'
    })
  }
  if (project.twitter_handles || project.twitter_url) {
    linksArr.push({
      href: project.twitter_url
        ? project.twitter_url
        : `https://twitter.com/${project.twitter_handles}`,
      iconClassName: 'icon-twitter',
      title: 'Twitter'
    })
  }
  if (project.discord_url) {
    linksArr.push({
      href: project.discord_url,
      iconClassName: 'icon-discord',
      title: 'Discord'
    })
  }
  if (project.telegram_url) {
    linksArr.push({
      href: project.telegram_url,
      iconClassName: 'icon-telegram',
      title: 'Telegram'
    })
  }
  if (project.marketplace_url) {
    linksArr.push({
      href: project.marketplace_url,
      iconClassName: 'icon-basket',
      title: 'Marketplace'
    })
  }
  if (project.medium_url) {
    linksArr.push({
      href: project.medium_url,
      iconClassName: 'icon-medium',
      title: 'Medium'
    })
  }
  return linksArr
}

/**
 * Test environment
 */
export const isTestEnv = () => {
  return window.location.hostname === 'coinlist.localhost'
}

export const testEntity = () => {
  return {
    id: 'c3d09d4f-fe9f-49c7-9765-12d7813b7ac1',
    owner_type: 'User',
    owner_id: '4979d836-3b45-4d61-bfd9-33b1a4ba35f9',
    first_name: 'Paul',
    middle_name: null,
    last_name: 'Menchov-placed-loan-entity-2021-06-09',
    slug: 'paul-menchov-placed-loan-entity-2021-06-09-10',
    entity_api_id: '77344e92ae9a4527b0a80646b59569cf',
    fund_america_entity_id: null,
    fund_america_investor_id: null,
    entity_integration_jumio_document_verification_api_id: null,
    angellist_id: null,
    created_at: 'Wed, 09 Jun 2021 18:20:54 UTC +00:00',
    updated_at: 'Wed, 09 Jun 2021 18:20:54 UTC +00:00',
    deleted: false,
    archived_at: null,
    created_by_test_account: true,
    fund_america_sandbox_environment: false,
    cl_employee: false
  }
}

export const testInvestmentsData = () => {
  return [
    {
      id: 'c9080958-f048-4906-885f',
      user_id: '2c770066-93eb-49ae-9fe3',
      entity_type: 'Entities::Person',
      entity_id: 'a1c7-0baa-4622-a199-60caa60',
      signatory_name: 'Rando User',
      entity_name_from_csv: null,
      email: 'asdf@asdf.com',
      purchase_id: 373,
      purchased_at: 'Tue, 25 Jul 2017 08:18:05 UTC +00:00',
      series: 'S-1',
      token_quantity: 0.708436865680423e7,
      funding_method: 'btc',
      investment_amount_cents: 196628190,
      amount_of_original_currency: 0.72e3,
      token_price_cents: 75,
      vesting_period_in_months: 24,
      vesting_discount: 0.15,
      angellist_user_id: 6694446,
      attachment_file_name: 'asdfiUT3FxCUqMumPdxf9jTC7G.pdf',
      attachment_content_type: 'application/pdf',
      attachment_file_size: 631015,
      attachment_updated_at: 'Thu, 29 Mar 2018 02:15:14 UTC +00:00',
      created_at: 'Thu, 29 Mar 2018 02:15:14 UTC +00:00',
      updated_at: 'Fri, 16 Oct 2020 01:00:03 UTC +00:00',
      entity_confirmed_at: 'Sun, 26 Jul 2020 20:32:39 UTC +00:00',
      investor_id_hash: 'asdf3FxCUqMumPdxf9jTC7G',
      custody_type: 'coinlist',
      viewed_custody_options: true,
      has_shadow_entity: false,
      approved_for_transfer: true
    },
    {
      id: 'c9080958-f048-4906-885f',
      user_id: '2c770066-93eb-49ae-9fe3',
      entity_type: 'Entities::Person',
      entity_id: 'a1c7-0baa-4622-a199-60caa60',
      signatory_name: 'Rando User',
      entity_name_from_csv: null,
      email: 'asdf@asdf.com',
      purchase_id: 373,
      purchased_at: 'Tue, 25 Jul 2017 08:18:05 UTC +00:00',
      series: 'S-1',
      token_quantity: 0.708436865680423e7,
      funding_method: 'btc',
      investment_amount_cents: 196628190,
      amount_of_original_currency: 0.72e3,
      token_price_cents: 75,
      vesting_period_in_months: 24,
      vesting_discount: 0.15,
      angellist_user_id: 6694446,
      attachment_file_name: 'asdfiUT3FxCUqMumPdxf9jTC7G.pdf',
      attachment_content_type: 'application/pdf',
      attachment_file_size: 631015,
      attachment_updated_at: 'Thu, 29 Mar 2018 02:15:14 UTC +00:00',
      created_at: 'Thu, 29 Mar 2018 02:15:14 UTC +00:00',
      updated_at: 'Fri, 16 Oct 2020 01:00:03 UTC +00:00',
      entity_confirmed_at: 'Sun, 26 Jul 2020 20:32:39 UTC +00:00',
      investor_id_hash: 'asdf3FxCUqMumPdxf9jTC7G',
      custody_type: 'coinlist',
      viewed_custody_options: true,
      has_shadow_entity: false,
      approved_for_transfer: true
    }
  ]
}

/**
 * Test object used for AddLoanDialog so don't have to rewrite every time
 */
export const testExistingData = {
  id: 43,
  entity_id: 'c76eefde-0821-48da-8722-51c47d1c3770',
  asset_id: null,
  customer_wallet_id: '7c3c5b19-a4ad-409f-9efe-55f97c3638b4',
  start_date: '2021-05-21T15:47:05.000Z',
  end_date: null,
  interest_rate: 1,
  interest_schedule: null,
  asset_symbol: null,
  amount_subunit: null,
  state: 'awaiting_collateral_payment',
  collateral_asset_symbol: null,
  collateral_cover_rate: '10.0',
  margin_call_level: 0,
  length_in_days: 1,
  entity_type: 'Entities::Person',
  created_at: '2021-05-21T15:53:47.000Z',
  interest_payment_schedule: 'End of the Month',
  collateral_requirement: 1,
  over_collateralized_level: 12,
  lend_lending_program_id: null,
  lending_program_id: null,
  loan_amount_subunit: 10,
  loan_asset_symbol: 'teth',
  collateral_assets: {
    ETH: 10,
    BTC: 10
  }
}

export const rewardsPeriodParticipant = [
  {
    table: {
      id: 'cdbf7c66-77da-4838-8506-36be302b0226',
      rewards_period_id: '9717ab77-d335-4145-aacc-d2bd614959cf',
      entity_type: 'Entities::Company',
      entity_id: 'e2949a67-ed3b-4c86-bd85-9a1aabf74181',
      starting_balance_subunit: 1.3e22,
      starting_balance_currency: 'NU',
      ending_balance_subunit: 1.3272067724605076e22,
      ending_balance_currency: 'NU',
      withdraw_amount_subunit: null,
      withdraw_amount_currency: null,
      created_at: '2021-02-23T02:55:01.000Z',
      updated_at: '2021-05-24T19:36:45.000Z',
      deposit_amount_subunit: 1.3e22,
      deposit_amount_currency: 'NU',
      deposit_amount: '13000.0',
      ending_balance: '13272.067724605076798472',
      starting_balance: '13000.0',
      apy: 'Up to 32% APY',
      end_date: 'Wed, 11 Aug 2021 17:00:00 UTC +00:00'
    },
    modifiable: true
  }
]

export const getNonBlankAttributes = (params: any) => {
  return Object.fromEntries(Object.entries(params).filter(([, v]) => (v !== '' && v !== 'all' && v !== undefined && v !== null)))
}

export const prefixZero = (value: number) => {
  if (value < 10) {
    return `0${value}`
  } else {
    return value.toString()
  }
}

export const dateToFormattedString = (date: Date | undefined) => {
  return date && `${prefixZero(date.getFullYear())}-${prefixZero(date.getMonth() + 1)}-${prefixZero(date.getDate())}`
}
