import InputField from "./components/InputField";
import ToDoHeading from "./components/ToDoHeading";
import ToDoItems from "./components/ToDoItems";

function App() {
  const toDoItems = [
    {
      name: "Buy Milk",
      date: "04/12/23",
    },
    {
      name: "Go To College",
      date: "04/12/23",
    },
  ];
  return (
    <center>
      <ToDoHeading heading="To Do List"></ToDoHeading>
      <InputField></InputField>
      <ToDoItems toDoList={toDoItems}></ToDoItems>
    </center>
  );
}

export default App;
