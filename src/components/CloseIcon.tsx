import React from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
  height: 1.5rem;
  cursor: pointer;
  stroke: ${(props) => props.theme.colors.secondary};
`;

const CloseIcon = ({ className }: { className?: string }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className || ""}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </StyledSVG>
  );
};

export default CloseIcon;
