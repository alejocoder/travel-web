import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Service,About,Home, Contact } from './routes'

function App() {

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>

    </div>
  )
}

export default App

