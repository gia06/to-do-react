import axios from "axios";

const api = process.env.REACT_APP_API;

export const fetchData = async (setApiData) => {
  try {
    const response = await (await axios.get(`${api}/toDos`)).data;
    setApiData(response.data);
  } catch (error) {
    alert("Data fetch failed, please try again");
  }
};

export const createToDo = async (inputValue, isChecked, setInputValue) => {
  try {
    await axios.post(`${api}/create-toDo`, {
      toDoItem: inputValue,
      itemStatus: isChecked ? "completed" : "active",
    });
    setInputValue("");
  } catch (error) {
    alert("Submitting todo failed, please try again");
  }
};

export const updateItemStatus = async (id, handleCheck) => {
  try {
    await axios.put(`${api}/update-toDo`, { id });
    handleCheck(id);
  } catch (error) {
    alert("Error updating, please try again");
  }
};

export const deleteItem = async (id, setLocalData) => {
  try {
    await axios.delete(`${api}/delete-toDo`, { data: { id } });
    setLocalData((preVal) => preVal.filter((todo) => todo._id !== id));
  } catch (error) {
    alert("Deleting item failed, please try again");
  }
};

export const deleteCompletedItems = async (setLocalData) => {
  try {
    await axios.delete(`${api}/delete-completed`);
    setLocalData((preVal) =>
      preVal.filter((todo) => todo.itemStatus !== "completed")
    );
  } catch (error) {
    alert("Deleting items failed, please try again");
  }
};

export const getTheme = () => {
  try {
    return JSON.parse(localStorage.getItem("theme")).isDarkTheme;
  } catch (error) {
    return false;
  }
};

export const getLocalData = () => {
  try {
    return JSON.parse(localStorage.getItem("localData"));
  } catch (error) {
    return [];
  }
};
