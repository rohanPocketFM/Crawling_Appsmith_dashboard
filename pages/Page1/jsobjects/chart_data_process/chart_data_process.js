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
		if (maxView-minView<1000){maxView+=500; minView-=500}
		else if(maxView-minView<10000){maxView+=3000; minView-=3000}
		console.log(processedData)
		let normaliser
		if ((maxView - minView) /100000 > 1){
			normaliser = 10000
		}
		else if ((maxView - minView) /10000 > 1){
			normaliser = 1000
		}
		else {
			normaliser = 100
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
						"formatter": function (params) {
							return `${params[0].data[0]}<br><h2 style="color:#4169E1;">${params[0].data[1].toLocaleString() }</h2>`;
						},
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
		console.log(options)
		return JSON.stringify(options)

	},


}