import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Personal-Web/' element={<Home/>}/>
      <Route path='/Personal-Web/about' element={<About/>}/>
      <Route path='/Personal-Web/gallery' element={<Gallery/>}/>
      <Route path='/Personal-Web/service' element={<Services/>}/>
      <Route path='/Personal-Web/contact' element={<Contact/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
