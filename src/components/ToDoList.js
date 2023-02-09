import styled from "styled-components";
import { useEffect } from "react";
import { CheckBox } from "./ToDoInput";
import checkIcon from "../assets/icon-check.svg";
import crossIcon from "../assets/icon-cross.svg";
import { updateItemStatus, deleteItem } from "../data/dataHandler";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ToDoList({
  isDarkTheme,
  apiData,
  setItemsLeft,
  filter,
  checkedItems,
  setCheckedItems,
  localData,
  setLocalData,
}) {
  const handleCheck = (id) => {
    const status = checkedItems.includes(id);
    const unChecked = checkedItems.filter((storedId) => storedId !== id);

    status
      ? setCheckedItems(unChecked)
      : setCheckedItems([...checkedItems, id]);
  };

  const handleFilter = (apiData, filterValue, checkedItems) => {
    const filteredData =
      filterValue === "all"
        ? apiData
        : apiData.filter((todo) => todo.itemStatus === filterValue);

    setLocalData(filteredData);
    apiData?.map((todo) =>
      todo.itemStatus === "completed" ? checkedItems.push(todo._id) : null
    );
  };

  const handleLeftItems = (localData) => {
    setItemsLeft(0);
    localData?.map((todo) =>
      todo.itemStatus === "active" ? setItemsLeft((val) => val + 1) : null
    );
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(localData);
    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);
    setLocalData(items);
  };

  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(localData));
    handleLeftItems(localData);
  }, [localData]);

  useEffect(() => {
    handleFilter(apiData, filter, checkedItems);
    console.log("should re render");
  }, [apiData, filter]);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="to-dos">
        {(provided) => (
          <ItemWrapper
            isDarkTheme={isDarkTheme}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {localData?.map((todo, index) => (
              <Draggable
                key={todo._id}
                draggableId={todo.toDoItem + todo._id}
                index={index}
              >
                {(provided) => (
                  <Item
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDarkTheme={isDarkTheme}
                  >
                    <ToDo
                      checkedItems={checkedItems}
                      id={todo._id}
                      isDarkTheme={isDarkTheme}
                    >
                      <ItemCheckBox
                        onClick={() => updateItemStatus(todo._id, handleCheck)}
                        checkedItems={checkedItems}
                        isDarkTheme={isDarkTheme}
                        id={todo._id}
                      >
                        <img
                          src={checkedItems.includes(todo._id) ? checkIcon : ""}
                        />
                      </ItemCheckBox>

                      <p>{todo.toDoItem}</p>

                      <RemoveButton
                        src={crossIcon}
                        onClick={() => deleteItem(todo._id, setLocalData)}
                      />
                    </ToDo>

                    <LineBetween isDarkTheme={isDarkTheme} />
                  </Item>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ItemWrapper>
        )}
      </Droppable>
    </DragDropContext>
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
        cursor: pointer;
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
