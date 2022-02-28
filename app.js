/*
* File: index.ht
* Author: Megyeri Márk Máté
* Copyright: 2022, Megyeri Márk Máté
* Group: Szoft I/N
* Date: 2022-02-28
* Github: https://github.com/megyerimark
* Licenc: GNU GPL
*/


var oldalIn=document.getElementById("oldal");
var alfaIn =document.getElementById("oldal");
var szamitgomb =document.getElementById("szamitgomb");
var eredmenyIn= document.getElementById("eredmeny");


szamitgomb.addEventListener("click", function(){
  let oldal =oldalIn.value
  let alfa =alfaIn.value
  let sugar =1/2*oldal*Math.sin(alfa);
  console.log(sugar.toLocaleString());
  eredmenyIn.value= (sugar.toLocaleString());

});