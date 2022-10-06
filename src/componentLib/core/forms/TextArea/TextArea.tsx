import * as React from "react";
import { useRef, useEffect } from "react";
import cx from "classnames";
import autosize from "autosize";

// Sizes
export const TEXT_AREA_EXTRA_SMALL = "extra-small";
export const TEXT_AREA_SMALL = "small";
export const TEXT_AREA_MEDIUM = "medium";
export const TEXT_AREA_LARGE = "large";
export const TextAreaSizes = [
  TEXT_AREA_EXTRA_SMALL,
  TEXT_AREA_SMALL,
  TEXT_AREA_MEDIUM,
  TEXT_AREA_LARGE,
] as const;

export interface TextAreaProps {
  value?: string;
  name?: string;
  rows?: number;
  placeholder?: string;
  autoResize?: boolean;
  size?: typeof TextAreaSizes[number];
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onInput?: React.ChangeEventHandler<HTMLTextAreaElement>;
  disabled?: boolean;
}

export const TextArea: React.FunctionComponent<TextAreaProps> = ({
  value,
  name,
  rows,
  placeholder,
  autoResize = false,
  size = TEXT_AREA_MEDIUM,
  onBlur,
  onChange,
  onFocus,
  onInput,
  disabled = false,
}) => {
  const textAreatRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (autoResize && textAreatRef.current) {
      autosize(textAreatRef.current);
    }
  }, [autoResize]);

  let selectClassName = cx("c-input c-input--textarea", {
    "c-input--extra-small": size === TEXT_AREA_EXTRA_SMALL,
    "c-input--small": size === TEXT_AREA_SMALL,
    "c-input--large": size === TEXT_AREA_LARGE,
  });

  const handleOnBlur: React.FocusEventHandler<HTMLTextAreaElement> = (
    event: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(event);
    }
  };

  const handleOnFocus: React.FocusEventHandler<HTMLTextAreaElement> = (
    event: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleOnInput: React.FocusEventHandler<HTMLTextAreaElement> = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (onInput) {
      onInput(event);
    }
  };

  return (
    <textarea
      className={selectClassName}
      name={name}
      ref={textAreatRef}
      value={value}
      rows={rows}
      placeholder={placeholder}
      id={name}
      onBlur={handleOnBlur}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      onInput={handleOnInput}
      disabled={disabled}
    />
  );
};

export default TextArea;
