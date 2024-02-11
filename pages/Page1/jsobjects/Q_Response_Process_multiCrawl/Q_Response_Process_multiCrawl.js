export default {

	crawlDatesDict() {
		let d = {};
		const crawl_dates = Platform_Metadata.data[0].crawlDates
		console.log("crawl_dates",crawl_dates)
		crawl_dates.forEach((elem,index) =>{
			d[elem]=index
		})
		return d;
	},
	async queryResponseProcessor () {
		await FindQuery.run() 
		let dataIn = FindQuery.data
		let crawlDateIndex = this.crawlDatesDict()
		let noOfCrawl= No_of_crawls.selectedOptionValue
		// console.log(dataIn);
		let data=[]
		dataIn.forEach(elem=>{
			let datarow = elem;
			datarow.views = datarow.views.toLocaleString()
			if (noOfCrawl != ""){
				elem.timeSeries.reverse().forEach(e=>{
					if(crawlDateIndex.hasOwnProperty(e.crawlDate)){
						let ind = crawlDateIndex[e.crawlDate]
						datarow[`v${ind}_${e.crawlDate.replace(/-/g,'_')}`] = e.views.toLocaleString()
					}
				})
				delete datarow.timeSeries;
			}
			data.push(datarow)
		})
		return data
	}
}