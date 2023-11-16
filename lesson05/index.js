let balance = 1000;


function withdraw() {
    let withdraw = prompt("How much would you like to withdraw?");
    let withdrawAmount = Number(withdraw);
    if (withdrawAmount > balance) {
        alert("Insufficient funds.");
    } else if (balance - withdrawAmount < 300) {
        let input = prompt("Your balance is below $300. Are you sure you want to continue? Y/N");
        if (input === 'y') {
            let userBalance = balance - withdrawAmount;
            alert("Your new balance is " + userBalance);
            balance = userBalance;
        } else {
            alert("Main menu");
        } 
    } else if (withdrawAmount < 0) {
        alert("You cannot withdraw a negative amount.");
    } else {
        let userBalance = balance - withdrawAmount;
        alert("Your new balance is " + userBalance);
        balance = userBalance;
    }
}

function deposit() {
    let deposit = prompt("How much would you like to deposit?");
    let depositAmount = Number(deposit);
    if (depositAmount > 50000) {
        alert("You cannot deposit more than $50,000 at a time.");
    } else if (depositAmount < 0) {
        alert("You cannot deposit a negative amount.");
    }
    else {
        let userBalance = balance + depositAmount;
        alert("Your new balance is " + userBalance);
        balance = userBalance;
    }
}


function userInput() {

    while (true) {
    let input = prompt("Enter an action: q to Quit, w to Withdraw, d to Deposit, b to View Balance");
    if (input === 'q') {
        alert("Thank you for banking with us.");
        break;
    } else if (input === 'w') {
        withdraw();
    } else if (input === 'd') {
        deposit();
    } else if (input === 'b') {
        alert("Your balance is " + balance);
    } else {
        alert("Invalid input.");
    }
    }
}
