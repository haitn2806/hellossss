import axios from 'axios'

class Http {

  constructor() {
    this.instance = axios.create({
      baseURL: "https://vnxpedia.3i.com.vn/TravelAPI/",
      headers: {
        'Content-Type': 'application/json'
      }
    })
 
    }
}

const http = new Http().instance

export default http
