const convertBtn = document.getElementById("convert")
const lengthEl = document.getElementById("len-el")
const volumeEl = document.getElementById("vol-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)

    let feet = (baseValue * meterToFeet).toFixed(3)
    let meters = (baseValue / meterToFeet).toFixed(3)

    lengthEl.textContent = `${baseValue} meters = ${feet} feet | ${baseValue} feet = ${meters} meters`

    let liters = (baseValue * literToGallon).toFixed(3)
    let gallons = (baseValue / literToGallon).toFixed(3)


    volumeEl.textContent = `${baseValue} liters = ${gallons} gallons | ${baseValue} gallons = ${liters} liters`
    

    let kilo = (baseValue * kiloToPound).toFixed(3)
    let pound = (baseValue / kiloToPound).toFixed(3)
  
    massEl.textContent = `${baseValue} kilo = ${pound} pound | ${baseValue} pound = ${kilo} kilo`


})
