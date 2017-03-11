define([
	"require",
	"jquery",
	"app/viz/vizFactory",
	"css!resources/main"
], function(
	require,
	$,
	vizFactory
) {
	var chartContainer = $("<div>", {"class" : "chartContainer"});
	$("body").append(chartContainer);

	var option = {
		chartContainer: chartContainer[0],
		chartOption: {
	        chart: {
	            type: 'bar'
	        },
	        title: {
	            text: 'Fruit Consumption'
	        },
	        xAxis: {
	            categories: ['Apples', 'Bananas', 'Oranges']
	        },
	        yAxis: {
	            title: {
	                text: 'Fruit eaten'
	            }
	        },
	        series: [{
	            name: 'Jane',
	            data: [1, 0, 4]
	        }, {
	            name: 'John',
	            data: [5, 7, 3]
	        }]
	    }
	};
	var chart = vizFactory.createChart(option);
});