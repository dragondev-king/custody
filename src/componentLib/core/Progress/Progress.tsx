import * as React from "react";
import cx from "classnames";
import { SpacingsType } from "types/types";

// Sizes
export const PROGRESS_SIZE_MEDIUM = "medium";
export const PROGRESS_SIZE_LARGE = "large";
export const PROGRESS_SIZE_EXTRA_LARGE = "xlarge";
export const ProgressSizes = [
  PROGRESS_SIZE_MEDIUM,
  PROGRESS_SIZE_LARGE,
  PROGRESS_SIZE_EXTRA_LARGE,
] as const;

export const PROGRESS_VARIANT_WHITE = "white";
export const ProgressVariants = [PROGRESS_VARIANT_WHITE] as const;

export interface ProgressProps {
  size?: typeof ProgressSizes[number];
  variant?: typeof ProgressVariants[number];
  radius?: boolean;
  progress?: number;
  showProgress?: boolean;
}

export const Progress: React.FunctionComponent<ProgressProps> = ({
  size = PROGRESS_SIZE_MEDIUM,
  variant,
  radius = true,
  progress = 50,
  showProgress = false,
}) => {
  const progressClasses = cx(
    // Default
    "c-progress",

    // Sizes
    {
      "c-progress--large": size === PROGRESS_SIZE_LARGE,
      "c-progress--xlarge": size === PROGRESS_SIZE_EXTRA_LARGE,
    },

    // Variant
    {
      "c-progress--white": variant === PROGRESS_VARIANT_WHITE,
    },

    {
      "c-progress--no-radius": !radius,
    }
  );
  const width = Math.max(Math.min(100, progress), 0);

  return (
    <div className={progressClasses}>
      <div className="c-progress__bar" style={{ width: `${width}%` }}>
        {showProgress && (
          <div className="c-progress__percentage">{progress}%</div>
        )}
      </div>
    </div>
  );
};

export default Progress;
