// globals
var apiKey = "8f14f498b80df53efe91f44dcb494851"
var lon
var lat
var aResults 
var bResults

var now = moment()
var currentDate = now.format("M"+"/"+"D")
var displayNow = document.querySelector("#displayNow")

var uvbg = document.querySelector("#uvbg")

var cityIndex = 0

// searched city history list
var city1 = document.querySelector("#city1")
var city2 = document.querySelector("#city2")
var city3 = document.querySelector("#city3")
var city4 = document.querySelector("#city4")
var city5 = document.querySelector("#city5")
var city6 = document.querySelector("#city6")
var city7 = document.querySelector("#city7")
var city8 = document.querySelector("#city8")
var city9 = document.querySelector("#city9")
var city10 = document.querySelector("#city10")
var city11 = document.querySelector("#city11")
var city12 = document.querySelector("#city12")


var cityArray = [
  city1,
  city2,
  city3,
  city4,
  city5,
  city6,
  city7,
  city8,
  city9,
  city10,
  city11,
  city12
]

// forecast cards
var bCity = document.querySelector("#bCity")
var bTemp = document.querySelector("#bTemp")
var bWind = document.querySelector("#bWind")
var bHumid = document.querySelector("#bHumid")
var bUV = document.querySelector("#bUV")

var date1 = document.querySelector("#date1")
var icon1 = document.querySelector("#icon1")
var temp1 = document.querySelector("#temp1")
var wind1 = document.querySelector("#wind1")
var humid1 = document.querySelector("#humid1")

var date2 = document.querySelector("#date2")
var icon2 = document.querySelector("#icon2")
var temp2 = document.querySelector("#temp2")
var wind2 = document.querySelector("#wind2")
var humid2 = document.querySelector("#humid2")

var date3 = document.querySelector("#date3")
var icon3 = document.querySelector("#icon3")
var temp3 = document.querySelector("#temp3")
var wind3 = document.querySelector("#wind3")
var humid3 = document.querySelector("#humid3")

var date4 = document.querySelector("#date4")
var icon4 = document.querySelector("#icon4")
var temp4 = document.querySelector("#temp4")
var wind4 = document.querySelector("#wind4")
var humid4 = document.querySelector("#humid4")

var date5 = document.querySelector("#date5")
var icon5 = document.querySelector("#icon5")
var temp5 = document.querySelector("#temp5")
var wind5 = document.querySelector("#wind5")
var humid5 = document.querySelector("#humid5")

var fInput = document.querySelector("#fInput")
var selectButton = document.querySelector("#selectButton")

// this function populates the searched city history list
function selectClick() {
    if (cityIndex < 12) {
    cityArray[cityIndex].textContent = fInput.value
    cityIndex++
    }
    else if (cityIndex >= 12) {cityIndex = 0}
    
    fetchClick()
}

// this fetches the coordinates of a searched city
function fetchClick() {
    fetch("https://blooming-lowlands-18463.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q="+fInput.value+"&limit=1&appid="+apiKey)
    .then(res => res.json())
    .then(data => aResults = data)
    .then(() => convertFetch())
  }

  // this converts the coordinates from the last function into a city name, and
  // calls the functions that display the weather information onscreen
function convertFetch() {
  lat = aResults[0].lat
  lon = aResults[0].lon
  
  fetch("https://blooming-lowlands-18463.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+apiKey+"&units=imperial")
    .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
        return response.json()
        })
    .then(function(data) {
        bResults = data
        console.log("bresults", bResults)
        displayData()
        displayPanelData()
    })
}

// current weather display
function displayData() {
      bCity.innerHTML = aResults[0].name + " right now is " + "<img src=http://openweathermap.org/img/wn/"+bResults.current.weather[0].icon+"@2x.png>"
      bTemp.textContent = "Temp: " + bResults.current.temp
      bWind.textContent = "Wind: " + bResults.current.wind_speed
      bHumid.textContent = "Humidity: " + bResults.current.humidity
      uvbg.textContent = bResults.current.uvi 
      if (bResults.current.uvi <= 2) {
      uvbg.style = "border-style: solid; background-color: lightgreen; color: blue;"
      }
      else if (bResults.current.uvi >= 3 && bResults.current.uvi <= 5) {
        uvbg.style = "border-style: solid; background-color: yellow; color: black;"
      }
      else if (bResults.current.uvi >= 6) {
        uvbg.style = "border-style: solid; background-color: orangered; color: white;"
      }
      console.log("hmm")
}

// displays forecast cards
function displayPanelData() {
  date1.textContent = moment().add(1, 'days').format("M"+"/"+"D")
  icon1.innerHTML = "<img src=http://openweathermap.org/img/wn/"+bResults.daily[0].weather[0].icon+"@2x.png>"
  temp1.textContent = "Temp: " + bResults.daily[0].temp.day
  wind1.textContent = "Wind: " + bResults.daily[0].wind_speed
  humid1.textContent = "Humidity: " + bResults.daily[0].humidity

  date2.textContent = moment().add(2, 'days').format("M"+"/"+"D")
  icon2.innerHTML = "<img src=http://openweathermap.org/img/wn/"+bResults.daily[1].weather[0].icon+"@2x.png>"
  temp2.textContent = "Temp: " + bResults.daily[1].temp.day
  wind2.textContent = "Wind: " + bResults.daily[1].wind_speed
  humid2.textContent = "Humidity: " + bResults.daily[1].humidity

  date3.textContent = moment().add(3, 'days').format("M"+"/"+"D")
  icon3.innerHTML = "<img src=http://openweathermap.org/img/wn/"+bResults.daily[2].weather[0].icon+"@2x.png>"
  temp3.textContent = "Temp: " + bResults.daily[2].temp.day
  wind3.textContent = "Wind: " + bResults.daily[2].wind_speed
  humid3.textContent = "Humidity: " + bResults.daily[2].humidity

  date4.textContent = moment().add(4, 'days').format("M"+"/"+"D")
  icon4.innerHTML = "<img src=http://openweathermap.org/img/wn/"+bResults.daily[3].weather[0].icon+"@2x.png>"
  temp4.textContent = "Temp: " + bResults.daily[3].temp.day
  wind4.textContent = "Wind: " + bResults.daily[3].wind_speed
  humid4.textContent = "Humidity: " + bResults.daily[3].humidity

  date5.textContent = moment().add(5, 'days').format("M"+"/"+"D")
  icon5.innerHTML = "<img src=http://openweathermap.org/img/wn/"+bResults.daily[4].weather[0].icon+"@2x.png>"
  temp5.textContent = "Temp: " + bResults.daily[4].temp.day
  wind5.textContent = "Wind: " + bResults.daily[4].wind_speed
  humid5.textContent = "Humidity: " + bResults.daily[4].humidity
}

// this is the clickability of the searched city history
function difCity(a) {
  fInput.value = a.path[0].innerText
  displayPanelData()
  fetchClick()
}

// event listeners and current date
displayNow.textContent = currentDate

selectButton.addEventListener("click", selectClick)
city1.addEventListener('click', difCity.bind(city1))
city2.addEventListener('click', difCity.bind(city2))
city3.addEventListener('click', difCity.bind(city3))
city4.addEventListener('click', difCity.bind(city4))
city5.addEventListener('click', difCity.bind(city5))
city6.addEventListener('click', difCity.bind(city6))
city7.addEventListener('click', difCity.bind(city7))
city8.addEventListener('click', difCity.bind(city8))
city9.addEventListener('click', difCity.bind(city9))
city10.addEventListener('click', difCity.bind(city10))
city11.addEventListener('click', difCity.bind(city11))
city12.addEventListener('click', difCity.bind(city12))