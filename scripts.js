
function fetchData(){
	var place = document.getElementById("address").value;
	var jsonObj = "api.openweathermap.org/data/2.5/weather?q=" + place + ",uk&APPID=006a0d5b8cea5b0e8f840ad2dbc0ebe6";
	$.get(jsonObj);
	console.log(jsonObj);
	
}

