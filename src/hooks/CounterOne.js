import React from 'react'
import useCounter from './useCounter'
function CounterOne() {

    const [count,increment,decrement,reset] = useCounter();
  return (
    <div>

        <h2>
            Count ={count}
        </h2>

        <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne
