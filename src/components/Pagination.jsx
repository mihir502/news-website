import React from 'react'
import { useGlobalContext } from './context'

const Pagination = () => {
  const{page, nbPages,getprevPage,getnxtPage} = useGlobalContext()
  return (
    <div>
      <div className='pagination-btn'>
      <button onClick={()=>getprevPage()}>Prev</button>
      <p>{page + 1} of {nbPages}</p>
      <button onClick={()=>getnxtPage()}>Next</button>

      </div>
    </div>
  )
}

export default Pagination
