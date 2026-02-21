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