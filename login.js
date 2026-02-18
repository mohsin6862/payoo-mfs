document.getElementById('login-btn').addEventListener('click',function(){
    // get the mobile number from user input field 
    const inputNumber = document.getElementById('input-number');
    const mobileNumber = inputNumber.value;
    console.log(mobileNumber);

    // get the pin number from user input field
    const inputPin = document.getElementById('input-pin');
    const mobilePin = inputPin.value;
    console.log(mobilePin);

    // verify mobile number 
    if(mobileNumber === '01993592250' && mobilePin ==='1234'){
        alert("login Successfully!")
        window.location.assign("./home.html")
    }
    else{
        alert('login Failed Try again!')
    }
    
})