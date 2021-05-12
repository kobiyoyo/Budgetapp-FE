import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [editMode, setEditMode] = useState(false);
  const [updatedBudget, setUpdatedBudget] = useState(budget);
  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };
  const handleUpdatedBudget = () => {
    setEditMode(!editMode);
    dispatch({
      type: "EDIT_BUDGET",
      payload: updatedBudget,
    });
  };
  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center">
      {editMode === true ? (
        <>
          <input
            value={updatedBudget}
            onChange={(e) => setUpdatedBudget(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleUpdatedBudget}>
            Save
          </button>
        </>
      ) : (
        <>
          <span>Budget: ${budget}</span>
          <button className="btn btn-primary" onClick={handleToggleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Budget;
