import * as React from "react";
import cx from "classnames";
import { FontSizesType, FontWeightsType } from "types/types";

// Variants
const LINK_VARIANT_DEFAULT = "default";
const LINK_VARIANT_DANGER = "danger";
const LINK_VARIANT_ERROR = "error";
const LINK_VARIANT_INFO = "info";
const LINK_VARIANT_WARNING = "warning";
const LINK_VARIANT_SUCCESS = "success";
const LINK_VARIANT_FACEBOOK = "facebook";
const LINK_VARIANT_TWITTER = "twitter";
const LINK_VARIANT_LINKEDIN = "linkedin";
const LINK_VARIANT_ANGELLIST = "angellist";
const LINK_VARIANT_WHITE = "white";

export const LinkVariants = [
  LINK_VARIANT_DANGER,
  LINK_VARIANT_ERROR,
  LINK_VARIANT_INFO,
  LINK_VARIANT_WARNING,
  LINK_VARIANT_SUCCESS,
  LINK_VARIANT_FACEBOOK,
  LINK_VARIANT_TWITTER,
  LINK_VARIANT_LINKEDIN,
  LINK_VARIANT_ANGELLIST,
  LINK_VARIANT_WHITE,
] as const;

// Variants
const LINK_NO_UNDERLINE = "no_underline";
const LINK_UNDERLINE = "underline";

export const LinkUnderlines = [LINK_NO_UNDERLINE, LINK_UNDERLINE] as const;

export interface LinkProps {
  href?: string;
  onClick?: (event: any) => void;
  variant?: typeof LinkVariants[number];
  underline?: typeof LinkUnderlines[number];
  muted?: boolean;
  disabled?: boolean;
  unstyled?: boolean;
  fontSize?: FontSizesType;
  fontWeight?: FontWeightsType;
  cursorPointer?: boolean;
  target?: "_blank" | "_parent" | "_top";
  children: React.ReactNode
}

export const Link: React.FunctionComponent<LinkProps> = ({
  children,
  href,
  onClick,
  variant,
  underline,
  muted = false,
  disabled = false,
  unstyled = false,
  fontSize,
  fontWeight,
  cursorPointer = false,
  target,
}) => {
  const linkClasses = cx(
    // Default
    "c-link",

    // Variant
    {
      "c-link--danger": variant == LINK_VARIANT_DANGER,
      "c-link--error": variant == LINK_VARIANT_ERROR,
      "c-link--info": variant == LINK_VARIANT_INFO,
      "c-link--warning": variant == LINK_VARIANT_WARNING,
      "c-link--success": variant == LINK_VARIANT_SUCCESS,
      "c-link--facebook": variant == LINK_VARIANT_FACEBOOK,
      "c-link--twitter": variant == LINK_VARIANT_TWITTER,
      "c-link--linkedin": variant == LINK_VARIANT_LINKEDIN,
      "c-link--angellist": variant == LINK_VARIANT_ANGELLIST,
      "c-link--white": variant == LINK_VARIANT_WHITE,
    },

    {
      "c-link--underline": underline == LINK_UNDERLINE,
      "c-link--no-underline": underline == LINK_NO_UNDERLINE,
    },

    // State
    {
      "c-link--muted": muted,
      "c-link--disabled": disabled,
      "c-link--unstyled": unstyled,
    },
    {
      [`s-fontSize${fontSize}`]: fontSize,
      [`u-fontWeight${fontWeight}`]: fontWeight,
      "u-cursorPointer": cursorPointer,
    }
  );

  const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <a
      className={linkClasses}
      onClick={handleOnClick}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};

export default Link;
