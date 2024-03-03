import { useState,useEffect } from "react"
import { TMDB_API_ACCESS_TOKEN } from '../constants/apiConfig'


export const AUTH_HEADER = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_ACCESS_TOKEN}`
    }
  };
  


export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchedData  = async () => {

        setLoading(true);
        try{
            const resp = await fetch(url,AUTH_HEADER);
            if(!resp.ok) {
                throw new Error(resp.statusText)
            }
            const result = await resp.json();
            setLoading(false);
            setData(result);
            setError("");
        } catch(err){
            setLoading(false);
            setError(err.message);
        }
      }
     fetchedData();

    }, [url])
    

    return {data,loading,error}
}