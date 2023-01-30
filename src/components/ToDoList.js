import styled from "styled-components";
import { useState, useEffect } from "react";
import { CheckBox } from "./ToDoInput";
import checkIcon from "../assets/icon-check.svg";
import crossIcon from "../assets/icon-cross.svg";

function ToDoList(props) {
  const [itemCheck, setItemCheck] = useState([]);
  const [hover, setHover] = useState([]);

  const { innerWidth } = window;

  const handleCheck = (id) => {
    const status = itemCheck.includes(id);
    const unChecked = itemCheck.filter((storedId) => storedId !== id);

    return status ? setItemCheck(unChecked) : setItemCheck([...itemCheck, id]);
  };

  // TODO needs fix to mark checked completed todos by default
  useEffect(() => {
    if (props.apiData) {
      props.apiData.map(
        (todo) => console.log(todo)
        // todo.itemStatus === "completed" &&
        // setItemCheck([...itemCheck, todo._id])
      );
      console.log(itemCheck);
    }
  }, [props.apiData]);

  // console.log(itemCheck);

  return (
    <ItemWrapper isDarkTheme={props.isDarkTheme}>
      {props.apiData
        ? props.apiData.map((todo) => {
            return (
              <Item key={todo._id} isDarkTheme={props.isDarkTheme}>
                <ItemCheckBox
                  type="checkbox"
                  onClick={() => handleCheck(todo._id)}
                  itemCheck={itemCheck}
                  isDarkTheme={props.isDarkTheme}
                  itemStatus={todo.itemStatus}
                  id={todo._id}
                >
                  <img src={itemCheck.includes(todo._id) ? checkIcon : ""} />
                </ItemCheckBox>

                <ToDo
                // onMouseEnter={() => setHover([...hover, todo._id])}
                // onMouseLeave={() =>
                //   setHover(hover.filter((storedId) => storedId !== todo._id))
                // }
                >
                  <p style={{ display: "inline-block" }}>{todo.toDoItem}</p>
                  {/*

                  // * should test converting to background-image format
                  // TODO  - have to add delete functionality */}

                  {/* {hover.includes(todo._id) || innerWidth < 1024 ? (
                    <img src={crossIcon} style={{ cursor: "pointer" }} />
                  ) : null} */}
                </ToDo>
                <LineBetween isDarkTheme={props.isDarkTheme} />
              </Item>
            );
          })
        : null}
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

  :hover {
    background-image: url(${crossIcon});
    background-repeat: no-repeat;
    background-position: right 24px top 23px;
  }

  @media (max-width: 375px) {
    height: 48px;
  }
`;

const ItemCheckBox = styled(CheckBox)`
  margin-top: 20px;
  background: ${(props) =>
    props.itemCheck.includes(props.id)
      ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)"
      : ""};

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

  // TODO this should happen when checked --- text-decoration-line: line-through;

  @media (max-width: 375px) {
    margin: 15px 20px 15px 72px;
  }
`;

const LineBetween = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.isDarkTheme ? "#393A4B" : "#E3E4F1")};
`;
