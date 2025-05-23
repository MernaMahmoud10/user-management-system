import axios from 'axios'
import  { useEffect, useState } from 'react'

export function useFetch(url:string) {
    const [data, setdata] = useState([]);
    const fetchData = async () => {
        try {
            await axios.get(url).then((result) => {
                setdata(result?.data)
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url]);

    return { data }
}
