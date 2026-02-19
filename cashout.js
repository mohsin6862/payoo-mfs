document.getElementById('withdraw-btn').addEventListener('click',function(){
    // get the agent number from user 
    const getAgentNumber = document.getElementById('agent-number');
    const agentNumber =getAgentNumber.value;
    console.log(agentNumber)
    if(agentNumber.length > 11 || agentNumber.length <11){
        alert(`This agent number is invalid
               please entered a valid agent number`);
               return;
    }


    //    get cashout amount from user 
    const getCashoutAmount = document.getElementById('cashout-amount');
    const cashoutAmount = getCashoutAmount.value;
    console.log(cashoutAmount);


    // get pin number from user input 
    const getCashoutPin = document.getElementById('cashout-pin');
    const cashoutPin = getCashoutPin.value;
    console.log(cashoutPin)
   

    // get main balance from account
    const getMainBalance = document.getElementById('balance');
    const mainBalance = getMainBalance.innerText;
    console.log(mainBalance);

    // validation
    if (cashoutAmount > mainBalance) {
        alert(`Insufficient balance`);
        return;
    }
    
    // calculate the amount after cashout 
    const newAmount =Number(mainBalance) - cashoutAmount;

    
 if(cashoutPin !== '1234'){
        alert(`Password incorrect 
            Please entered a valid password or reset password please`);
    }
    else{
        getMainBalance.innerText = newAmount;
        alert(`Cashout successful`)
        console.log(newAmount);
    }
    // update the main balance 
})