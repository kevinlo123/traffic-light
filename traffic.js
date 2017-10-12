/****************************************
***** MAIN ON PAGE LOAD FUNCTION*********/

document.addEventListener("DOMContentLoaded", function() {
  let redLight = document.getElementById("red");/***VARIABLE STORING DOM ELEMENT***/
  let yellowLight = document.getElementById("yellow");/***VARIABLE STORING DOM ELEMENT***/
  let greenLight = document.getElementById("green");/***VARIABLE STORING DOM ELEMENT***/
  let goText = document.getElementById("goText");/***VARIABLE STORING DOM ELEMENT***/
  let cautionText = document.getElementById("cautionText");/***VARIABLE STORING DOM ELEMENT***/
  let stopText = document.getElementById("stopText");/***VARIABLE STORING DOM ELEMENT***/

  /********************************************************************
   SET TIME OUT METHOD FOR MANIPULATING WHEN THE LIGHTS WILL TURN ON***/

   setTimeout(function(){ 
    greenLight.style.display = "block";
    greenLight.style.marginTop = "140" + "px";
    goText.style.display = "block";
  }, 500); 
  setTimeout(function(){ 
    greenLight.style.display = "none";
    goText.style.display = "none";
  }, 2500); 
  setTimeout(function(){
    yellowLight.style.display = "block";
    yellowLight.style.marginTop = "70" + "px";
    cautionText.style.display = "block";
  }, 3000);
    setTimeout(function(){
    yellowLight.style.display = "none";
    cautionText.style.display = "none";    
  }, 5500);
    setTimeout(function(){
    redLight.style.display = "block";
    stopText.style.display = "block";
  }, 6000);
    setTimeout(function(){
    redLight.style.display = "none";
    stopText.style.display = "none";
  }, 9000);
});