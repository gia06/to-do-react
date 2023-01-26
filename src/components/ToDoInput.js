import { useState } from "react";
import styled from "styled-components";
import checkIcon from "../assets/icon-check.svg";

function ToDoInput(props) {
  const [inputValue, setInputValue] = useState("");
  const [inputCheck, setInputCheck] = useState(false);

  return (
    <InputWrapper>
      <CheckBox
        type="checkbox"
        onClick={() => setInputCheck(!inputCheck)}
        inputCheck={inputCheck}
      >
        <img src={inputCheck ? checkIcon : ""} />
      </CheckBox>
      <MainInput
        type="text"
        value={inputValue}
        placeholder="Create a new todo..."
        onChange={(e) => setInputValue(e.target.value)}
        isDarkTheme={props.isDarkTheme}
        // todo will add submitting function here when ready
        onKeyDown={(e) => e.key === "Enter" && console.log("submitted")}
      />
    </InputWrapper>
  );
}

export default ToDoInput;

const InputWrapper = styled.div`
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

  @media (max-width: 375px) {
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
  border: 1px solid #393a4b;
  border-radius: 50%;
  background: ${(props) =>
    props.inputCheck
      ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)"
      : ""};
  position: absolute;
  left: 24px;
  cursor: pointer;
`;

const MainInput = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 23px 20px 23px 72px;

  outline-style: none;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.25px;
  color: ${(props) => (props.isDarkTheme ? "#C8CBE7" : "#393a4b")};
  background: ${(props) => (props.isDarkTheme ? "#25273D" : "#ffffff")};
`;
