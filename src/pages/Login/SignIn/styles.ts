import styled from "styled-components";
import backgroundImg from "@assets/flat-mountains.svg";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 3rem;
    padding: 1rem;
  }

  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
