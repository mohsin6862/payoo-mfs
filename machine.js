function getValueFromId(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function getInnerTextFromId(id){
    const input = document.getElementById(id);
    const text = input.innerText;
    return Number(text);
}

// show the form you want to interact 

function showOnly(id){
    const addMoney = document.getElementById('add-money-section');
    const cashout = document.getElementById('cashout-section');
    const history = document.getElementById('history')
    const transferMoney = document.getElementById('transfer-money-section');
    console.log(addMoney);
    console.log(cashout);
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');
    transferMoney.classList.add('hidden');
    const selected = document.getElementById(id);
    console.log(selected);
    selected.classList.remove('hidden');
}