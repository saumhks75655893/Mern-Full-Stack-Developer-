import React, { useState } from "react";
import Navbar from "./assets/components/Navbar";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState("");

  function closeModal() {
    setIsModalOpen((prev) => (prev = ""));
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div
        onClick={closeModal}
        className="w-full h-screen transition-all duration-300 bg-black/50"
      ></div>
    </div>
  );
};

export default App;
