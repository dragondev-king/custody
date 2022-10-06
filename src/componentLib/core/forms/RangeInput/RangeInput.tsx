import * as React from "react";
import cx from "classnames";
import { useEffect, useMemo, useState, useRef } from "react";

export interface RangeInputProps {
  value: string;
  min: string;
  max: string;
  step?: string;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onInput?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}
const RangeInput: React.FunctionComponent<RangeInputProps> = ({
  value,
  min,
  max,
  step = "1",
  name,
  onBlur,
  onChange,
  onFocus,
  onInput,
  disabled = false,
}) => {
  const rangeInputRef = useRef();
  const rangeInputClassName = cx("c-input c-input--range");

  const handleOnBlur: React.FocusEventHandler<HTMLInputElement> = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onChange) {
      onChange(event);
    }
  };

  const handleOnFocus: React.FocusEventHandler<HTMLInputElement> = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleOnInput: React.FocusEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onInput) {
      onInput(event);
    }
  };

  const valueNumber = useMemo(() => Number(value), [value]);
  const minNumber = useMemo(() => Number(min), [min]);
  const maxNumber = useMemo(() => Number(max), [max]);
  const progress = useMemo(() => {
    return Math.round(
      ((valueNumber - minNumber) / (maxNumber - minNumber)) * 100
    );
  }, [value]);

  // Save progress on ref as css var for progress bar
  useEffect(() => {
    if (rangeInputRef) {
      const rangeInputElement = rangeInputRef.current as any;
      if (rangeInputElement) {
        rangeInputElement.style.setProperty("--progress-width", `${progress}%`);
      }
    }
  }, [progress]);

  let inputProps = {
    className: rangeInputClassName,
    name: name,
    id: name,
    type: "range",
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    onInput: handleOnInput,
    disabled: disabled,
    value: value,
    min: min,
    max: max,
    step: step,
    ref: rangeInputRef,
  } as any;

  return <input {...inputProps} />;
};

export default RangeInput;
