import React from 'react'
import { useEffect } from 'react'
function useDocument(count) {

    useEffect(()=>{

        document.title = `count ${count}`
    },[count])

}

export default useDocument
