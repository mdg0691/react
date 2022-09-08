import { useState,useEffect } from 'react'


export const useAsync = (asyncFn, dependencies = []) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error , setError] = useState()

    useEffect(() => {
        
        setIsLoading(true)

        asyncFn().then(resp => {
            setData(resp)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setIsLoading(false)
        })
    }, dependencies)

    return{
        data,
        error,
        isLoading
    }
}

 