define(function() {
	var createChart = function(option) {
		var chart = Highcharts.chart(option.chartContainer, option.chartOption);
		return chart;
	};

	return {
		createChart: createChart
	};
});