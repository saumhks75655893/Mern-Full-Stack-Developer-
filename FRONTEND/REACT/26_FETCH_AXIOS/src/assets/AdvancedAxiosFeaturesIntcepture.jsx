import React, { useEffect, useState } from "react";
import axiosInstance from "./Axios";

const AdvancedAxiosFeaturesIntcepture = () => {
  const [users, setUsers] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: "",
    age: "",
  });

  // ADVANCED AXIOS FEATURE

  // INTERCEPTURES

  // useEffect(() => {
  //   // // axios.interceptors.request.use(OnFullFill, OnReject)

  //   // // request : ---------
  //   // axios.interceptors.request.use((config) => {
  //   //   config.headers.Authorization = "Bearer adfadfadfj";
  //   //   console.log(config.headers);
  //   //   return config;
  //   // });

  //   // response : ---------
  //   axios.interceptors.response.use((response) => {
  //     response.status = 400;
  //     console.log(response);
  //     return response;
  //   });
  // }, []);

  // post data from user into a state variable
  function handlePostData(e) {
    const { name, value } = e.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  // axios.get() => fetch data from the api
  async function fetchData() {
    let res = await axiosInstance.get("/users", {
      onDownloadProgress: (progress) => {
        console.log(progress);
        console.log((progress.loaded / progress.total) * 100);
      },
    });

    setUsers(res.data);
  }

  // axios.post => post data to server on click of post data
  async function postData() {
    if (formDetails.name === "" || formDetails.age === "") {
      alert("Please fill all the details before posting data.");
      return;
    }

    const res = await axiosInstance.post("/users", formDetails, {
      headers: {
        "Content-Type": "application/json",
      },
      onUploadProgress: (progress) => {
        console.log(progress);
        console.log((progress.loaded / progress.total) * 100);
      },
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
  //axios.put =>  edit data to server on click of edit data
  async function editData(formData) {
    console.log(formData);
    const res = await axiosInstance.put(`/users/${formData.id}`, formDetails);

    setFormDetails({
      name: "",
      age: "",
    });

    fetchData();
  }

  // axios.delete => Delete data to server on click of delete data
  async function DeleteData(id) {
    const res = await axiosInstance.delete(`/users/${id}`);

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

export default AdvancedAxiosFeaturesIntcepture;
