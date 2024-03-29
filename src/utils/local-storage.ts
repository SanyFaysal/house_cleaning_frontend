import { authKey } from "@/constants/storageKey"
import { decodedToken } from "./jwt"

export const setToLocalStorage = (key: string, token: string | any) => {
  if (!key || typeof window === "undefined") {
    return ""
  }
  return localStorage.setItem(key, token)
}

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return ""
  }
  return localStorage.getItem(key)
}



export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey)
  if (authToken) {
    const decodedData = decodedToken(authToken) as any;
    console.log({ decodedData })
    if (decodedData?.id) return true
    else return false;
  } else {
    return false
  }
}
export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return ""
  }
  return localStorage.removeItem(key)
}


