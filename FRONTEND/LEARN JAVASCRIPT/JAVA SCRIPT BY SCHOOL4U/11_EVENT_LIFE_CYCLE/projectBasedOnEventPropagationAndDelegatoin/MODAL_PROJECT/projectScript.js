let openModalBtn = document.querySelector(".openModalBtn");
let modalContainer = document.querySelector(".modalContainer");
let closeModalBtn = document.querySelector(".closeModalBtn");
let modalContent = document.querySelector(".modalContent");
openModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
  openModalBtn.style.display = "none";
});

// closeModalBtn.addEventListener("click", () => {
//   modalContainer.style.display = "none";
//   openModalBtn.style.display = "inline-block";
// });

modalContainer.addEventListener("click", (event) => {
  if (event.target.className === "modalContainer") {
    modalContainer.style.display = "none";
    openModalBtn.style.display = "inline-block";
  }
});
