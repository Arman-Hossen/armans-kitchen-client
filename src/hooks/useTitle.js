import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Arman's Kitchen`

    },[title])
}

export default useTitle;