import {axios, UserUID} from '../config/config'


export function get_categories_by_user()
{
    var useruid = UserUID()

   return axios.get("/categoriesByUser/" +useruid)

}