import React, { useState } from "react";
import Modal from "./assets/components/Modal";
import Button from "./assets/components/Button";

const App = () => {
  const [status, setStatus] = useState("");
  const [showButtons, setShowButtons] = useState(true);

  function openModal(type) {
    setShowButtons(false);
    setStatus(type);
  }

  function closeModal() {
    setStatus((prev) => (prev = ""));
    setShowButtons(true);
  }
  const obj = {
    edit: (
      <Modal
        title="⚠ Edit"
        data=" Are you sure you want to edit this?"
        closeModal={closeModal}
      />
    ),
    delete: (
      <Modal
        title="Delete ❗"
        data=" Are you sure you want to edit this?"
        closeModal={closeModal}
      />
    ),
  };
  return (
    <>  
      <div>{status ? obj[status] : null}</div>
      {showButtons && (
        <div className="flex flex-row gap-40 justify-around items-center">
          <Button onClick={() => openModal("edit")} data="Edit" color="green" />
          <Button
            onClick={() => openModal("delete")}
            data="Delete"
            color="red"
          />
        </div>
      )}
    </>
    // <Modal />

    // <Modal title="❌ Delete" data=" Are you sure you want to edit this?" />
  );
};

export default App;
