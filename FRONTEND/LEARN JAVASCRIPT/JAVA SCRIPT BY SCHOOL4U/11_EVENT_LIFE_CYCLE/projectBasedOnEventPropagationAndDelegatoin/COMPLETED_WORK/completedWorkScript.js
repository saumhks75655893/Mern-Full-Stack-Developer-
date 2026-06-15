let listContent = document.querySelector(".listContent");
listContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("work")) {
    e.target.style.textDecoration = "line-through";
  }
});
