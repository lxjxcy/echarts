import { post } from '../axiosconfig/'
import { get } from '../axiosconfig/'
export default {
	getCompany(params) {
		return get('/report/company', params)//驻进企业
	},
		

}