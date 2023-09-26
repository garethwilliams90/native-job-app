import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "0cc1041f85msh02929cbc199eb95p1b2063jsn9903b0cb9412",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  }

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)

      setData(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetch
