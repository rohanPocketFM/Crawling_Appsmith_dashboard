export default {
	myVar1: [],
	myVar2: {},
	timeSeries : [
		{
			"views": 75879869,
			"rating": 4.6,
			"numOfRatings": 6591,
			"crawlDate": "2024-01-31",
			"crawlTimestamp": 1706639400
		},
		{
			"views": 75359456,
			"rating": 4.6,
			"numOfRatings": 6577,
			"crawlDate": "2024-01-13",
			"crawlTimestamp": 1705084200
		},
		{
			"views": 74915998,
			"rating": 4.6,
			"numOfRatings": 6566,
			"crawlDate": "2024-01-08",
			"crawlTimestamp": 1704652200
		},
		{
			"views": 74115998,
			"rating": 4.6,
			"numOfRatings": 6566,
			"crawlDate": "2024-01-2",
			"crawlTimestamp": 1704133800
		},
		{
			"views": 73915998,
			"rating": 4.6,
			"numOfRatings": 6566,
			"crawlDate": "2023-12-28",
			"crawlTimestamp": 1703701800
		}
	],

	myFun:()=> {
		let i=0
		let timeSeries =  [ {
			"views": 75879869,
			"rating": 4.6,
			"numOfRatings": 6591,
			"crawlDate": "2024-01-31",
			"crawlTimestamp": 1706639400
		},
											 {
												 "views": 75359456,
												 "rating": 4.6,
												 "numOfRatings": 6577,
												 "crawlDate": "2024-01-13",
												 "crawlTimestamp": 1705084200
											 },
											 {
												 "views": 74915998,
												 "rating": 4.6,
												 "numOfRatings": 6566,
												 "crawlDate": "2024-01-08",
												 "crawlTimestamp": 1704652200
											 },
											 {
												 "views": 74115998,
												 "rating": 4.6,
												 "numOfRatings": 6566,
												 "crawlDate": "2024-01-2",
												 "crawlTimestamp": 1704133800
											 },
											 {
												 "views": 73915998,
												 "rating": 4.6,
												 "numOfRatings": 6566,
												 "crawlDate": "2023-12-28",
												 "crawlTimestamp": 1703701800
											 }
											]
		let noOfCrawl = 3
		let views=[]
		let date = []
		let timestamp =[]
		for(i=0;i<noOfCrawl && i<timeSeries.length;i++){
			views.push(timeSeries[i]["views"]);
			date.push(timeSeries[i]["crawlDate"]);
			timestamp.push(timeSeries[i]["crawlTimestamp"]);
		}
		return {"views":views.reverse(), "date":date.reverse(),"timestamp":timestamp.reverse()}
	}

}