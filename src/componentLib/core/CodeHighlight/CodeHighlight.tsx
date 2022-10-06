import * as React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import tomorrow from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";
SyntaxHighlighter.registerLanguage("tsx", tsx);

export interface CodeHighlightProps {
  children: any
}

const CodeHighlight: React.FunctionComponent<CodeHighlightProps> = ({
  children,
}) => {
  return (
    <SyntaxHighlighter
      wrapLines={true}
      wrapLongLines={true}
      style={tomorrow}
      language="tsx"
      customStyle={{
        margin: 0,
        height: "100%",
        alignItems: "center",
        display: "flex",
        fontSize: "14px",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlight;
