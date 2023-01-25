import { useState } from "react";
import styled from "styled-components";
import checkIcon from "../assets/icon-check.svg";

function ToDoInput() {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Wrapper>
      <CheckBox
        type="checkbox"
        onClick={() => setIsChecked(!isChecked)}
        isChecked={isChecked}
      >
        <img src={isChecked ? checkIcon : ""} />
      </CheckBox>

      <MainInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && console.log("submitted")}
      />
    </Wrapper>
  );
}

export default ToDoInput;

const Wrapper = styled.div`
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
  background-color: grey;
  cursor: pointer;
  @media (max-width: 375px) {
    height: 48px;
    margin-bottom: 16px;
  }
`;

const CheckBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid #393a4b;
  border-radius: 50%;
  background: ${(props) =>
    props.isChecked ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)" : ""};
  position: absolute;
  left: 24px;
`;

const MainInput = styled.input`
  background-color: grey;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 23px 20px 23px 72px;
`;

const Input = styled.input`
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
