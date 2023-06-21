
let btn = document.querySelector("#submit");
let para = document.querySelector(".copyText");

btn.addEventListener("click", (event)=>{
    event.preventDefault();
    let inputvalue = document.querySelector("#text-converter").value;
    let dash = inputvalue.replace(/[\s.,_]+/g, '-').toLowerCase();
    para.innerHTML = dash;
});

// this is another division ==========================

let btnCopy = document.querySelector("#copy");
let notifyCopy = document.querySelector(".copyPopup"); //This is the notification from html
let sampleBtn = document.querySelector(".sample")

btnCopy.addEventListener("click", (event)=>{
    event.preventDefault();

    let selectedText = window.getSelection().toString();
    let copyText = selectedText || para.textContent;

    navigator.clipboard.writeText(copyText);
    notifyCopy.classList.add('copyPopupAdd');

    sampleBtn.innerHTML = copyText; // This is for copying the variable copyTex

    setTimeout(function(){
        notifyCopy.classList.remove('copyPopupAdd');
    }, 2000);
});

