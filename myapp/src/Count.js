import { useState } from 'react'

export default function Count () {
    const[count, setCount] = useState(0)

    return (
        <div>
            <button onClick={()=>setCount()}>Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount-1)}>-</button>
            Count: {count}
            <button onClick={()=>setCount(prevCount => prevCount+1)}>+</button>
        </div>
    )

}