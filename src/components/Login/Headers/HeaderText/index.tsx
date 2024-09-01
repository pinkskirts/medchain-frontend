import React from "react";
import * as _ from "./styles";

export interface HeaderTextProps {
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  children?: React.ReactNode;
}

export default function HeaderText({
  color,
  marginTop,
  marginBottom,
  children,
}: HeaderTextProps) {
  return (
    <_.HeaderText
      color={color}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </_.HeaderText>
  );
}
