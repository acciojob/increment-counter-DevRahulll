//your JS code here. If required.
let counter=document.getElementById("counter-val");
let btn=document.getElementById("submit");
let val=0;
function increment(){
	alert(val)
	val=val+1;
}

btn.addEventListener("click",increment);