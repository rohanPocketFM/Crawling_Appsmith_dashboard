export default {
	funcChart(){
	let keysStartingWithV = Object.keys(Table1.triggeredRow).filter(key => /^v\d+/.test(key));
		console.log(keysStartingWithV)
		let kv={}
		for (const k of keysStartingWithV){
			// console.log('k',k)
			kv[k]=Table1.triggeredRow[k]
		}
		return kv
	}
}