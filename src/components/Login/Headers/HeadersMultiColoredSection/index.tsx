import styled from "styled-components";

export const HeadersMultiColoredSectionElement = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  white-space: pre;
`;

interface HeadersMultiColoredSectionProps {
  children: React.ReactNode;
}

export default function HeadersMultiColoredSection({ children }: HeadersMultiColoredSectionProps) {
  return <HeadersMultiColoredSectionElement>{children}</HeadersMultiColoredSectionElement>;
}
