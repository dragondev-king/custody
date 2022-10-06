import { isTestEnv, roundFloat } from "utils";
import { getDiffDays } from "utils/date";
import { ButtonVariants } from "componentLib";
/**
 * TODO ARJUN -- make use of this below
 */
// import { CollateralFormDialogProps } from "../../views/admin/lend/placed_loans/components/CollateralFormDialog"

/**
 * WARNINGS
 */
interface PlacedLoanWarning {
  backgroundColor?: string;
  buttonVariant?: typeof ButtonVariants[number];
  buttonText: string;
  onClick?: () => void;
  warningText: string;
}

export const generatePlacedLoanWarnings = (
  placedLoans: Array<any>,
  priceMap: any,
  collateralBalanceMap: any,
  updateCollateralForm?: any,
  setCollateralFormOpen?: any
) => {
  const warnings = <Array<PlacedLoanWarning>>[];
  placedLoans
    .filter((loan) => loan.state !== "cancelled")
    .forEach((loan) => {
      const onClick = () => {
        if (
          updateCollateralForm !== null &&
          updateCollateralForm !== undefined
        ) {
          /**
           * TODO ARJUN - make use of CollateralFormDialogProps here
           */
          updateCollateralForm({
            collateralAssetSymbols: loan.collateral_assets.map(
              ({ symbol }: {symbol: any}) => symbol
            ),
            collateralAssetsUrlMap: loan.collateral_assets_url_map,
            collateralBalanceMap: collateralBalanceMap,
            collateralRequirement: parseFloat(loan.collateral_requirement),
            loanAmountSubunit: parseFloat(loan.loan_asset.amount_subunit),
            loanAssetSymbol: loan.loan_asset.symbol,
            marginCallLevel: parseFloat(loan.margin_call_level),
            overCollaterallizedLevel: parseFloat(
              loan.over_collateralized_level
            ),
            placedLoanId: loan.id,
            postCollateralUrl: loan.collateral_url,
            priceMap: priceMap,
            startDate: loan.start_date,
          });
        }
        if (
          setCollateralFormOpen !== null &&
          setCollateralFormOpen !== undefined
        ) {
          setCollateralFormOpen(true);
        }
      };
      const currCollateralPercent = loan.collateral_percentage * 100;
      const marginCallPercent = loan.margin_call_level * 100;
      /**
       * Handle awaiting collateral payment
       */
      if (loan.state === "awaiting_collateral_payment") {
        warnings.push({
          backgroundColor: "red",
          buttonVariant: "secondary",
          buttonText: "Add Collateral",
          onClick: onClick,
          warningText:
            placedLoans.length > 1
              ? `Your loan for ${loan.loan_asset.amount_subunit} ${loan.loan_asset.symbol} has not been funded because you haven't posted collateral yet.`
              : `Your loan has not been funded because you haven't posted collateral yet.`,
        });
      } else if (
        currCollateralPercent < marginCallPercent &&
        Math.abs(currCollateralPercent - marginCallPercent) > 1
      ) {
        /**
         * Handle margin call
         */

        warnings.push({
          backgroundColor: "red",
          buttonVariant: "secondary",
          buttonText: "Add Collateral",
          onClick: onClick,
          warningText: `Please deposit collateral for your ${
            loan.loan_asset.amount_subunit
          } ${
            loan.loan_asset.symbol
          }, which is below the margin call threshold of ${roundFloat(
            marginCallPercent,
            2
          )}%.`,
        });
      }

      /**
       * Handle payments
       */
      loan.payments.forEach((payment: any) => {
        const diffDays = getDiffDays(payment.due_date, new Date());
        const problematicState =
          payment.payment_type !== "fund_loan" &&
          (payment.state === "active" || payment.state === "awaiting_payment");
        const loanAssetBalance = isTestEnv()
          ? 0.01
          : loan.loan_asset_wallet_balance;
        if (
          problematicState &&
          diffDays < 7 &&
          loanAssetBalance < payment.amount_subunit
        ) {
          warnings.push({
            buttonVariant: "secondary",
            buttonText: "Deposit Funds",
            onClick: () => {
              window.open(loan.wallet_url, "_blank")?.focus();
            },
            warningText: getInterestWarningText(
              diffDays,
              parseFloat(parseFloat(payment.amount_subunit).toFixed(4)),
              loan.loan_asset.symbol
            ),
          });
        }
      });
    });
  return warnings;
};

export const getInterestWarningText = (diffDays: any, amount: any, symbol: any) => {
  const lackingFundsStr =
    "but you don't have enough funds in your wallet to cover it";
  if (diffDays < 0) {
    return `Your interest payment of ${amount} ${symbol} was due ${-diffDays} days ago, ${lackingFundsStr}.`;
  }
  return `You have an interest payment of ${amount} ${symbol} coming up in ${diffDays} days, ${lackingFundsStr}.`;
};

export const getCollateralWarningText = (
  currCollateralPercent: any,
  collateralReqPercent: any,
  marginCallPercent: any,
  overPercent: any
) => {
  if (currCollateralPercent < marginCallPercent) {
    return Math.abs(currCollateralPercent - marginCallPercent) > 1
      ? `Please deposit collateral as it's only worth ${currCollateralPercent}% of your
                      loan.`
      : `We recommend adding collateral as you're less than 1% away from being under collateralized.`;
  } else if (currCollateralPercent < collateralReqPercent) {
    return `We recommend adding collateral as you're only ${roundFloat(
      currCollateralPercent - marginCallPercent,
      2
    )}% away from being under collateralized.`;
  } else if (currCollateralPercent > overPercent) {
    return `You can withdraw collateral as it's worth ${currCollateralPercent}% of your
                      loan.`;
  } else {
    return `Looking good! Your collateral is worth ${currCollateralPercent}% of your
                        loan.`;
  }
};
