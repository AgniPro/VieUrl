"use strict";
const wrapper = document.querySelector('.site-wrapper');const burger = document.querySelector('nav .burger');
burger.addEventListener('click', () => { wrapper.classList.remove('no-animation'); document.body.classList.toggle('mobile-open'); });
const questions = document.querySelectorAll(".faq-question");      
questions.forEach((question) => {question.addEventListener("click", function () { let answer = question.nextElementSibling; if (answer.style.display === "block") { hideAnswer(question); } else { questions.forEach((question) => { hideAnswer(question);}); displayAnswer(question);}});});
function displayAnswer(target) { let answer = target.nextElementSibling; let arrowIcon = target.firstElementChild; answer.style.display = "block"; arrowIcon.style.transform = "rotate(180deg)"; target.style.fontWeight = "700";}
function hideAnswer(target) {let answer = target.nextElementSibling;let arrowIcon = target.firstElementChild; answer.style.display = "none";  arrowIcon.style.transform = "rotate(0deg)"; target.style.fontWeight = "400"; }
let deferredPrompt;window.addEventListener('beforeinstallprompt', (e) => {deferredPrompt = e;});
const installApp = document.getElementById('installApp');installApp.addEventListener('click', async () => { if (deferredPrompt !== null) { deferredPrompt.prompt(); const { outcome } = await deferredPrompt.userChoice; if (outcome === 'accepted') { deferredPrompt = null;} } });
let ipt;window.addEventListener('beforeinstallprompt', (e) => {deferredPrompt = e;});
const instApp = document.getElementById('instApp'); instApp.addEventListener('click', async () => { if (deferredPrompt !== null) { deferredPrompt.prompt(); const { outcome } = await deferredPrompt.userChoice; if (outcome === 'accepted') { deferredPrompt = null;  } }});
document.addEventListener("contextmenu", (e) => { e.preventDefault(); });

function myFunction() {
    document.querySelector("#dframe").setAttribute("src","https://download.ytmp3.su/api/widgetv2?key=a0d0d2393d1b413e32a5fc26b0065492c4634b87&url=" + document.getElementById("myText").value);
    document.querySelector("#dframe").classList.add("rfr");}
document.getElementById("pasteBtn").addEventListener("click", function (a) { a = document.getElementById("pasteBtn"); var b = document.getElementById("myText"); "Clear" === a.innerHTML ? (b.value = "", a.innerHTML = "Paste from clipboard") : navigator.clipboard.readText().then(function (d) { return b.value = d }, a.innerHTML = "Clear") });
