import styled from "styled-components";
import { useState, useEffect } from "react";
import { CheckBox } from "./ToDoInput";
import checkIcon from "../assets/icon-check.svg";
import crossIcon from "../assets/icon-cross.svg";

function ToDoList(props) {
  const [itemCheck, setItemCheck] = useState(false);
  const [hover, setHover] = useState(false);

  const { innerWidth } = window;

  return (
    <ItemWrapper isDarkTheme={props.isDarkTheme}>
      <Item
        isDarkTheme={props.isDarkTheme}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ItemCheckBox
          type="checkbox"
          onClick={() => setItemCheck(!itemCheck)}
          itemCheck={itemCheck}
          isDarkTheme={props.isDarkTheme}
        >
          <img src={itemCheck ? checkIcon : ""} />
        </ItemCheckBox>

        <ToDo>
          <p style={{ display: "inline-block" }}>item 1</p>
          {/* //TODO have to add delete functionality */}
          {hover || innerWidth < 1024 ? (
            <img src={crossIcon} style={{ cursor: "pointer" }} />
          ) : null}
        </ToDo>
        <LineBetween isDarkTheme={props.isDarkTheme} />
      </Item>

      {/* // * for testing */}
      <Item isDarkTheme={props.isDarkTheme}>
        <ItemCheckBox
          type="checkbox"
          onClick={() => setItemCheck(!itemCheck)}
          itemCheck={itemCheck}
        >
          <img src={itemCheck ? checkIcon : ""} />
        </ItemCheckBox>

        <ToDo>
          <p>item 2</p>
          {/* <img src={crossIcon} /> */}
        </ToDo>
        <LineBetween isDarkTheme={props.isDarkTheme} />
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
  display: block;
  width: 100%;
  height: 64px;
  border-radius: 5px;
  color: ${(props) => (props.isDarkTheme ? "#C8CBE7" : "#393a4b")};
  margin: auto 0;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.25px;

  @media (max-width: 375px) {
    height: 48px;
  }
`;

const ItemCheckBox = styled(CheckBox)`
  margin-top: 20px;
  background: ${(props) =>
    props.itemCheck ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)" : ""};

  @media (max-width: 375px) {
    margin-top: 14px;
  }
`;

const ToDo = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0;
  justify-content: space-between;
  margin: 23px 20px 23px 72px;

  @media (max-width: 375px) {
    margin: 15px 20px 15px 72px;
  }
`;

const LineBetween = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.isDarkTheme ? "#393A4B" : "#E3E4F1")};
`;
