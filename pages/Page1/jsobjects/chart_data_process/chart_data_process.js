export default {
	funcChart(){
	let keysStartingWithV = Object.keys(Table1.triggeredRow).filter(key => /^v\d+/.test(key));
		// console.log("keysStartingWithV",keysStartingWithV)
		let kv={}
		for (const k of keysStartingWithV){
			if (typeof Table1.triggeredRow[k]!== 'undefined' && Table1.triggeredRow[k] !== ""){
							kv[k]=Table1.triggeredRow[k]
			}
		}
		// console.log(kv)
		let rawData = kv
		const processedData = Object.keys(rawData).map(key => { 
			const parts = key.split('_');
			const date = parts[1] + '-' + parts[2] + '-' + parts[3]; // YYYY-MM-DD 
			const views = parseInt(rawData[key].replace(/,/g, ''));
			return [ new Date(date), views ];
		}); 
		return processedData
	}
}