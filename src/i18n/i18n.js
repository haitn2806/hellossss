import i18n from 'i18next';
import {initReactI18next} from "react-i18next"


const resources ={
    en : {
        translation :{
            "travel Styles" : "Travel Styles",
             "Destination" : "Destination",
             "Special Deals" :"Special Deals",
             "Trip Finder" :"Trip Finder",
             "Company" :"Company",
             "Media" :"Media",
             "Language" : "Language"
        }
    },
    vi : {
        translation :{
            "travel Styles" : "Phong cách du lịch",
            "Destination" : " Quốc gia",
            "Special Deals" : "Ưu đãi đặc biệt",
            "Trip Finder" : " Tìm chuyến đi ",
            "Company" : "Công ty",
            "Media" : " Phương tiện",
            "Language" : "Ngôn ngữ"

        }
    }
}
    
i18n.use(initReactI18next).init(
    {
        resources,
        lng:"vi",
        fallbackLng: "en",
        interpolation:{
            escapeValue :false
        }
    }
)


