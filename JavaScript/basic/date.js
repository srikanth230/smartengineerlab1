window.onload = initAll;

function initAll() {
	var now = new Date();
	if(now.toLocaleDateString){
		
		var date=now.toLocaleDateString();
		var time=now.toLocaleTimeString();
		alert("It is: "+time+" on "+date);
		if(document.getElementById){
			document.getElementById("dateString").innerHTML="It is: "+time+" on "+date;
		}}
	else{
		alert("Your browser does not give a locale-specific date/time");
	}

	
	
}
