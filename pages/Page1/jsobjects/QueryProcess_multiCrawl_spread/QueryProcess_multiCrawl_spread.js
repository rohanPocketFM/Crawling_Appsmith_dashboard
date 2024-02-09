export default {
	
	myVar1: Platform_Filters.data[0].crawlDates,
	noOfCrawl: No_of_crawls.selectedOptionValue,
	myDict() {
    let d = {};
    const crawl_dates = this.myVar1//deepcopy
		console.log("crawl_dates",crawl_dates)
		crawl_dates.forEach((elem,index) =>{
			d[elem]=index
		})
    return d;
},
	async myFun1 () {
		await FindQuery.run() 
		let dataIn = FindQuery.data
		let dateIndex = this.myDict()
		console.log("dateIndex", dateIndex["2023-12-28"])
		console.log (this.noOfCrawl);
		console.log(dataIn);
		let data=[]
		dataIn.forEach(elem=>{
			let datarow = elem;
				datarow.views = datarow.views.toLocaleString()
				elem.timeSeries.reverse().forEach(e=>{
				if(dateIndex.hasOwnProperty(e.crawlDate)){
					let ind = dateIndex[e.crawlDate]
					datarow[`v${ind}_${e.crawlDate.replace(/-/g,'_')}`] = e.views.toLocaleString()
				}
			})
			delete datarow.timeSeries;
			data.push(datarow)
		})
		return data
	}
}