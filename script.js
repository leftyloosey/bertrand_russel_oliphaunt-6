var apiKey = "8f14f498b80df53efe91f44dcb494851"

cityArray = [
city1 = document.querySelector("#city1"),
city2 = document.querySelector("#city2"),
city3 = document.querySelector("#city3"),
city4 = document.querySelector("#city4"),
city5 = document.querySelector("#city5"),
city6 = document.querySelector("#city6"),
city7 = document.querySelector("#city7"),
city8 = document.querySelector("#city8"),
city9 = document.querySelector("#city9"),
city10 = document.querySelector("#city10"),
city11 = document.querySelector("#city11"),
city12 = document.querySelector("#city12"),
]

bCity = document.querySelector("#bCity")
bTemp = document.querySelector("#bTemp")
bWind = document.querySelector("#bWind")
bHumid = document.querySelector("#bHumid")
bUV = document.querySelector("#bUV")

date1 = document.querySelector("#date1")
icon1 = document.querySelector("#ion1")
temp1 = document.querySelector("#temp1")
wind1 = document.querySelector("#wind1")
humid1 = document.querySelector("#humid1")

fInput = document.querySelector("#fInput")
selectButton = document.querySelector("#selectButton")

selectButton.addEventListener("click", selectClick)

cityIndex = 0

function selectClick() {
  
    if (cityIndex < 12) {
    cityArray[cityIndex].textContent = fInput.value
    cityIndex++
    }
    else if (cityIndex >= 12) {cityIndex = 0}
}