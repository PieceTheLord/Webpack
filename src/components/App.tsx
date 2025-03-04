import React, { useState } from 'react'

export const App = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  )
}
 
