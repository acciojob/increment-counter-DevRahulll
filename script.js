//your JS code here. If required.
let counter=document.getElementById("counter");
let btn=document.getElementById("incrementBtn");
let val=0;
function increment(){
	alert(val)
	val=val+1;
}

btn.addEventListener("click",increment);