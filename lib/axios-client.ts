import axios from "axios"
import Cookies from "js-cookie"
import { toast } from "sonner"

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

if (typeof window !== "undefined") {
  axiosClient.interceptors.request.use((config) => {
    const auth = Cookies.get("Auth")

    if (!auth) {
      toast.error("Not authorized")
    }

    return config
  })

  axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response?.status

      switch (status) {
        case 400:
          toast.error("Bad request")
          break
        case 401:
          toast.error("Unauthorized")
          break
        case 403:
          toast.error("Forbidden")
          break
        case 404:
          toast.error("Resource not found")
          break
      }

      return Promise.reject(error)
    }
  )
}

export default axiosClient
