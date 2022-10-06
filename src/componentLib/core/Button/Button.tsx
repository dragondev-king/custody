import * as React from "react";
import cx from "classnames";

// Variants
export const BUTTON_VARIANT_PRIMARY = "primary";
export const BUTTON_VARIANT_SECONDARY = "secondary";
export const BUTTON_VARIANT_GRAY = "gray";
export const BUTTON_VARIANT_OUTLINED = "outlined";
export const BUTTON_VARIANT_SUCCESS = "success";
export const BUTTON_VARIANT_INFO = "info";
export const BUTTON_VARIANT_WARNING = "warning";
export const BUTTON_VARIANT_DANGER = "danger";
export const BUTTON_VARIANT_ERROR = "error";
export const BUTTON_VARIANT_PURPLE = "purple";
export const BUTTON_VARIANT_BLACK = "black";
export const BUTTON_VARIANT_WHITE = "white";
export const BUTTON_VARIANT_FACEBOOK = "facebook";
export const BUTTON_VARIANT_TWITTER = "twitter";
export const BUTTON_VARIANT_LINKEDIN = "linkedin";
export const BUTTON_VARIANT_ANGELLIST = "angellist";
export const ButtonVariants = [
  BUTTON_VARIANT_PRIMARY,
  BUTTON_VARIANT_SECONDARY,
  BUTTON_VARIANT_GRAY,
  BUTTON_VARIANT_OUTLINED,
  BUTTON_VARIANT_SUCCESS,
  BUTTON_VARIANT_INFO,
  BUTTON_VARIANT_WARNING,
  BUTTON_VARIANT_DANGER,
  BUTTON_VARIANT_ERROR,
  BUTTON_VARIANT_PURPLE,
  BUTTON_VARIANT_BLACK,
  BUTTON_VARIANT_WHITE,
  BUTTON_VARIANT_FACEBOOK,
  BUTTON_VARIANT_TWITTER,
  BUTTON_VARIANT_LINKEDIN,
  BUTTON_VARIANT_ANGELLIST,
] as const;

// Sizes
export const BUTTON_SIZE_EXTRA_SMALL = "extra-small";
export const BUTTON_SIZE_SMALL = "small";
export const BUTTON_SIZE_MEDIUM = "medium";
export const BUTTON_SIZE_LARGE = "large";
export const ButtonSizes = [
  BUTTON_SIZE_EXTRA_SMALL,
  BUTTON_SIZE_SMALL,
  BUTTON_SIZE_MEDIUM,
  BUTTON_SIZE_LARGE,
] as const;

// Type
export const BUTTON_TYPE_BUTTON = "button";
export const BUTTON_TYPE_SUBMIT = "submit";
export const BUTTON_TYPE_RESET = "reset";
export const ButtonTypes = [
  BUTTON_TYPE_BUTTON,
  BUTTON_TYPE_SUBMIT,
  BUTTON_TYPE_RESET,
] as const;

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
  onClick?: (event: any) => void;
  size?: typeof ButtonSizes[number];
  type?: typeof ButtonTypes[number];
  variant?: typeof ButtonVariants[number];
  style?: any; // TODO: remove in favor of variant
  className?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  disabled = false,
  loading = false,
  rounded = false,
  fullWidth = false,
  onClick,
  size = BUTTON_SIZE_MEDIUM,
  type,
  variant = BUTTON_VARIANT_PRIMARY,
  style,
  className
}) => {
  const buttonClasses = cx(
    // Default
    "c-button",

    // Sizes
    {
      "c-button--extra-small": size === BUTTON_SIZE_EXTRA_SMALL,
      "c-button--small": size === BUTTON_SIZE_SMALL,
      "c-button--large": size === BUTTON_SIZE_LARGE,
    },

    // Variant
    {
      "c-button--secondary": variant === BUTTON_VARIANT_SECONDARY,
      "c-button--gray": variant === BUTTON_VARIANT_GRAY,
      "c-button--outline-transparent": variant === BUTTON_VARIANT_OUTLINED,
      "c-button--success": variant === BUTTON_VARIANT_SUCCESS,
      "c-button--info": variant === BUTTON_VARIANT_INFO,
      "c-button--warning": variant === BUTTON_VARIANT_WARNING,
      "c-button--danger": variant === BUTTON_VARIANT_DANGER,
      "c-button--error": variant === BUTTON_VARIANT_ERROR,
      "c-button--purple": variant === BUTTON_VARIANT_PURPLE,
      "c-button--black": variant === BUTTON_VARIANT_BLACK,
      "c-button--white": variant === BUTTON_VARIANT_WHITE,
      "c-button--facebook": variant === BUTTON_VARIANT_FACEBOOK,
      "c-button--twitter": variant === BUTTON_VARIANT_TWITTER,
      "c-button--linkedin": variant === BUTTON_VARIANT_LINKEDIN,
      "c-button--angellist": variant === BUTTON_VARIANT_ANGELLIST,
    },

    {
      "c-button--rounded": rounded,
    },
    {
      "c-button--block": fullWidth,
    },

    // State
    {
      "c-button--disabled": disabled,
      "c-button--loading": loading,
    },
    className
  );

  const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={handleOnClick}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
