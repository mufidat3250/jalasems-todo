import styled from "styled-components";

const TodoForm = styled.form`
  display: flex;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
  padding: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  padding: 0.5rem;
  font-weight: 300;
  font-size: 24px;
  line-height: 34px;

  :focus {
    outline: none;
  }
`;

const TodoInput = () => {
  return (
    <TodoForm onSubmit={(e) => e.preventDefault()}>
      <Input type="text" placeholder="What needs to be done?" />
    </TodoForm>
  );
};

export default TodoInput;
