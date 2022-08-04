// const API= "https://my-json-server.typicode.com/Jeck99/fake-server/users" ;

// async function getUsersInfo() {
//     try {
//         return await fetch(API)
//             .then(res => res.json())
//     }
//     catch (err) {
//         console.log(err)
//     }
//     finally { }
// }



// function printUsersInfo() {

//     getUsersInfo().then((answer) => {answer.forEach(element => {
//     users_table.innerHTML += `<tr id="${element._id}">
//     <td>${element._id}</td><td>${element.age}</td><td>${element.name.first}</td><td>${element.name.last}</td><td>
//     ${element.email}</td><td>${element.index}</td><td>${element.phone}</td><td>
//     <img class="img-thumbnail" src="/imges/gettyimages-1250238624-612x612.jpg"/></td><td>
//    <button onclick="deletUser('${element._id}')">&#9940;</button></td>
//     </tr>
//     `
//         });
//     })
// }


// printUsersInfo()


// async function deletUser(id){
//     try{
//         let result = await fetch(`${API}/${id}`, {method: "DELETE"})
//         if(result.status <= 299 || 404) document.getElementById(id).remove()
//     }
//     catch(err){console.log(err)}
//     finally{}

// }


const api= `2953aef29193799200291ca2b5e3f722`;

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

window.addEventListener('load', () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp } = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
          const { sunrise, sunset } = data.sys;

          const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          const fahrenheit = (temp * 9) / 5 + 32;

          // Converting Epoch(Unix) time to GMT
          const sunriseGMT = new Date(sunrise * 1000);
          const sunsetGMT = new Date(sunset * 1000);

          // Interacting with DOM to show data
          iconImg.src = iconUrl;
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempC.textContent = `${temp.toFixed(2)} °C`;
          tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
          sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
          sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        });
    });
  }
});