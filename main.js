function getAPIdata() {
	
	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="6ab3daca9eb513d88009bf52e94de485";
	var city = "Hawthorne, US";
	
	// construct request
	var request = url + "?"	+ "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onAPISucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	
	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15).toFixed(1);
	
	var stad = response. name;
	
	var wind = response. wind. speed.toFixed(1);
	
	var weather = response. main. humidity;
	
	// render weather in DOM
	var weatherBox = document.getElementById('city');
	weatherBox.innerHTML = stad;
	var weatherBox = document.getElementById('celsius');
	weatherBox.innerHTML = degC + "&#176;C <br>";
	var weatherBox = document.getElementById('wind');
	weatherBox.innerHTML = 	wind *3.6  + ' k/m';
	var weatherBox = document.getElementById('direction');
	weatherBox.innerHTML = weather + '%' ;
}

// init data stream
getAPIdata();

var url = 'https://newsapi.org/v2/top-headlines?' +
'country=US&' +
'apiKey=57c36e69915945fab07c7252546ade18';
var req = new Request(url);
fetch(req)
.then(function(response) {
	return response.json();
}).then(function(data) {
	var articles = data.articles.slice(0, 3);
	
	console.log(articles);
	
	var results = document.getElementById('results');
	
	for (var i = 0; i < articles.length; i++) {
		results.innerHTML += '<div class="title">' + articles[i].title + '</div>' + articles[i].description  + '<br><br>' ;
	}
	
})