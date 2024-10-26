import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Personal-Web/' element={<Home/>}/>
      <Route path='/Personal-Web/about' element={<About/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
