import { useState, useEffect } from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "a6c7ffb0fbc61a5a7"; 

const useBuscameSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() =>{
            fetch(`https://buscame.vercel.app/api/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result =>{
                setData(result)
            })
        }

        fetchData();
    }, [term])

    return { data }
}

export default useBuscameSearch
