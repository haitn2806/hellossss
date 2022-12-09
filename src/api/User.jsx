import http from "../utils/http";

export const signIn =(data) =>{
 const URL ="LoginXpedia"
 return http.post(URL,data)
}

export const signUp =(data)=>{
 const URL ="InsertAccount"
 return http.post(URL,data)
}


export const userInfor =(currentUser)=>{
    const URL = `BookingTable?UserName=${currentUser.UserName}`
    return http.post(URL)
}