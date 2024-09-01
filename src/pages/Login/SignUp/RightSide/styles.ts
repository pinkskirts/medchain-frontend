import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 71%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(158, 51, 51, 0.4);
  border: 2px transparent;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(158, 51, 51, 0.6);
  }
`;

export const SignUpImage = styled.img`
  margin-top: -5%;
  padding: 3rem;
`;
