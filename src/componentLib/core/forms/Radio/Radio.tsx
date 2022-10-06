import * as React from "react";
import { useRef } from "react";
import cx from "classnames";

export interface RadioProps {
  value?: string;
  checked?: boolean;
  name?: string;
  id?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onInput?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

export const Radio: React.FunctionComponent<RadioProps> = ({
  value,
  checked,
  name,
  id,
  onBlur,
  onChange,
  onFocus,
  onInput,
  disabled = false,
}) => {
  let radioClassName = cx("c-input c-input--radio");
  const radioRef = useRef<HTMLInputElement>(null);

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
      className={radioClassName}
      name={name}
      id={id}
      value={value}
      type="radio"
      checked={checked}
      ref={radioRef}
      onBlur={handleOnBlur}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      onInput={handleOnInput}
      disabled={disabled}
    />
  );
};

export default Radio;
