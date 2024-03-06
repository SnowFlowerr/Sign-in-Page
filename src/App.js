import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './componenets/Home';
import About from './componenets/About';
import Sign from './componenets/Sign';
import Contact from './componenets/Contact';
import Signup from './componenets/Signup';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<Sign/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;