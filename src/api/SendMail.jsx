import http from "../utils/http";

export const SendMailCustom =(data)=>{
    const URL = "SendMailCustom"
    return http.post(URL,data)
}

export const sendMailFeedback =(data)=>{
    const URL = "SendMailFeedback"
    return http.post(URL,data)
}