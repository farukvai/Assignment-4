//ticketCount
function ticketCount(ticket, isIncrease) {
    const currentInput = document.getElementById(ticket + '-count');
    const currentCount = parseInt(currentInput.value);

    let newCount = currentCount;
    if (isIncrease == true) {
        newCount = currentCount + 1;
    }
    if (isIncrease == false && newCount > 0) {
        newCount = currentCount - 1;
    }

    currentInput.value = newCount;
    ticketCalculation()
}

//Ticket Calculation
function ticketCalculation() {
    const firstClassPrice = getValue('firstClass');
    const economyPrice = getValue('economy');

    //subTotal
    const subTotalTicketCost = firstClassPrice * 150 + economyPrice * 100;
    document.getElementById('sub-total-price').innerText = '$' + subTotalTicketCost;

    //Tax
    const tax = Math.round(subTotalTicketCost * 0.1);
    document.getElementById('tax').innerText = '$' + tax;

    //Total
    const totalCost = subTotalTicketCost + tax;
    document.getElementById('total-cost').innerText = totalCost;
}

//Get ticket Value
function getValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


//Book Now 
document.getElementById('book-now').addEventListener('click', function () {
    var totalCost = document.getElementById('total-cost').innerText;
    alert("Total Cost is: " + totalCost);
})