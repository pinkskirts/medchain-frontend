import styled from "styled-components";
import { theme } from "@theme/index";

export const ToggleSwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  border: 2px solid ${theme.colors.black[10]};
  border-radius: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.gray[20]};
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 23px;
    width: 23px;
    left: 1px;
    bottom: 1px;
    background-color: ${theme.colors.red[10]};
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: ${theme.colors.gray[10]};
  }

  input:checked + .slider:before {
    transform: translateX(25px);
  }
`;
