
import "./style.css"
import './App.css'
import "./tail.css"
import About from "./page/About"
import { Route, Routes } from 'react-router-dom'
import Layot from './components/Layot'
import NotFound from './page/NotFound'

import Home from "./page/Home"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layot/>}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </>
  )
}
export default App