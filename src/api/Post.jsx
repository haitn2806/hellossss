import http from "../utils/http";


export const callApiListPost = () =>{
   const url ="ListPost"
   return http.post(url)
}