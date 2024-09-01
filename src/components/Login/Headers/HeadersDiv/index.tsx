import React from "react";
import * as _ from "./styles";

interface HeadersDivProps {
  children: React.ReactNode;
}

export default function HeadersDiv({ children }: HeadersDivProps) {
  return <_.HeadersDiv>{children}</_.HeadersDiv>;
}
