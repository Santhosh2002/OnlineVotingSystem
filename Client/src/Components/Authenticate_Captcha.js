import React from 'react';

const Authenticate_Captcha = () => {

    let captchaText = document.querySelector('#myCanvas');
    var ctx = captchaText.getContext("2d");
    ctx.font = "45px Roboto";
    ctx.fillStyle = "#000";

    let userText = document.querySelector('#Captcha');
    let Voter = document.querySelector('#Voter');
    let submitButton = document.querySelector('#Login');
    let refreshButton = document.querySelector('#refresh');
    let popupIn = document.getElementById("A1");
    let popupInv = document.getElementById("A4");
    let popupWar = document.getElementById("A3");
    // alphaNums contains the characters with which you want to create the CAPTCHA
    let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'
        , 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c'
        , 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let emptyArr = [];
    // This loop generates a random string of 7 characters using alphaNums
    // Further this string is displayed as a CAPTCHA
    for (let i = 1; i <= 7; i++) {
        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    var c = emptyArr.join('');
    ctx.fillText(emptyArr.join(''), captchaText.width / 4, captchaText.height / 2);

    userText.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            login();
           
        }
    });

    submitButton.addEventListener('click', function () {
        login();
            
    });

    refreshButton.addEventListener('click', function () {
        userText.value = "";
        let refreshArr = [];
        refresh(refreshArr);
    });
    function refresh(refreshArr) {
        for (let j = 1; j <= 7; j++) {
            refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        }
        ctx.clearRect(0, 0, captchaText.width, captchaText.height);
        c = refreshArr.join('');
        ctx.fillText(refreshArr.join(''), captchaText.width / 4, captchaText.height / 2);
    }
    function login() {
        if (userText.value === c && Voter.value === "712979984763") {

            setTimeout(() => {

            }, 2000);
           

        }
        else if (userText.value === "" || Voter.value === "") {
            popupInv.classList.add("open-Alert");
            setTimeout(() => {
                popupInv.classList.remove("open-Alert");
            }, 2000);
        }
        else if (userText.value !== c && Voter.value === "712979984763") {
            popupWar.classList.add("open-Alert");
            setTimeout(() => {
                popupWar.classList.remove("open-Alert");
            }, 2000);
            let refreshArr = [];
            refresh(refreshArr);
        }
        else {
            popupIn.classList.add("open-Alert");
            setTimeout(() => {
                popupIn.classList.remove("open-Alert");
            }, 2000);
            let refreshArr = [];
            refresh(refreshArr, c, ctx);
        }
    }
}
export default Authenticate_Captcha; 