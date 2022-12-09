import http from "../utils/http";


export const InsertBooking=(data)=>{
    const URL ="InsertBooking"
    return http.post(URL,data)
}

