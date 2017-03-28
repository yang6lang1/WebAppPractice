define([
	"css!resources/main"
], function() {
	var createChart = function() {
		var chartContainer = document.createElement("div");
		chartContainer.className = "chartContainer";
		$("body").append($(chartContainer));

		var chartOption = {
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
	    };
		var chart = Highcharts.chart(chartContainer, chartOption);
		return chart;
	};

	return {
		createChart: createChart
	};
});