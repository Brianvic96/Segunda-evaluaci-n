//aquí debes trabajar con datos de un JSON

d3.json("https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-20&end_date=2018-04-20&api_key=q0401pdWl8BPiOQtCChIwcIZvhSN6nJ1YXbLjTp9").then(function(data) {
var distancia = d3.values(data.near_earth_objects);
    
    
var w = 450;
var h = 450;
d3.select(".dataviz-segunda")
	.append("svg")
	.attr("width", w)
	.attr("height", h)
	.style("background","#FFFFFF");

    
    
    
})