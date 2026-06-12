import React from "react";
import { closeDeletePopup } from "../../store/features/popup/popup.slice";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../../store/features/employee/employee.thunk";

const Deletepopup = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popup.deletePopup);

  const handleDeleteConfirmation = async () => {
    await dispatch(deleteEmployee(popup));
    dispatch(closeDeletePopup());
  };

  if (!popup) return null;

  return (
    <div onClick={() => dispatch(closeDeletePopup())}>
      <div className="hero bg-black/90 fixed top-0 left-0 h-full w-full z-20">
        <div
          onClick={(e) => e.stopPropagation()}
          className="card-body w-90 bg-black rounded-xl"
        >
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-red-500 font-bold text-2xl">
                {" "}
                Are You Sure, You want to delete it?
              </h2>

              <div className="card-actions py-5 px-5 flex gap-5">
                <button
                  onClick={() => dispatch(closeDeletePopup())}
                  className="btn bg-green-500"
                >
                  No
                </button>
                <button
                  onClick={handleDeleteConfirmation}
                  className="btn bg-red-500"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deletepopup;
