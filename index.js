const otpEl = document.getElementById('otp');
const btnEl = document.getElementById('btn');


btnEl.addEventListener("click",generateOTP);

function generateOTP(){
    var digits = '0123456789';
    let OTP = '';
    for(let i = 0; i < 6; i++){
        OTP = OTP + digits[Math.floor(Math.random() * 10)];
    }
    otpEl.innerText = OTP;
}




