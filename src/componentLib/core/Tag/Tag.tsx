import * as React from "react";
import cx from "classnames";

const TAG_VARIANT_MUTED = "muted";
const TAG_VARIANT_SUCCESS = "success";
const TAG_VARIANT_INFO = "info";
const TAG_VARIANT_WARNING = "warning";
const TAG_VARIANT_DANGER = "danger";

export const TagVariants = [
  TAG_VARIANT_MUTED,
  TAG_VARIANT_SUCCESS,
  TAG_VARIANT_INFO,
  TAG_VARIANT_WARNING,
  TAG_VARIANT_DANGER,
] as const;

export interface TagProps {
  variant?: typeof TagVariants[number];
  children: React.ReactNode
}

export const Tag: React.FunctionComponent<TagProps> = ({
  children,
  variant,
}) => {
  const tagClasses = cx(
    // Default
    "c-tag",

    // Variant
    {
      "c-tag--muted": variant == TAG_VARIANT_MUTED,
      "c-tag--success": variant == TAG_VARIANT_SUCCESS,
      "c-tag--info": variant == TAG_VARIANT_INFO,
      "c-tag--warning": variant == TAG_VARIANT_WARNING,
      "c-tag--danger": variant == TAG_VARIANT_DANGER,
    }
  );

  return <div className={tagClasses}>{children}</div>;
};

export default Tag;
