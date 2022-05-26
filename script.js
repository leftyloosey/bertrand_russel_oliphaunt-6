var apiKey = "8f14f498b80df53efe91f44dcb494851"
var lon
var lat

var aResults 
var bResults

var cityIndex = 0


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

var bCity = document.querySelector("#bCity")
var bTemp = document.querySelector("#bTemp")
var bWind = document.querySelector("#bWind")
var bHumid = document.querySelector("#bHumid")
var bUV = document.querySelector("#bUV")

var date1 = document.querySelector("#date1")
var icon1 = document.querySelector("#ion1")
var temp1 = document.querySelector("#temp1")
var wind1 = document.querySelector("#wind1")
var humid1 = document.querySelector("#humid1")

var fInput = document.querySelector("#fInput")
var selectButton = document.querySelector("#selectButton")





function selectClick() {
    if (cityIndex < 12) {
    cityArray[cityIndex].textContent = fInput.value
    cityIndex++
    }
    else if (cityIndex >= 12) {cityIndex = 0}



    fetchClick()
   

  }

function fetchClick() {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+fInput.value+"&limit=1&appid="+apiKey)
    .then(res => res.json())
    .then(data => aResults = data)
    .then(() => convertFetch()
    )
    // .then(function (response) {
    //     if (!response.ok) {
    //       throw response.json();
    //     }
    //     return response.json()
    //     })
    // .then(function(data) {
    //    console.log("first data", data)
  
    // })
    // .then(function(data) {
    //   aResults = data
    //   console.log("aresults", aResults)
    //   convertFetch()
    // })

  }

function convertFetch() {
  lat = aResults[0].lat
  lon = aResults[0].lon
  
  fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKey+"&units=imperial")
    .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
        return response.json()
        })
    .then(function(data) {
        bResults = data
        console.log("bresults",bResults)
        displayData()
    })
   
    
}

function displayData() {
    // for (let i = 0; i <= 12; i++) {
      bCity.textContent = aResults[0].name
      bTemp.textContent = "Temp: " + bResults.main.temp
      console.log("hmm")
    // }
}

selectButton.addEventListener("click", selectClick)
