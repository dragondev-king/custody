import * as React from "react";
import { useRef, useEffect } from "react";
import cx from "classnames";

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onInput?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  checked,
  indeterminate = false,
  name,
  onBlur,
  onChange,
  onFocus,
  onInput,
  disabled = false,
}) => {
  let checkboxClassName = cx("c-input c-input--checkbox");
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef && checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

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

  return (
    <input
      className={checkboxClassName}
      name={name}
      type="checkbox"
      checked={checked}
      ref={checkboxRef}
      id={name}
      onBlur={handleOnBlur}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      onInput={handleOnInput}
      disabled={disabled}
    />
  );
};

export default Checkbox;
