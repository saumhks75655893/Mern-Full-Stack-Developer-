import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../store/features/popup/popup.slice";
import {
  postEmployees,
  updateEmployee,
} from "../../store/features/employee/employee.thunk";

const EmployeePop = () => {
  const [formDetails, setFormDetails] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    hightlight: false,
  });
  // console.log(details);

  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popup.employeePopup);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (popup.id) {
      await dispatch(
        updateEmployee({
          id: popup.id,
          details: formDetails,
        }),
      );
    } else {
      await dispatch(postEmployees(formDetails));
    }
    dispatch(closeEmployeePopup());
  };

  useEffect(() => {
    if (!popup) {
      setFormDetails({
        profileUrl: "",
        name: "",
        email: "",
        bio: "",
        hightlight: false,
      });
    } else if (popup.id) {
      console.log("set kar rha hu");
      setFormDetails({
        profileUrl: popup.profileUrl,
        name: popup.name,
        email: popup.email,
        bio: popup.bio,
        hightlight: false,
      });
    }
  }, [popup]);

  if (!popup) return null;

  return (
    <div onClick={() => dispatch(closeEmployeePopup())}>
      <div className="hero bg-black/80 fixed top-0 left-0 h-full w-full z-20">
        <div
          onClick={(e) => e.stopPropagation()}
          className="card-body w-90 bg-gray-900 rounded-xl"
        >
          <fieldset className="fieldset">
            <h2 className="text-center font-bold text-xl text-blue-500">
              Employee Details
            </h2>
            <label className="label">Profile URL</label>
            <input
              name="profileUrl"
              value={formDetails.profileUrl}
              type="text"
              className="input"
              placeholder="Profile - url"
              onChange={handleInputChange}
            />

            <label className="label">Name</label>
            <input
              name="name"
              value={formDetails.name}
              type="text"
              className="input"
              placeholder="Name"
              onChange={handleInputChange}
            />

            <label className="label">Email</label>
            <input
              name="email"
              value={formDetails.email}
              type="email"
              className="input"
              placeholder="Email"
              onChange={handleInputChange}
            />

            <label className="label">Bio</label>
            <textarea
              className="textarea h-24"
              placeholder="Write about yourself"
              name="bio"
              value={formDetails.bio}
              onChange={handleInputChange}
            ></textarea>

            <button onClick={handleSubmit} className="btn btn-primary mt-4">
              Submit
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default EmployeePop;
