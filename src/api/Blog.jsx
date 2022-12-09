import http from "../utils/http";

export const callAPIBlogCurrentPage =()=>{
    const URL = "BlogTable"
    return http.post(URL)
}
export const callAPIBlogTable =()=>{
    const URL = `BlogTable`
    return http.post(URL)
}