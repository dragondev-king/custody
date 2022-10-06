import * as React from "react";
import cx from "classnames";

const ALERT_VARIANT_SUCCESS = "success";
const ALERT_VARIANT_WARNING = "warning";
const ALERT_VARIANT_DANGER = "danger";
const ALERT_VARIANT_ERROR = "error";
const ALERT_VARIANT_TRANSPARENT = "transparent";

export const AlertVariants = [
  ALERT_VARIANT_SUCCESS,
  ALERT_VARIANT_WARNING,
  ALERT_VARIANT_DANGER,
  ALERT_VARIANT_ERROR,
  ALERT_VARIANT_TRANSPARENT,
] as const;

// Sizes
export const ALERT_SIZE_EXTRA_SMALL = "extra-small";
export const ALERT_SIZE_SMALL = "small";
export const ALERT_SIZE_MEDIUM = "medium";
export const ALERT_SIZE_LARGE = "large";
export const AlertSizes = [
  ALERT_SIZE_EXTRA_SMALL,
  ALERT_SIZE_SMALL,
  ALERT_SIZE_MEDIUM,
  ALERT_SIZE_LARGE,
] as const;

export interface AlertProps {
  variant?: typeof AlertVariants[number];
  size?: typeof AlertSizes[number];
  rounded?: boolean;
  children: React.ReactNode
}

export const Alert: React.FunctionComponent<AlertProps> = ({
  children,
  variant,
  size = ALERT_SIZE_MEDIUM,
  rounded = true,
}) => {
  const alertClasses = cx(
    // Default
    "c-alert",

    // Variant
    {
      "c-alert--success": variant == ALERT_VARIANT_SUCCESS,
      "c-alert--warning": variant == ALERT_VARIANT_WARNING,
      "c-alert--danger": variant == ALERT_VARIANT_DANGER,
      "c-alert--error": variant == ALERT_VARIANT_ERROR,
      "c-alert--transparent": variant == ALERT_VARIANT_TRANSPARENT,
    },

    // Size
    {
      "c-alert--extra-small": size === ALERT_SIZE_EXTRA_SMALL,
      "c-alert--small": size === ALERT_SIZE_SMALL,
      "c-alert--large": size === ALERT_SIZE_LARGE,
    },
    {
      "c-alert--no_radius": !rounded,
    }
  );

  return <div className={alertClasses}>{children}</div>;
};

export default Alert;
