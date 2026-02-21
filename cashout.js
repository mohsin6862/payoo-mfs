document.getElementById('withdraw-btn').addEventListener('click',function(){
    // get the agent number from input
    const agentNumber = getValueFromId('agent-number');
    console.log(agentNumber);
    if(agentNumber.length !== 11){
        alert('Please enter a valid agent number');
        return;
    }

    // get the amount from input 
    const CashoutAmount = getValueFromId("cashout-amount")
    console.log(CashoutAmount);

    // get pin from input
    const pin = getValueFromId('cashout-pin');
    console.log(pin);

    // get main balance 
    const currentBalance = getInnerTextFromId("balance");
    console.log(currentBalance);
    if(currentBalance<CashoutAmount){
        alert('Insufficient Balance');
        return;
    }
    // calculate the operation 
    const newBalance = currentBalance - CashoutAmount;
    console.log(newBalance);
    if(pin !== '1234'){
        alert(`your pin is incorrect 
            please enter a valid pin`);
            return;
    }
    else{
        alert('Cash Out Successful');
        document.getElementById('balance').innerText = newBalance;
    }

})