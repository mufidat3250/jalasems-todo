import { useState } from "react";
import styled from "styled-components";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";

const TodoWrapper = styled.div`
  /* border: 2px solid mediumseagreen; */
  width: 25rem;
  margin: 2rem auto 1rem;
`;

const Title = styled.h1`
  color: tomato;
  font-size: 100px;
  font-weight: 100;
  line-height: 20px;
  text-align: center;
`;

export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}
const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, text: "Learn Typescript", isCompleted: false },
    { id: 2, text: "Learn React", isCompleted: false },
    { id: 3, text: "Learn Styled Components", isCompleted: false },
    { id: 4, text: "Learn Hooks", isCompleted: true },
  ]);
  return (
    <TodoWrapper>
      <Title>Todos</Title>
      <TodoInput />
      <TodoItems items={todos} />
    </TodoWrapper>
  );
};

export default App;
