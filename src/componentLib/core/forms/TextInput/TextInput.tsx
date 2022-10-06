import * as React from "react";
import cx from "classnames";

// Sizes
export const TEXT_INPUT_EXTRA_SMALL = "extra-small";
export const TEXT_INPUT_SMALL = "small";
export const TEXT_INPUT_MEDIUM = "medium";
export const TEXT_INPUT_LARGE = "large";
export const TextInputSizes = [
  TEXT_INPUT_EXTRA_SMALL,
  TEXT_INPUT_SMALL,
  TEXT_INPUT_MEDIUM,
  TEXT_INPUT_LARGE,
] as const;

// Type
export const TEXT_INPUT_TYPE_DATE = "date";
export const TEXT_INPUT_TYPE_DATETIME_LOCAL = "datetime-local";
export const TEXT_INPUT_TYPE_EMAIL = "email";
export const TEXT_INPUT_TYPE_MONTH = "month";
export const TEXT_INPUT_TYPE_NUMBER = "number";
export const TEXT_INPUT_TYPE_PASSWORD = "password";
export const TEXT_INPUT_TYPE_SEARCH = "search";
export const TEXT_INPUT_TYPE_TEL = "tel";
export const TEXT_INPUT_TYPE_TEXT = "text";
export const TEXT_INPUT_TYPE_TIME = "time";
export const TEXT_INPUT_TYPE_URL = "url";
export const TEXT_INPUT_TYPE_WEEK = "week";
export const TextInputTypes = [
  TEXT_INPUT_TYPE_DATE,
  TEXT_INPUT_TYPE_DATETIME_LOCAL,
  TEXT_INPUT_TYPE_EMAIL,
  TEXT_INPUT_TYPE_MONTH,
  TEXT_INPUT_TYPE_NUMBER,
  TEXT_INPUT_TYPE_PASSWORD,
  TEXT_INPUT_TYPE_SEARCH,
  TEXT_INPUT_TYPE_TEL,
  TEXT_INPUT_TYPE_TEXT,
  TEXT_INPUT_TYPE_TIME,
  TEXT_INPUT_TYPE_URL,
  TEXT_INPUT_TYPE_WEEK,
] as const;

export interface TextInputProps {
  value?: string;
  defaultValue?: string;
  name?: string;
  placeholder?: string;
  size?: typeof TextInputSizes[number];
  type?: typeof TextInputTypes[number];
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onInput?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({
  value,
  defaultValue,
  name,
  placeholder,
  size = TEXT_INPUT_MEDIUM,
  type = TEXT_INPUT_TYPE_TEXT,
  onBlur,
  onChange,
  onFocus,
  onInput,
  onKeyPress,
  disabled = false,
}, ref) => {
  let selectClassName = cx("c-input", {
    "c-input--extra-small": size === TEXT_INPUT_EXTRA_SMALL,
    "c-input--small": size === TEXT_INPUT_SMALL,
    "c-input--large": size === TEXT_INPUT_LARGE,
  });

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

  const handleOnKeyPress: React.FocusEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onKeyPress) {
      onKeyPress(event);
    }
  };

  let inputProps = {
    className: selectClassName,
    name: name,
    type: type,
    placeholder: placeholder,
    id: name,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    onInput: handleOnInput,
    onKeyPress: handleOnKeyPress,
    disabled: disabled,
    ref: ref,
  } as any;

  if (value || value === "") {
    inputProps.value = value;
  } else if (defaultValue) {
    inputProps.defaultValue = defaultValue;
  }

  return <input {...inputProps} />;
});

export default TextInput;
