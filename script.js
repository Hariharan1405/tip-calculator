const billInput = document.getElementById('billInput');
const tipInput = document.getElementById('tipInput');
const noOfPeopleDiv = document.getElementById('noOfPeople');
const tipAmountDiv = document.getElementById('tipAmount');
const perPersonDiv = document.getElementById('perPerson');

let numberOfPeople = Number(noOfPeopleDiv.innerText);
// console.log(numberOfPeople)

const calculateBill = () => {
    let bill = Number(billInput.value);
    // console.log(bill);
    let tipPercentage = Number(tipInput.value) / 100;
    // console.log(tipPercentage)
    let tipAmount = tipPercentage * bill;
    tipAmountDiv.innerText = `₹${tipAmount.toFixed(2)}`;
    let totalBill = tipAmount + bill;
    let perPersonToal = totalBill / numberOfPeople;
    // console.log(perPersonToal)
    perPersonDiv.innerText = `₹${perPersonToal.toFixed(2)}`;
}

const increasePeople = () => {
    numberOfPeople += 1;
    // console.log(numberOfPeople);
    noOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
}

const decreasePeople = () => {
    if(numberOfPeople <=1){
        return
    }
    numberOfPeople -= 1;
    // console.log(numberOfPeople);
    noOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
}