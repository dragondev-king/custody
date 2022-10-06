import * as React from "react";

import Flex from "../Flex";
import Typography from "../typography/Typography";

import { COLOR_MAP } from "utils/color";

export interface WarningProps {
  button?: any;
  color?: string;
  fontSize?: number;
  fullWidth?: boolean;
  padding?: number;
  style?: any;
  warningText: string;
  variant?: "success" | "warning";
}

export default function Warning(props: WarningProps) {
  const style = { borderRadius: 8, padding: 12, ...props.style };

  let color = "";
  let fontColor = "white";
  if (props.color === "red") {
    color = "u-backgroundRed";
  } else if (props.color === "white") {
    color = "u-backgroundWhite";
    fontColor = "black";
    style.border = `2px solid ${COLOR_MAP.primary}`;
    // style.boxShadow =
    //   "0px 1px 10px rgb(216 22 162 / 20%), 0px 1px 3px rgb(0 0 0 / 4%)";
  } else if (props.color === "green") {
    color = "u-backgroundGreen";
  } else {
    color = "u-backgroundOrange";
  }

  if (props.fullWidth) {
    style.width = "100%";
  }

  return (
    <div
      className={`u-displayFlex u-alignItemsCenter u-justifyContentSpaceBetween ${color}`}
      style={style}
    >
      <Flex alignItems="center" item xs={props.button ? 24 : 18}>
        {props.variant === "success" && (
          <i
            className={`icon-ok s-fontSize${props.fontSize || 16} u-colorWhite`}
            style={{ paddingRight: 4 }}
          ></i>
        )}
        {props.variant === "warning" && (
          <i
            className={`icon-attention s-fontSize${
              props.fontSize || 16
            } u-colorWhite`}
            style={{ paddingRight: 4 }}
          ></i>
        )}
        <Typography bold fontSize={props.fontSize} style={{ color: fontColor }}>
          {props.warningText}
        </Typography>
      </Flex>
      {props.button && (
        <Flex item xs={6}>
          {props.button}
        </Flex>
      )}
    </div>
  );
}
