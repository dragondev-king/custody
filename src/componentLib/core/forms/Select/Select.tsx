import * as React from "react";
import cx from "classnames";
import { SelectOption } from "types/types";

// Sizes
export const SELECT_SIZE_EXTRA_SMALL = "extra-small";
export const SELECT_SIZE_SMALL = "small";
export const SELECT_SIZE_MEDIUM = "medium";
export const SELECT_SIZE_LARGE = "large";
export const SelectSizes = [
  SELECT_SIZE_EXTRA_SMALL,
  SELECT_SIZE_SMALL,
  SELECT_SIZE_MEDIUM,
  SELECT_SIZE_LARGE,
] as const;

export interface SelectProps {
  value?: string | number;
  defaultValue?: string;
  name?: string;
  placeholder?: string;
  size?: typeof SelectSizes[number];
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onFocus?: React.FocusEventHandler<HTMLSelectElement>;
  options: SelectOption[];
  disabled?: boolean;
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      value,
      defaultValue,
      name,
      placeholder,
      size = SELECT_SIZE_MEDIUM,
      onBlur,
      onChange,
      onFocus,
      options,
      disabled = false,
      className
    },
    ref
  ) => {
    let selectClassName = cx("c-input", "c-input--select", {
      "c-input--extra-small": size === SELECT_SIZE_EXTRA_SMALL,
      "c-input--small": size === SELECT_SIZE_SMALL,
      "c-input--large": size === SELECT_SIZE_LARGE,
    }, className);

    const getSelectOptions = () => {
      return options.map(({ labelText, value, disabled }, index) => {
        return (
          <option key={index} value={value} disabled={disabled}>
            {labelText}
          </option>
        );
      });
    };

    const handleOnBlur: React.FocusEventHandler<HTMLSelectElement> = (
      event: React.FocusEvent<HTMLSelectElement>
    ) => {
      if (onBlur) {
        onBlur(event);
      }
    };

    const handleOnChange: React.ChangeEventHandler<HTMLSelectElement> = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      if (onChange) {
        onChange(event);
      }
    };

    const handleOnFocus: React.FocusEventHandler<HTMLSelectElement> = (
      event: React.FocusEvent<HTMLSelectElement>
    ) => {
      if (onFocus) {
        onFocus(event);
      }
    };

    const selectDefaultValue = defaultValue || (placeholder ? "" : "");

    return selectDefaultValue ? (
      <select
        className={selectClassName}
        name={name}
        id={name}
        ref={ref}
        value={value}
        defaultValue={selectDefaultValue}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        disabled={disabled}
      >
        {placeholder && (
          <option disabled value="">
            {placeholder}
          </option>
        )}
        {getSelectOptions()}
      </select>
    ) : (
      <select
        className={selectClassName}
        name={name}
        id={name}
        ref={ref}
        value={value}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        disabled={disabled}
      >
        {placeholder && (
          <option disabled value="">
            {placeholder}
          </option>
        )}
        {getSelectOptions()}
      </select>
    );
  }
);

export default Select;
