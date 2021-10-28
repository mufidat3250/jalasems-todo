import React from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
  height: 1.5rem;
  stroke: mediumseagreen;
`;

const CheckIcon = () => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </StyledSVG>
  );
};

export default CheckIcon;
