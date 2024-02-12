export default {
	set_show_id () {
		let selectedOptions= Form_Link_book_with_show.selectedOptionLabels
		let allOptions = Pfm_Show_Search.data.stories.map( (obj) =>{ 
					return  {'label': obj.title, 'value': obj.title, 'showId': obj.entity_id}
				}).filter((obj)=>{
					return obj.value!=null && obj.value!=""
				})
		let selectedShowIds = []
		selectedOptions.forEach(showName=>{
			for (let option of allOptions){
				if (option.label===showName){
					selectedShowIds.push(option.showId)
					break
				}
			}	
		})
		console.log(selectedShowIds)
		Form_pfm_show_id.setSelectedOptions(selectedShowIds)
	}

}