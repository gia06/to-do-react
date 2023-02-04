import axios from "axios";

const api = "http://localhost:3001"; //* process.env.REACT_APP_API;

export const fetchData = async (filterValue, setApiData) => {
  try {
    const response = await (await axios.get(`${api}/toDos`)).data;
    const filteredData =
      filterValue === "all"
        ? response.data
        : response.data.filter((todo) => todo.itemStatus === filterValue);

    setApiData(filteredData);
  } catch (error) {
    console.log(error);
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

export const deleteItem = async (id, setDeletedItem) => {
  try {
    await axios.delete(`${api}/delete-toDo`, { data: { id } });
    setDeletedItem((arr) => [...arr, id]);
  } catch (error) {
    alert("Deleting item failed, please try again");
  }
};

export const deleteCompletedItems = async () => {
  try {
    await axios.delete(`${api}/delete-completed`);
  } catch (error) {
    console.log(error);
  }
};
