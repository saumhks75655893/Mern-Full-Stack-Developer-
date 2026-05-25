import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Employees from "./components/Employees/Employees";
import EmployeePop from "./components/EmployeePopup/EmployeePopup";
import Deletepopup from "./components/deletePopup/Deletepopup";
import { useDispatch } from "react-redux";
import { getEmployees } from "./store/features/employee/employee.thunk";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <EmployeePop />
      <Deletepopup />
      <Navbar />
      <div className="relative flex-1">
        <Employees />
      </div>
      <Footer />
    </div>
  );
};

export default App;
