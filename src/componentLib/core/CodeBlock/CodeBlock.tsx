import * as React from "react";
import { CodeHighlight } from "componentLib";
import cx from "classnames";

export interface CodeBlockProps {
  codeSample: string;
  background?: "dark" | "light";
  flexDirection?: "column" | "row";
  children: React.ReactNode
}

const CodeBlock: React.FunctionComponent<CodeBlockProps> = ({
  children,
  codeSample,
  background = "light",
  flexDirection = "row",
}) => {
  const codeBlockClasses = cx(
    // Default
    "u-displayFlex c-box",

    // Variant
    {
      "u-backgroundColorGray2": background == "dark",
      "u-backgroundColorWhite": background == "light",
    },

    // Layout
    {
      "u-flexDirectionColumn": flexDirection == "column",
      "u-flexDirectionRow": flexDirection == "row",
    }
  );

  return (
    <div className={codeBlockClasses}>
      <div className="u-flex1 s-padding1">{children}</div>
      <div className="u-flex2">
        <CodeHighlight>{codeSample}</CodeHighlight>
      </div>
    </div>
  );
};

export default CodeBlock;
