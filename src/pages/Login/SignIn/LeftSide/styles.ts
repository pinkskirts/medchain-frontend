import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

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
`

export const HeaderDivs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const HeaderText = styled.h1<{ color: string; marginTop?: string; marginBottom?: string }>`
  color: ${(props) => props.color};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  white-space: normal;
  word-wrap: break-word;
  text-align: center;
`;

export const SignInImage = styled.img`
    margin-top: -5%;
    padding: 2rem;
`

