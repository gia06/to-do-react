import styled from "styled-components";
import { useState, useEffect } from "react";
import { CheckBox } from "./ToDoInput";
import checkIcon from "../assets/icon-check.svg";
import crossIcon from "../assets/icon-cross.svg";

function ToDoList(props) {
  const [itemCheck, setItemCheck] = useState(false);

  return (
    <ItemWrapper isDarkTheme={props.isDarkTheme}>
      <Item isDarkTheme={props.isDarkTheme}>
        <ItemCheckBox
          type="checkbox"
          onClick={() => setItemCheck(!itemCheck)}
          itemCheck={itemCheck}
        >
          <img src={itemCheck ? checkIcon : ""} />
        </ItemCheckBox>
        <p>item 1</p>
        <img src={crossIcon} />
      </Item>

      <Item isDarkTheme={props.isDarkTheme}>
        <ItemCheckBox
          type="checkbox"
          onClick={() => setItemCheck(!itemCheck)}
          itemCheck={itemCheck}
        >
          <img src={itemCheck ? checkIcon : ""} />
        </ItemCheckBox>
        <label>item 2</label>
      </Item>
    </ItemWrapper>
  );
}

export default ToDoList;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: ${(props) => (props.isDarkTheme ? "#25273D" : "#ffffff")};
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 23px 20px 23px 72px;
  border-radius: 5px;
  color: ${(props) => (props.isDarkTheme ? "#C8CBE7" : "#393a4b")};

  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.25px;

  @media (max-width: 375px) {
    height: 48px;
  }
`;

const ItemCheckBox = styled(CheckBox)`
  background: ${(props) =>
    props.itemCheck ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)" : ""};
`;
