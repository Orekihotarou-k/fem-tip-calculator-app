// get elements and assign them as constants
const selectAmount = document.querySelectorAll(".selectAmount")
const billInput = document.getElementById("billInput")
const peopleInput = document.getElementById("peopleInput")
const customInput = document.getElementById("customInput")
const personTotal = document.querySelector(".person")
const overallTotal = document.querySelector(".total")
const resetBtn = document.querySelector(".reset-btn")

function calculateTip( inputValue, billAmount, peopleCount) {
    const inputNumber = parseFloat(inputValue)

    if (!isNaN(inputNumber) && peopleCount > 0 && billAmount > 0) {
        const inputPercentage = inputNumber / 100
        const tipAmountPerson = (billAmount * inputPercentage) / peopleCount
        const tipAmountTotal = (billAmount / peopleCount) + tipAmountPerson
        return  {tipAmountPerson, tipAmountTotal}
    }

    return { tipAmountPerson: 0, tipAmountTotal: 0}
}

selectAmount.forEach(input => {
    input.addEventListener("click", () => {
        const { tipAmountPerson, tipAmountTotal } = calculateTip( input.textContent, billInput.value, parseInt(peopleInput.value ))
            personTotal.innerText = "$" + tipAmountPerson.toFixed(2)
            overallTotal.innerText = "$" + tipAmountTotal.toFixed(2)
    })
})




// reset the calculator
resetBtn.addEventListener("click", () => {
    peopleInput.value = ""
    billInput.value = ""
    personTotal.innerText = "$0.00"
    overallTotal.innerText = "$0.00"
})






// selectAmount.forEach(input => {
//     input.addEventListener("click", () => {
//         // convert input value to percentage
//         const inputNumber = parseFloat(input.textContent)

//         // check if the number is valid
//         if (!isNaN(inputNumber)) {
//             const inputPercentage = (inputNumber / 100).toFixed(2)
            
//             // get the billinput
//             peopleInputNumber = parseInt(peopleInput.value)
//             billInputAmount = parseFloat(billInput.value)
//             tipAmountPerson = billInputAmount * inputPercentage / peopleInputNumber
//             tipAmountTotal = billInputAmount / peopleInputNumber + tipAmountPerson

//             // change the value of the person total 
//             personTotal.innerText = "$" + tipAmountPerson.toFixed(2)
//             overallTotal.innerText = "$" + tipAmountTotal.toFixed(2)
//         }

//     })
// })


