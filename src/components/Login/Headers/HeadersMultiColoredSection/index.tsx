import * as _ from "./styles";
import React from "react";

interface HeadersMultiColoredSectionProps {
  children: React.ReactNode;
}

export default function HeadersMultiColoredSection({ children }: HeadersMultiColoredSectionProps) {
  return <_.HeadersMultiColoredSection>{children}</_.HeadersMultiColoredSection>;
}
