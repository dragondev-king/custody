import * as React from "react";
import cx from "classnames";
interface TypographyProps {
  bold?: boolean;
  borderBottom?: string;
  center?: boolean;
  children: React.ReactNode;
  color?: string;
  error?: boolean;
  fontSize?: number;
  italic?: boolean;
  noBreak?: boolean;
  onClick?: (e: any) => void;
  style?: any;
  type?: string;
  className?: string;
}

const makeBold = (value: React.ReactNode): React.ReactNode => {
  return <strong>{value}</strong>;
};

const italicize = (value: React.ReactNode): React.ReactNode => {
  return <i>{value}</i>;
};

const handleBoldAndItalic = (
  bold: boolean,
  italic: boolean,
  children: React.ReactNode
) => {
  return bold && italic
    ? italicize(makeBold(children))
    : bold
    ? makeBold(children)
    : italic
    ? italicize(children)
    : children;
};

export default function Typography(props: TypographyProps) {
  let color = " u-colorBlack";
  if (props.error || props.color === "red") {
    color = " u-colorRed";
  } else if (props.color === "green") {
    color = " u-colorGreen";
  } else if (props.color === "primary") {
    color = " u-colorPrimary";
  } else if (props.color === "gray") {
    color = " u-colorGrayA";
  } else if (props.color === "gray7") {
    color = " u-colorGray7";
  } else if (props.color === "white") {
    color = " u-colorWhite";
  }
  const className = cx(color, props.className)
  const style = { ...props.style };
  if (props.noBreak) {
    style.display = "inline";
  }
  if (props.center) {
    style.textAlign = "center";
  }
  const borderBottom = props.borderBottom
    ? `s-borderBottom${props.borderBottom}`
    : "";

  switch (props.type) {
    case "title":
      return (
        <div className="u-fontWeight700 s-fontSize18 s-padding1_5">
          {handleBoldAndItalic(!!props.bold, !!props.italic, props.children)}
        </div>
      );
    case "body":
      return (
        <p
          className={`s-fontSize16 ${className}`}
          onClick={props.onClick}
          style={style}
        >
          {handleBoldAndItalic(!!props.bold, !!props.italic, props.children)}
        </p>
      );
    case "h2":
      return (
        <h2
          className={`${
            props.fontSize ? `s-fontSize${props.fontSize}` : "s-fontSize34"
          } ${className} ${borderBottom}`}
          onClick={props.onClick}
          style={style}
        >
          {handleBoldAndItalic(!!props.bold, !!props.italic, props.children)}
        </h2>
      );
    case "h6":
      return (
        <h6
          className={`${
            props.fontSize ? `s-fontSize${props.fontSize}` : "s-fontSize24"
          } ${className} ${borderBottom}`}
          onClick={props.onClick}
          style={style}
        >
          {handleBoldAndItalic(!!props.bold, !!props.italic, props.children)}
        </h6>
      );
    default:
      return (
        <p
          className={`${
            props.fontSize ? `s-fontSize${props.fontSize}` : "s-fontSize16"
          } ${className}`}
          onClick={props.onClick}
          style={style}
        >
          {handleBoldAndItalic(!!props.bold, !!props.italic, props.children)}
        </p>
      );
  }
}
