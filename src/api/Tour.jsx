import http from "../utils/http";



export const callApiTourTable = ()=>{
    const URL = "AllTourTable";
    return http.post(URL)
}
