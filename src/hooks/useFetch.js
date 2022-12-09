import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // console.log("url", url);
    (async function () {
      try {
        setLoading(true);
        const response = await axios.post(url);
        setData(response.data);
        console.log("data123", data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, loading, error };

  //   const [data, setData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const callApi = async (url) => {
  //     setIsLoading(true);
  //     const response = await axios({
  //       method: "post",
  //       url: url,
  //       type: "json",
  //     });
  //     //    if(response.status === 200){
  //     //        setSellList(response.data.filter(d => d.sale_or_rent =='sale'))
  //     //    }
  //     setData(response);
  //     console.log(data);
  //     setIsLoading(false);
  //   };
  //   useEffect(() => {
  //     callApi();
  //   }, []);
  //   return { data, isLoading };
};

export default useFetch;
