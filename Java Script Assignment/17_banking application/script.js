const customerAcc = {
    name : "Xavier",
    balance : 500
}

// Customer can deposite money 
function deposit(amount){
    customerAcc.balance += amount
    console.log(`Successfully deposited $${amount}. New balance is ${customerAcc.balance}.`)
}

// Customer can width Draw money if money is more than or equal main balance 
function withDraw(amount){
    if(customerAcc.balance >= amount){
        customerAcc.balance -= amount
        console.log(`Successfully widthdrew $${amount}. New balance is ${customerAcc.balance}.`)
    }
    else{
        console.log(`Insufficient funds. Current balance is ${customerAcc.balance}.`)
    }
}

deposit(500)
withDraw(1000)