// get elements
const MAX_CUSTOM_INPUT = 99

const billInput = document.getElementById("billInput")
const customInput = document.getElementById("customInput")
const tipSelectButton = document.querySelectorAll(".selectAmount")
const peopleInput = document.getElementById("peopleInput")
const personTotal = document.querySelector(".person")
const overallTotal = document.querySelector(".total")
const resetButton = document.querySelector(".reset-btn")
const errorMessage = document.querySelector(".error-message")


// function to calculate tip
function calculateTip(selectedTipPercentage, billAmount, peopleCount) {
    const tipAmount = parseInt(selectedTipPercentage)

    if (!isNaN(tipAmount) && billAmount > 0 && peopleCount > 0 && tipAmount <= MAX_CUSTOM_INPUT) {
        const tipPercentage = tipAmount / 100
        const tipAmountPerson = (billAmount * tipPercentage) / peopleCount
        const tipAmountTotal = (billAmount / peopleCount) + tipAmountPerson

        return {tipAmountPerson, tipAmountTotal}
    }

    return { tipAmountPerson: 0, tipAmountTotal:0 }
}

// handle the custom input
customInput.addEventListener("input", () => {
    const customInputValue = parseInt(customInput.value)

     if (!isNaN(customInputValue) && customInputValue <= MAX_CUSTOM_INPUT) {
        const {tipAmountPerson, tipAmountTotal} = calculateTip(customInputValue, billInput.value, parseInt(peopleInput.value))

        personTotal.innerText = "$" + tipAmountPerson.toFixed(2)
        overallTotal.innerText = "$" + tipAmountTotal.toFixed(2)
    }
    
})


// handle the tip select button input
tipSelectButton.forEach(input => {
    input.addEventListener("click", () => {
        const {tipAmountPerson, tipAmountTotal} = calculateTip(input.textContent, billInput.value, parseInt(peopleInput.value))

        personTotal.innerText = "$" + tipAmountPerson.toFixed(2)
        overallTotal.innerText = "$" + tipAmountTotal.toFixed(2)
    })
})


// Check peopleInput on input change and toggle error message visibility
peopleInput.addEventListener("input", () => {
    const peopleInputValue = parseInt(peopleInput.value);

    if (peopleInputValue === 0) {
        errorMessage.style.visibility = "visible"
        peopleInput.style.outlineColor = "#ee5353"
    } else {        
        errorMessage.style.visibility = "hidden"
        peopleInput.style.outlineColor = "transparent"
    }
})


// reset everything 
resetButton.addEventListener("click", () => {
    customInput.value = ""
    billInput.value = ""
    peopleInput.value = ""
    personTotal.innerText = "$0.00"
    overallTotal.innerText = "$0.00"
})