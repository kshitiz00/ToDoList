/* eslint-disable react/prop-types */
const ToDoItem = ({ todoitem, tododate }) => {
  return (
    <div className="container text-center mb-3">
      <div className="row">
        <div className="col-6 text-start">{todoitem}</div>
        <div className="col-4 text-start">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            style={{ minWidth: "80px" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
