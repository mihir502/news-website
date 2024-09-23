import React from 'react'
import Search from './components/Search'
import Pagination from './components/Pagination'
import Stories from './components/Stories'
  

const App = () => {

  // const data =useGlobalContext()
  return (
    <>

      <Search/>
      <Pagination/>
      <Stories/>
    </>
  )
}

export default App
