export default {

	link_show () {
		let query = {}
		query["pfmStatus"] = Form_pfm_status.selectedOptionValue
 		query["pfmShowTitle"] = Form_Link_book_with_show.selectedOptionValues
		query["pfmShowId"] = Form_pfm_show_id.selectedOptionValues
		console.log(query)
		return query
	}
}