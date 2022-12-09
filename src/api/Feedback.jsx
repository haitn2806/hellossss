import http from "../utils/http";


export const callApiFeedBack =()=>{
    const URL = "FeedbackTable?CurrentPage=1"
    return http.post(URL)
}

export const insertFeedback =(data)=>{
    const URL = "InsertFeedback"
    return http.post(URL,data)
}

