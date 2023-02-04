import axios from "axios";

const api = process.env.REACT_APP_API;

export const fetchData = async (filterValue, setApiData) => {
  try {
    const response = await (await axios.get(`${api}/toDos`)).data;
    const filteredData =
      filterValue === "all"
        ? response.data
        : response.data.filter((todo) => todo.itemStatus === filterValue);

    setApiData(filteredData);
  } catch (error) {
    alert("Something went wrong, please try again");
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

export const deleteItem = async (id, setTriggerDelete) => {
  try {
    await axios.delete(`${api}/delete-toDo`, { data: { id } });
    setTriggerDelete("single-delete");
  } catch (error) {
    alert("Deleting item failed, please try again");
  }
};

export const deleteCompletedItems = async (setTriggerDelete) => {
  try {
    await axios.delete(`${api}/delete-completed`);
    setTriggerDelete("clear-completed-delete");
  } catch (error) {
    alert("Deleting items failed, please try again");
  }
};
