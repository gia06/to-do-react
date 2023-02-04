import styled from "styled-components";
import { useState, useEffect } from "react";
import { CheckBox } from "./ToDoInput";
import checkIcon from "../assets/icon-check.svg";
import crossIcon from "../assets/icon-cross.svg";
import { updateItemStatus, deleteItem, deleteCompletedItems } from "../api/api";

function ToDoList({ isDarkTheme, apiData, setActiveItems }) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [numOfCompleted, setNumOfCompleted] = useState(0);

  const handleData = (todo) => {
    checkedItems.push(todo._id);
  };

  const handleCheck = (id) => {
    const status = checkedItems.includes(id);
    const unChecked = checkedItems.filter((storedId) => storedId !== id);

    status
      ? setCheckedItems(unChecked)
      : setCheckedItems([...checkedItems, id]);
    updateItemStatus(id);
  };

  useEffect(() => {
    if (apiData) {
      apiData.map((todo) =>
        todo.itemStatus === "completed" ? handleData(todo) : null
      );
    }
  }, [apiData]);

  return (
    <ItemWrapper isDarkTheme={isDarkTheme}>
      {apiData?.map((todo) => {
        return (
          <Item key={todo._id} isDarkTheme={isDarkTheme}>
            <ToDo
              checkedItems={checkedItems}
              id={todo._id}
              isDarkTheme={isDarkTheme}
            >
              <ItemCheckBox
                type="checkbox"
                onClick={() => handleCheck(todo._id)}
                checkedItems={checkedItems}
                isDarkTheme={isDarkTheme}
                itemStatus={todo.itemStatus}
                id={todo._id}
              >
                <img src={checkedItems.includes(todo._id) ? checkIcon : ""} />
              </ItemCheckBox>

              <p>{todo.toDoItem}</p>

              <RemoveButton src={crossIcon} style={{ cursor: "pointer" }} />
            </ToDo>

            <LineBetween isDarkTheme={isDarkTheme} />
          </Item>
        );
      })}
    </ItemWrapper>
  );
}

export default ToDoList;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ isDarkTheme }) => (isDarkTheme ? "#25273D" : "#ffffff")};
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  border-radius: 5px 5px 0 0;
  max-height: 389px;

  @media (max-width: 670px) {
    max-height: 366px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 64px;
  color: ${({ isDarkTheme }) => (isDarkTheme ? "#C8CBE7" : "#393a4b")};
  margin: auto 0;
  line-height: 18px;
  letter-spacing: -0.25px;

  @media (max-width: 670px) {
    height: 48px;
  }
`;

//  TODO should try relative positioning
const ItemCheckBox = styled(CheckBox)`
  position: relative;

  background: ${({ checkedItems, id }) =>
    checkedItems.includes(id)
      ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)"
      : ""};

  :hover {
    background-image: linear-gradient(
      ${({ checkedItems, id }) =>
        checkedItems.includes(id) ? "135deg, #55ddff 0%, #c058f3 100%" : ""}
    );
  }
`;

const ToDo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;

  p {
    display: inline;
    padding-left: 46px;
  }

  :hover {
    img {
      :nth-child(3) {
        display: inline;
        position: absolute;
        right: 24px;
      }
    }
  }

  text-decoration-line: ${({ checkedItems, id }) =>
    checkedItems.includes(id) ? "line-through" : ""};
  color: ${({ checkedItems, id, isDarkTheme }) =>
    checkedItems.includes(id) && isDarkTheme
      ? "#4D5067"
      : checkedItems.includes(id) && !isDarkTheme
      ? "#D1D2DA"
      : ""};
`;

const RemoveButton = styled.img`
  :nth-child(3) {
    display: none;
  }

  @media (max-width: 670px) {
    :nth-child(3) {
      display: inline;
      position: absolute;
      right: 24px;
    }
  }
`;

const LineBetween = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ isDarkTheme }) =>
    isDarkTheme ? "#393A4B" : "#E3E4F1"};
`;
