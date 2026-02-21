document.getElementById('add-money-btn').addEventListener('click',function(){
    // get the bank 
    const bank = getValueFromId('selected-bank');
    console.log(bank);
    if(bank === 'Select Your Bank'){
        alert('please select a bank');
        return;
    }

    // get the bank account number
    const bankAcNo = getValueFromId('bank-ac-number');
    console.log(bankAcNo)
    if(bankAcNo.length !== 11){
        alert('Please Provide a valid Ac/no');
        return;
    }

    // get the amount to add 
    const amountToAdd = getValueFromId('add-amount')
    console.log(amountToAdd);
    if(amountToAdd<50){
        alert('You Have to add minimum amount 50 or above');
        return;
    }

    // get the current balance
    const currentBalance = getInnerTextFromId("balance");

    // calculate the add money
    const newBalance = Number(currentBalance) + Number(amountToAdd);

    // get the pin for verify 
    const pin = getValueFromId('add-money-pin');
    if(pin!=='1234'){
        alert('Invalid Pin');
        return;
    }
    else{
        alert('Add Money Successful');
        document.getElementById('balance').innerText=newBalance;
    }
    console.log(pin)
})