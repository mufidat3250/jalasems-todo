import React from "react";
import styled, { css } from "styled-components";
import { ITodo } from "../App";
import CheckIcon from "./CheckIcon";
import CloseIcon from "./CloseIcon";

const ItemsWrapper = styled.div`
  background-color: white;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #e6e6e6;

  .remove {
    visibility: hidden;
  }

  :hover .remove {
    visibility: visible;
  }
`;

const IsCompleted = styled.div`
  border: 1px solid slategray;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

const TodoText = styled.span<{ isInactive?: boolean }>`
  font-size: 1.5rem;
  flex: 1;
  ${(props) =>
    props.isInactive &&
    css`
      text-decoration: line-through;
      color: #ccc;
    `}
`;

interface IProps {
  items: ITodo[];
}
const TodoItems = ({ items }: IProps) => {
  return (
    <ItemsWrapper>
      {items.map((item) => (
        <TodoItem key={item.id}>
          <IsCompleted>{item.isCompleted ? <CheckIcon /> : null}</IsCompleted>
          <TodoText isInactive={item.isCompleted}>{item.text}</TodoText>
          <CloseIcon className="remove" />
        </TodoItem>
      ))}
    </ItemsWrapper>
  );
};

export default TodoItems;
