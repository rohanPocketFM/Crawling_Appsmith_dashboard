export default {
	funcChart(){
		let BookData = FindQuery.data[Table1.triggeredRowIndex]
		console.log(BookData.title)
		let timeseries = BookData.timeSeries.reverse()
		let minView = Infinity
		let maxView = 0
		let processedData = timeseries.map(e=>{
			minView = e.views < minView ? e.views: minView
			maxView = e.views > maxView ? e.views: maxView
			return [e.crawlDate,e.views]
		})
		if (maxView==minView){maxView+=100000; minView-=100000}
		console.log(processedData)
		let normaliser
		if ((maxView - minView) /100000 > 1){
			normaliser = 10000
		}
		else{
			normaliser = 1000
		}
		// console.log('minView=',minView,'Maxview=',maxView)
		let l = Math.floor((minView - (maxView - minView)*0.15)/normaliser) * normaliser
		let r = Math.floor((maxView + (maxView - minView)*0.15)/normaliser) * normaliser
		console.log('l ',l,' r ',r)
		let options = 
				{
					title: {
						text: BookData.title,
						left: 'center',            // Optional: Adjust the title position
						top: 'top',                // Optional: Adjust the title position
					},
					tooltip: {
						trigger: 'axis',  // 'axis' triggers the tooltip when hovering over data points
					},
					grid: {
						left: '100', 
						right: '50', 
						top: '80', 
						bottom: '60'
					},
					xAxis: {
						type: 'time',
						"boundaryGap": ["10%", "10%"]
					},

					yAxis: {
						min: l,
						max: r,

					},
					series: [
						{
							symbolSize: 20,
							data: processedData,
							type: 'line',
						}
					]
				}

		return options

	},


}