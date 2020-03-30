import {axios, UserUID} from '../config/config'
import { NewCategoryModel } from '../models/CategoryModel'


export function get_categories_by_user()
{
    var useruid = UserUID()

   return axios.get("/categoriesByUser/" +useruid)

}

export function add_category(model : NewCategoryModel)
{
    var useruid = UserUID()
    model.UserUID = useruid

   return axios.post("/addCategory", model)

}