import * as React from "react";

import Box from "../Box";
import Typography from "../typography/Typography";

interface InfoWarningProps {
  children: React.ReactNode;
  fontSize?: number;
}

export default function InfoWarning(props: InfoWarningProps) {
  return (
    <Box
      fullWidth
      style={{
        backgroundColor: "#fafafa",
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
      }}
    >
      <Typography fontSize={props.fontSize || 13}>
        <i className="icon-info-circled-alt" style={{ paddingRight: 8 }}></i>
        {props.children}
      </Typography>
    </Box>
  );
}
