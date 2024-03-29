export default {
	filter () {
		let query={};
		if (PlatformSelect.selectedOptionValue != ""){
			query["platform"]=PlatformSelect.selectedOptionValue
		};
		if (GenderSelect.selectedOptionValue != ""){
			query["gender"] = GenderSelect.selectedOptionValue
		};
		if (GenreSelect.selectedOptionValue != ""){
			query["genre"] = GenreSelect.selectedOptionValue
		};
		if (TagsMultiSelect.selectedOptionValues.length > 0) {
			query["tags"] = { $in : TagsMultiSelect.selectedOptionValues }
		};
		if (ChapterFilter.text != null) {
			query["chaptersTotal"] = {$gte: ChapterFilter.text}
		};
		if (bookCompleteStatusSelect.selectedOptionValue != "") {
			query["genre"] = bookCompleteStatusSelect.selectedOptionValue
		};
		if (inCatalogueMultiSelect.selectedOptionValues.length > 0) {
			query["inCatalogue"]={ $in : inCatalogueMultiSelect.selectedOptionValues}
		};
		
		return query
	},
	
	project (){
		  let queryP = {"_id":1}
			Platform_Metadata.data[0].displayFields.forEach(elem=>{
				queryP[elem]=1
			});
			queryP["pfmStatus"]=1
		  queryP["pfmShowTitle"]=1
      queryP["views"]= { $arrayElemAt: ["$timeSeries.views", 0]}
			if (No_of_crawls.selectedOptionValue!=""){
				queryP["timeSeries"]={ $slice: ["$timeSeries",parseInt(No_of_crawls.selectedOptionValue)] }
			}
		return queryP
    }
}