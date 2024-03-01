export default {

	myFun1 () {

		return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Loaded Page</title>
		<!-- Include echarts library using a script tag -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.2.2/echarts.min.js"></script>
		</head>
		<body>
		<!-- Add an element for the chart -->
		<div id="main" style="width: 600px; height: 400px;"></div>
		<script>
		let chartDom = document.getElementById('main');
		let myChart = echarts.init(chartDom);
		let option;
		option = ${chart_data_process.funcChart()};
		option && myChart.setOption(option);
		</script>
		</body>
		</html>`
		
	}
}