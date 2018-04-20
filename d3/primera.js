//Datos rescatados de https://en.wikipedia.org/wiki/List_of_asteroid_close_approaches_to_Earth

var w = 450;
var h = 450;

d3.select(".dataviz-primera")
	.append("svg")
	.attr("width", w)
	.attr("height", h)
	.style("background","#EEEEEE");

 var asteroides = [
    {name:'1795m en 1918',size:1795},
    {name:'900m en 1914',size:900},
    {name:'393m en 1971',size:393},
    {name:'358m en 1982',size:358}
  ];
  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(asteroides)
    .attr('fill','#000')
    .attr('r', function(d) {
      return d.size/50;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(asteroides)
    .attr('fill','#000000')                      
    .text(function(d) {
      return ". " + d.name;
    });