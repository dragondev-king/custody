import * as React from 'react'

// Font-sizes go from 8 to 60
export const FontSizes = [
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60
]
export type FontSizesType = typeof FontSizes[number];
export const FontWeights = [200, 400, 700]
export type FontWeightsType = typeof FontWeights[number];

export const Spacings = [
  0.5,
  1,
  1.5,
  2,
  2.5,
  3,
  3.5,
  4,
  4.5,
  5,
  5.5,
  6,
  6.5,
  7,
  7.5,
  8,
  8.5,
  9,
  9.5,
  10,
  10.5,
  11,
  11.5,
  12,
  12.5,
  13,
  13.5,
  14,
  14.5,
  15,
  15.5,
  16
]
export type SpacingsType = typeof Spacings[number];

export const RowsType = [10, 25, 50]
export type RowsPerPageType = typeof RowsType[number];

export interface StakingAsset {
  allEarnings: Array<any>;
  apy: number;
  autoStaking: boolean;
  autoStakingOptOut: boolean;
  balance: number;
  balanceFormattedStr: string;
  currentlyStakedAmount: string;
  depositsOn: boolean;
  depositUrl: string;
  description: string;
  helpUrl: string;
  lockedBalance: string;
  lockUpPeriod: string;
  minDeposit: number;
  pendingBalance: string;
  pendingDeposits: Array<any>;
  pendingWithdrawals: Array<any>;
  priceInUsd: number;
  rewardsEarned: string;
  showMoreDetails: boolean;
  showRollover: boolean;
  stakeUrl: string;
  stakedAmount: number;
  stakedAmountFormattedStr: string;
  startDate: string;
  symbol: string;
  unlockedStakingRolloverAvailable: boolean;
  withdrawalsOn: boolean;
  withdrawUrl: string;
}

export interface FlexSizes {
  extraLargeOrBigger: boolean;
  largeOrBigger: boolean;
  mediumOrBigger: boolean;
  smallOrBigger: boolean;
  extraSmallOrSmaller: boolean;
}

export interface HowItWorksSteps {
  header: string;
  linkElement: React.ReactNode;
  subtitleElement: React.ReactNode;
}

export interface HeaderSubtitleGridSteps {
  header: string;
  subtitle: string;
}

export interface FAQQuestions {
  content: React.ReactNode;
  title: string;
}

export interface SelectOption {
  labelText: string;
  value: string | number;
  disabled?: boolean;
  url?: string;
}

export interface SelectizeOption {
  labelText: string;
  labelHtml?: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface WalletCell {
  labelText: string;
  toolTipText?: string;
  value: string;
}

export interface SvgProps {
  className: string
  alt?: string
  text?: string
  onClick?: (...args: any[]) => void
}
