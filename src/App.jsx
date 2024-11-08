import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Home from './pages/Home'
import Cultos from './pages/Cultos'
import Escala from './pages/Escalas'
function App() {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/cultos' element={<Cultos/>} />
        <Route path='/escala' element={<Escala/>}/>
    </Routes>
      </BrowserRouter>
    );
  }
  export default App;