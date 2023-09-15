

import React, { useContext } from 'react'
import { Children } from 'react'
import { createContext } from 'react'

const myContext = createContext()
 
export default function myContext() {
    const [ult , setUlt] = useState('logged out')
  return (
    <myContext.provider value={{ult , setUlt}}>
      {Children}
    </myContext.provider>
  )
}

export function useMyContext() {
    return useContext(myContext);
}
