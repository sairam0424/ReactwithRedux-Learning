import React from 'react'
import { useEffect,useState } from 'react'
function DocTitleTwo() {

    const [count,setCount] = useState(0);

    useEffect(()=>{

        document.title = `count ${count}`}
    ,[count])
  return (
    <div>

        <button onClick={()=>{

            setCount(count)
        }}>Count</button>
      
    </div>
  )
}

export default DocTitleTwo
