import React from 'react'
import Home from './Home';
import Create from './Create'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Updation from './updation';
import Read from './Read';


function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/updation/:id' element={<Updation/>}></Route>
      <Route path='/read/:id' element={<Read/>}></Route>
    </Routes>
    </BrowserRouter>
   
  )
}


export default App;
