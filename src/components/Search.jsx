import React from 'react'
import { useGlobalContext } from './context'


const Search = () => {
  const {query, searchPost} = useGlobalContext();
  return (
    <div>
<h1>
  News Website
</h1>
<form action="" onSubmit={(e)=>e.preventDefault()}>
  <input type="text" placeholder='Type here To Search' value={query} onChange={(e)=>searchPost(e.target.value)}/>
</form>
    </div>
  )
}

export default Search
