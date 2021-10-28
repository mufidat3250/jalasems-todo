import styled, { css } from "styled-components";

interface ButtonProps {
  padding?: string;
  primary?: boolean;
  size?: "large" | "" | "small";
}

const Button = styled.button<ButtonProps>`
  background: #ccd;
  color: #333;
  border: 1px solid transparent;
  border-radius: 5px;
  margin: 0.25rem;
  padding: ${(props) => props.padding || "0.25rem 1rem"};
  display: flex;
  align-items: center;

  svg {
    height: 1rem;
    margin-right: 0.5rem;
  }

  ${(props) =>
    props.size === "large" &&
    css`
      padding: 1rem 3rem;
      font-size: 1.75rem;
    `}

  ${(props) =>
    props.primary &&
    css`
      background: ${(props) => props.theme.colors.primary};
      color: white;
    `}

  :hover {
    cursor: pointer;
    border-color: #333;
  }
`;

export default Button;
