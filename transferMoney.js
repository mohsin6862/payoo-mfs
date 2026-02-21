document.getElementById('send-now-btn').addEventListener('click',function(){
    // get the agent number from input
    const transferNumber = getValueFromId('transfer-number');
    if(transferNumber.length !== 11){
        alert('Please enter a valid number to transfer money');
        return;
    }

    // get the amount from input 
    const transferAmount = getValueFromId("transfer-amount")
    console.log(transferAmount);

    // get pin from input
    const pin = getValueFromId('transfer-pin');
   

    // get main balance 
    const currentBalance = getInnerTextFromId("balance");
    if(currentBalance<transferAmount){
        alert('Insufficient Balance');
        return;
    }
    // calculate the operation 
    const newBalance = currentBalance - transferAmount;
    console.log(newBalance);

    // add transaction history
      const history = document.getElementById('history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML =`
    <div  class="bg-base-200 my-5 p-4">
        Transfer money success ${transferAmount} Taka to ${transferNumber} number, at ${new Date()}
         </div>
    `

    history.appendChild(newHistory);
    // verification
    if(pin !== '1234'){
        alert(`your pin is incorrect 
            please enter a valid pin`);
            return;
    }
    else{
        alert('Transfer Money Successful');
        document.getElementById('balance').innerText = newBalance;
    }

})