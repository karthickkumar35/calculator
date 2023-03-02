let form = document.querySelector("form");
let in1 = document.getElementById("in1");
let in2 = document.getElementById("in2");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let power = document.getElementById("power");
let module = document.getElementById("module");
let result = document.getElementById("result");

form.addEventListener("submit",calculation);

function calculation(e){
	e.preventDefault();
	
}
add.addEventListener("click",adding);

function adding(){
	result.innerHTML=Number(in1.value)+Number(in2.value);
}

sub.addEventListener("click",subtracting);

function subtracting(){
	result.innerHTML=Number(in1.value)-Number(in2.value);
}

mul.addEventListener("click",multiple);

function multiple(){
	result.innerHTML=Number(in1.value)*Number(in2.value);
}

div.addEventListener("click",dividing);

function dividing(){
	result.innerHTML=Number(in1.value)/Number(in2.value);
}

power.addEventListener("click",powered);

function powered(){
	result.innerHTML=Number(in1.value)**Number(in2.value);
}

module.addEventListener("click",moduler);

function moduler(){
	result.innerHTML=Number(in1.value)%Number(in2.value);
}


