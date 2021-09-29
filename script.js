let income = document.querySelector("#income");
let partner = document.querySelector("#partner");
let expenditures = document.querySelector("#expenditure");
const submit = document.querySelector("#submit");
const clear = document.querySelector("#clear");
const results = document.querySelector(".results");
const rescont = document.querySelector(".rescont");
const inputField = document.querySelector(".inputField");
const returnBtn = document.querySelector("#return");
let displaying = false;

clear.addEventListener("click", () => {
    income.value = "";
    partner.value = "";
    expenditures.value = "";
})

submit.addEventListener("click", () => {

    calc();

});

const calc = () => {
    const yourIncome = eval(income.value);
    const partnerIncome = eval(partner.value);
    const expenses = eval(expenditures.value);

    const total = parseInt(yourIncome) + parseInt(partnerIncome);

    const yourCut = (parseInt(yourIncome) / parseInt(total)) * parseInt(expenses);
    const partnerCut = parseInt(partnerIncome) / parseInt(total) * parseInt(expenses);
    showResults();
    const message = document.createElement("p");

    message.textContent = `You pay: ${yourCut} \n Your partner pays:${partnerCut}`;

    rescont.appendChild(message);


    console.log(yourCut, partnerCut);
}

const showResults = () => {
    if (displaying == false) {
        results.style.display = "block";
        inputField.style.display = "none";
        displaying = true;
    }
    else {
        inputField.style.display = "block";
        results.style.display = "none";
        displaying = false;
    }

}

returnBtn.addEventListener("click", () => {
    showResults()
})