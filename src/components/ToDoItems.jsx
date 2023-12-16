/* eslint-disable react/prop-types */
import ToDoItem from "./ToDoItem";

const ToDoItems = ({ toDoList }) => {
  return (
    <>
      <div>
        {toDoList.map((item) => {
          <ToDoItem todoitem={item.name} tododate={item.date}></ToDoItem>;
        })}
      </div>
    </>
  );
};

export default ToDoItems;
