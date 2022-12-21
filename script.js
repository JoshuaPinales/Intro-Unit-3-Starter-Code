function Start(){
		document.getElementById("part1").classList.add("scale-in");
}

 function Gather(){
	document.getElementById("part2").classList.add("scale-in");
	document.getElementById("Explore_btn").classList.add("disabled");
	document.getElementById("part3").style.display="none";
}

function Explore(){
	document.getElementById("part3").classList.add("scale-in");
	document.getElementById("Gather_btn").classList.add("disabled");
	document.getElementById("part2").style.display="none";
}

function Build(){
	document.getElementById("win1").classList.add("scale-in");
	document.getElementById("Face_btn").classList.add("disabled");
	document.getElementById("lose1").style.display="none";
	document.getElementById("win2").style.display="none";
	document.getElementById("lose2").style.display="none";
}
function Face(){
	document.getElementById("lose1").classList.add("scale-in");
	document.getElementById("Build_btn").classList.add("disabled");
	document.getElementById("win1").style.display="none";
	document.getElementById("win2").style.display="none";
	document.getElementById("lose2").style.display="none";
}

function Visit(){
	document.getElementById("win2").classList.add("scale-in");
	document.getElementById("Leave_btn").classList.add("disabled");
	document.getElementById("lose2").style.display="none";
	document.getElementById("win1").style.display="none";
	document.getElementById("lose1").style.display="none";
}

function Leave(){
	document.getElementById("lose2").classList.add("scale-in");
	document.getElementById("Visit_btn").classList.add("disabled");
	document.getElementById("win2").style.display="none";
}

