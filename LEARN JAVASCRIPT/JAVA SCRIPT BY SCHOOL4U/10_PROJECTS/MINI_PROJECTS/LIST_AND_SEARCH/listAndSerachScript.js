let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");
let userInput = document.querySelector(".userInput");

let arr = [
  {
    profileUrl:
      "https://img.freepik.com/free-photo/teenager-boy-portrait_23-2148105678.jpg",
    name: "Raghav Larence",
    email: "raghavlarence.main@gmail.com",
  },
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5TmPdRp9mhJQ4Unm0a8Bh0OXTRWHMNz0hQ&s",
    name: "Radhika Tripathi",
    email: "radhika.didi@gmail.com",
  },
  {
    profileUrl:
      "https://media.istockphoto.com/id/2006436002/video/happy-confident-and-portrait-of-indian-man-in-office-with-creative-professional-at-tech.jpg?s=640x640&k=20&c=vcKAWd0sGJpV3xR0AK1RCM7zTEpFUcBhQEXbNvN1M78=",
    name: "Munna Bhaiya",
    email: "munna.bhaiya@gmail.com",
  },
  {
    profileUrl:
      "https://img.freepik.com/free-photo/girl-with-long-hair-being-happy_23-2148244714.jpg?semt=ais_hybrid&w=740",
    name: "Meera Rajput",
    email: "meera.rajput@gmail.com",
  },
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYigr2WlFlmGHWO4zj9-xmU9HUewTonrCcQ&s",
    name: "Obama Bhaiya",
    email: "obama.bhaiya@gmail.com",
  },
];

// to show details from arr dynamically

function renderUser(user) {
  if (user.length === 0) {
    userContainer.className = "user-container";
    userContainer.innerHTML = "NO RECORD FOUND";
  } else {
    userContainer.className = "userContainer";
    userContainer.innerHTML = "";
    user.map((obj) => {
      let { profileUrl, name, email } = obj;

      let divElem = document.createElement("div");
      divElem.className = "userInput";

      divElem.innerHTML = `
    <div class="image">
    <img src='${profileUrl}' alt="person">
    </div>
    <div class="userNameMail">
    <h3>${name}</h3>
    <p>${email}</p>
    </div>
  `;

      userContainer.append(divElem);
    });
  }
}
renderUser(arr);

// search function for handle the searching with the userInput fields

let handleSearch = (e) => {
  let searchValue = e.target.value;
  let filteredValue = arr.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      obj.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  // console.log(filteredValue);
  renderUser(filteredValue);
};

searchInput.addEventListener("input", handleSearch);
