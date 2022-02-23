import { useState, useEffect } from "react";

const API_SERVER = "http://localhost:3000/";


export function useFetchApi(idUser) {   

    const [dataUser, setDataUser] = useState([]) 
    
    const [isLoading, setLoading] = useState(true)    
    const [error, setError] = useState(false)
   

    useEffect(() => {        
        setLoading(true)
        async function getData() {
            try {
                const response = await fetch(`${API_SERVER}user/${idUser}`,{
                    "method": "GET" 
                })
                const data = await response.json()
                setDataUser(data?.data['userInfos'])
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [idUser])

    return { dataUser, isLoading, error }
}
