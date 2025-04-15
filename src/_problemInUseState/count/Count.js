import React, { useState } from 'react'

function Count() {
    const [count, setCount] =useState(0)
  return (
    <div className='text-center my-5'>
      <button className='btn btn-danger mx-2' onClick={()=>{setCount(count-1)}}>-</button>
      <span>{count}</span>
      <button className='btn btn-primary mx-2 ' onClick={()=>{setCount(count+1)}}>+</button>
    </div>
  )
}

export default Count
