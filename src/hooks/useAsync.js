import { useState,useEffect } from 'react'


export const useAsync = (asyncFn, dependecies = []) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error , setError] = useState()

    useEffect(() => {
        
        setIsLoading(true)

        asyncFn().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setIsLoading(false)
        })
    }, dependecies)

    return{
        data,
        error,
        isLoading
    }
}

 