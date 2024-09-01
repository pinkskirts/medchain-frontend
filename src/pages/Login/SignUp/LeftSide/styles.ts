import styled from "styled-components";
import { theme } from "@theme/index";
import Link from "@components/UI/Link/index";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  & input,
  & button {
    border-radius: 5px;
    border: transparent;
    font-size: 20px;
  }
`;

export const PlainText = styled.p`
  white-space: pre;
  font-size: 20px;
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: rgba(158, 51, 51, 0.4);
  border: 2px transparent;
  border-radius: 5px;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  color: ${theme.colors.white[10]};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(158, 51, 51, 0.6);
  }
`;

export const RegisterTopDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1.5rem;
`;

export const RegisterTopDivHeader = styled.h1``;

export const DoesHaveAccountDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DoesHaveAccountLink = styled(Link)``;
