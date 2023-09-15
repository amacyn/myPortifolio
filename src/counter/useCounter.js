import React, { useState } from 'react'

export default function useCounter(Value) {
    const [count,setCount] = useState(Value);
    const Increment = () =>{
        setCount(count + 1)
    }
    const Decrement =() =>{
        setCount(count - 1)
    }
  return (
    count,
    Increment,
    Decrement
  )
}
