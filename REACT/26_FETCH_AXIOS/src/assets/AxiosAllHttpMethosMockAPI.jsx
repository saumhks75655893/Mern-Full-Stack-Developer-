import React, { use, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useState } from "react";

const AxiosAllHttpMethosMockAPI = () => {
  const [users, setUsers] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: "",
    age: "",
  });

  // post data from user
  function handlePostData(e) {
    const { name, value } = e.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  // fetch data from the api
  async function fetchData() {
    let res = await axios({
      url: "https://6a02eca20d92f63dd25481e9.mockapi.io/api/details/users",
    });

    setUsers(res.data);
  }

  // post data to server on click of post data
  async function postData() {
    if (formDetails.name === "" || formDetails.age === "") {
      alert("Please fill all the details before posting data.");
      return;
    }
    const res = await axios({
      url: "https://6a02eca20d92f63dd25481e9.mockapi.io/api/details/users",
      method: "post",
      data: formDetails,
    });

    setFormDetails({
      name: "",
      age: "",
    });

    fetchData();

    if (res.status === 201) {
      alert("Data Posted Successfully");
    }
  }
  // edit data to server on click of edit data
  async function editData(formData) {
    console.log(formData);
    const res = await axios({
      url: `https://6a02eca20d92f63dd25481e9.mockapi.io/api/details/users/${formData.id}`,
      method: "put",
      data: formDetails,
    });

    setFormDetails({
      name: "",
      age: "",
    });

    fetchData();
  }

  // Delete data to server on click of delete data
  async function DeleteData(id) {
    const res = await axios({
      url: `https://6a02eca20d92f63dd25481e9.mockapi.io/api/details/users/${id}`,
      method: "delete",
    });

    fetchData();
  }

  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {/* fetch data functionality */}
        {/* <button onClick={fetchData}>Fetch Data</button> */}

        {/* Post data funcationality */}
        <div className="inputData">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formDetails.name}
            onChange={handlePostData}
          />
          <input
            type="number"
            placeholder="Enter age"
            name="age"
            value={formDetails.age}
            onChange={handlePostData}
          />
          {formDetails.editMode ? (
            <button onClick={() => editData(formDetails)}>Save Data</button>
          ) : (
            <button onClick={postData}>Post Data</button>
          )}
        </div>

        {/* for showing fetched data */}
        <div className="showData">
          {users.map((user) => {
            return (
              <div key={user.id} className="data">
                <h4>Name : {user.name}</h4>
                <h4>Age : {user.age} </h4>
                <div className="buttons">
                  <button
                    className="edit"
                    onClick={() => setFormDetails({ ...user, editMode: true })}
                  >
                    Edit
                  </button>
                  <button onClick={() => DeleteData(user.id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AxiosAllHttpMethosMockAPI;
