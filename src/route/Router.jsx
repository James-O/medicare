import React from 'react'
import Home from '../components/home/Homes'

function Router() {
  return (
    <BroswerRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </BroswerRouter>
  )
}

export default Router
