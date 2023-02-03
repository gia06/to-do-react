import styled from "styled-components";
import { useState, useEffect } from "react";
import { CheckBox } from "./ToDoInput";
import checkIcon from "../assets/icon-check.svg";
import crossIcon from "../assets/icon-cross.svg";
import Footer from "./Footer";

function ToDoList(props) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [hover, setHover] = useState([]);
  const [numOfCompleted, setNumOfCompleted] = useState(0);

  const { innerWidth } = window;

  const handleData = (todo) => {
    checkedItems.push(todo._id);
    setNumOfCompleted((num) => num + 1);
  };

  const handleCheck = (id) => {
    const status = checkedItems.includes(id);
    const unChecked = checkedItems.filter((storedId) => storedId !== id);

    return status
      ? setCheckedItems(unChecked)
      : setCheckedItems([...checkedItems, id]);
  };

  useEffect(() => {
    if (props.apiData) {
      props.apiData.map((todo) =>
        todo.itemStatus === "completed" ? handleData(todo) : null
      );
      // console.log(checkedItems);
    }
  }, [props.apiData]);

  return (
    <ItemWrapper isDarkTheme={props.isDarkTheme}>
      {props.apiData
        ? props.apiData.map((todo) => {
            return (
              <Item
                key={todo._id}
                isDarkTheme={props.isDarkTheme}
                // onMouseOver={() => console.log("mouse moved over")}
              >
                <ToDo
                  checkedItems={checkedItems}
                  id={todo._id}
                  isDarkTheme={props.isDarkTheme}
                  // * option for remove icon appearance
                  // onMouseEnter={() => setHover([...hover, todo._id])}
                  // onMouseLeave={() =>
                  //   setHover(hover.filter((storedId) => storedId !== todo._id))
                  // }
                >
                  <ItemCheckBox
                    type="checkbox"
                    onClick={() => handleCheck(todo._id)}
                    checkedItems={checkedItems}
                    isDarkTheme={props.isDarkTheme}
                    itemStatus={todo.itemStatus}
                    id={todo._id}
                  >
                    <img
                      src={checkedItems.includes(todo._id) ? checkIcon : ""}
                    />
                  </ItemCheckBox>
                  <p>{todo.toDoItem}</p>
                  {/*

                  // * should test converting to background-image format
                  // TODO  - have to add delete functionality */}

                  {/* {hover.includes(todo._id) || innerWidth < 1024 ? ( */}
                  {/* <img src={crossIcon} style={{ cursor: "pointer" }} /> */}
                  {/* ) : null} */}
                </ToDo>

                <LineBetween isDarkTheme={props.isDarkTheme} />
              </Item>
            );
          })
        : null}
      {/* <Footer
        isDarkTheme={props.isDarkTheme}
        apiData={props.apiData}
        numOfCompleted={numOfCompleted}
      /> */}
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
  color: ${(props) => (props.isDarkTheme ? "#C8CBE7" : "#393a4b")};
  margin: auto 0;
  line-height: 18px;
  letter-spacing: -0.25px;

  :hover {
    background-image: url(${crossIcon});
    background-repeat: no-repeat;
    background-position: right 24px top 23px;
  }

  @media (max-width: 670px) {
    height: 48px;
  }
`;

//  TODO should try relative positioning
const ItemCheckBox = styled(CheckBox)`
  position: relative;

  background: ${(props) =>
    props.checkedItems.includes(props.id)
      ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)"
      : ""};

  :hover {
    background-image: linear-gradient(
      ${(props) =>
        props.checkedItems.includes(props.id)
          ? "135deg, #55ddff 0%, #c058f3 100%"
          : ""}
    );
  }
`;

const ToDo = styled.div`
  display: flex;
  flex-direction: row

  display: inline;
  align-items: center;

  width: 100%;
  height: 100%;

  p {
    display: inline;
    padding-left: 46px;
  }

  // TODO this should happen when checked --- text-decoration-line: line-through;
  text-decoration-line: ${(props) =>
    props.checkedItems.includes(props.id) ? "line-through" : ""};
  color: ${(props) =>
    props.checkedItems.includes(props.id) && props.isDarkTheme
      ? "#4D5067"
      : props.checkedItems.includes(props.id) && !props.isDarkTheme
      ? "#D1D2DA"
      : ""};

`;

const LineBetween = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.isDarkTheme ? "#393A4B" : "#E3E4F1")};
`;
