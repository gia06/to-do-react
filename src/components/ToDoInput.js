import { useState } from "react";
import styled from "styled-components";
import checkIcon from "../assets/icon-check.svg";
import { createToDo } from "../data/dataHandler";

function ToDoInput({ isDarkTheme }) {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <InputWrapper
      onSubmit={() => createToDo(inputValue, isChecked, setInputValue)}
    >
      <CheckBox
        type="checkbox"
        onClick={() => setIsChecked(!isChecked)}
        isChecked={isChecked}
        isDarkTheme={isDarkTheme}
      >
        <img src={isChecked ? checkIcon : ""} />
      </CheckBox>

      <MainInput
        type="text"
        value={inputValue}
        placeholder="Create a new todo..."
        onChange={(e) => setInputValue(e.target.value)}
        isDarkTheme={isDarkTheme}
      />
    </InputWrapper>
  );
}

export default ToDoInput;

const InputWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  border-radius: 5px;
  margin-bottom: 24px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  font-size: 18px;
  letter-spacing: -0.25px;
  color: #393a4b;

  @media (max-width: 670px) {
    height: 48px;
    margin-bottom: 16px;
  }
`;

export const CheckBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid
    ${({ isDarkTheme }) => (isDarkTheme ? "#393a4b" : "#E3E4F1")};
  border-radius: 50%;
  background: ${({ isChecked }) =>
    isChecked ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)" : ""};
  position: absolute;
  left: 24px;
  cursor: pointer;

  :hover {
    border: double 1px transparent;
    background-image: linear-gradient(
        ${({ isDarkTheme }) =>
          isDarkTheme ? "#25273d, #25273d" : "#ffffff, #ffffff"}
      ),
      linear-gradient(135deg, #55ddff 0%, #c058f3 100%);

    background-image: linear-gradient(
      ${({ isChecked }) =>
        isChecked ? "135deg, #55ddff 0%, #c058f3 100%" : ""}
    );

    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  @media (max-width: 670px) {
    left: 20px;
    width: 20px;
    height: 20px;
  }
`;

const MainInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 23px 20px 23px 72px;
  border-radius: 5px;
  outline-style: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.25px;
  color: ${({ isDarkTheme }) => (isDarkTheme ? "#C8CBE7" : "#393a4b")};
  caret-color: #3a7cfd;
  background: ${({ isDarkTheme }) => (isDarkTheme ? "#25273D" : "#ffffff")};
`;
