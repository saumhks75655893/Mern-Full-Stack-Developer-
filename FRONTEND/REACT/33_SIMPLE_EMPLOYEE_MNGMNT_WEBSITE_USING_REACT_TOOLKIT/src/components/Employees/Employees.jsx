import React from "react";
import Layout from "../layout/Layout";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../../store/features/popup/popup.slice";
import { updateEmployee } from "../../store/features/employee/employee.thunk";
import Loading from "../loading/Loading";

const Employees = () => {
  const employeeDetails = useSelector((state) => state.employees);

  return (
    <>
      <div className="fixed top-0 left-0 bg-base-200 w-screen h-screen">
        {employeeDetails.loading === true && <Loading />}
      </div>

      <div className=" py-4">
        <Layout>
          <EmployeeCard empDetails={employeeDetails.employees} />
        </Layout>
      </div>
    </>
  );
};

const EmployeeCard = ({ empDetails }) => {
  const dispatch = useDispatch();

  const handleHighlight = (elem) => {
    dispatch(
      updateEmployee({
        id: elem.id,
        details: {
          ...elem,
          hightlight: !elem.hightlight,
        },
      }),
    );
  };

  return (
    <>
      {empDetails.lenght === 0 && <h1>"No Employee Found" </h1>}
      {empDetails.map((elem) => {
        return (
          <ul
            key={elem.id}
            className="list bg-base-200 rounded-box shadow-2xs shadow-cyan-300 my-5"
          >
            <li className="list-row flex items-center justify-between ">
              <div className="w-[6%]">
                <img
                  className="size-10 rounded-box w-full h-full object-contain"
                  src={elem.profileUrl}
                />
              </div>
              <div className="flex flex-col gap-2 w-[75%]">
                <div className="text-[18px]   ">{elem.name}</div>
                <div className="text-[16px] uppercase font-semibold opacity-60">
                  {elem.email}
                </div>

                <p className="list-col-wrap text-[14px]">{elem.bio}</p>
              </div>
              <div>
                <button
                  onClick={() => dispatch(openEmployeePopup(elem))}
                  className="btn btn-square btn-ghost"
                >
                  <CiEdit />
                </button>
                <button
                  onClick={() => dispatch(openDeletePopup(elem.id))}
                  className="btn btn-square btn-ghost"
                >
                  <MdDelete />
                </button>
                <button
                  onClick={() =>
                    dispatch(() => updateEmployee(handleHighlight(elem)))
                  }
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    className="size-[1.2em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill={elem.hightlight === true ? "red" : ""}
                      stroke="currentColor"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default Employees;
