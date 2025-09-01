// // ==========> HOw To fetch api data

// async function fetchData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
//   console.log(await response.json());
// }

// fetchData();

// // // // =============> CREATING A WEATHER WEBSITE

let container = document.querySelector(".container");
console.log(container);

let loc = prompt("Enter your location : ");
async function weatherDetails() {
  let response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0ce5ba6655de4096af280550251907&q=${loc}&aqi=no`
  );

  let JsonResult = await response.json();
  console.log(JsonResult["current"]);

  let newDiv = document.createElement("div");
  newDiv.className = "smallContainer";

  newDiv.innerHTML = `
      <div class="countryDetail">
        <h1>Country : <span class="country">${JsonResult["location"].country}</span></h1>
        <h1>Region : <span class="region">${JsonResult["location"].region}</span></h1>
        <h1>City : <span class="city">${JsonResult["location"].name}</span></h1>
      </div>
      <div class="weatherDetails">
        <h3>Humidity : <span class="humidity">${JsonResult["current"].humidity}</span></h3>
        <h3>Temperature in Celcius : <span class="temp_c">${JsonResult["current"].temp_c}</span></h3>
        <h3>Temperature in Forenheit : <span class="temp_f">${JsonResult["current"].temp_f}</span></h3>
        <h3>Local Time : <span class="localtime">${JsonResult["current"].last_updated}</span></h3>
        <h3>Wind Degree : <span class="wd">${JsonResult["current"].wind_degree}</span></h3>
        <h3>Wind Direction : <span class="wdir">${JsonResult["current"].wind_dir}</span></h3>
        <h3>Wind Kph : <span class="tz_id">${JsonResult["current"].wind_kph}</span></h3>
        <h3>Wind mph : <span class="tz_id">${JsonResult["current"].wind_mph}</span></h3>
      </div>
  `;

  container.append(newDiv);
}

weatherDetails();
