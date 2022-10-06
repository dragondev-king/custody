import * as React from "react";
import cx from "classnames";

export interface FormProps {
  onSubmit?: (event: any) => void;
  children: React.ReactNode
}

export const Form: React.FunctionComponent<FormProps> = ({
  children,
  onSubmit,
}) => {
  const formCLasses = cx("c-form");

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form className={formCLasses} onSubmit={handleOnSubmit}>
      {children}
    </form>
  );
};

export default Form;
