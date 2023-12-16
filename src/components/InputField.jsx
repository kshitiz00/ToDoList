const InputField = () => {
  return (
    <div className="container text-center mb-4">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To Do"
            className="w-100"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" className="w-100"></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            style={{ minWidth: "80px" }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
