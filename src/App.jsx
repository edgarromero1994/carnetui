import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Carnet from './pages/Carnet';
import Formulario from './pages/Formulario';
import Modal from './components/Modal';
import { Principal } from './components/Principal';
import Componente from './components/Componente';
import Piepagina from './components/Piepagina';
import Spiner from './components/Spiner';
import Listado from './components/Listado';
import Administrador from './pages/Administrador';

function App() {
  return (
   <div>
<BrowserRouter>
    <Routes>
      <Route  exact path='/home' element={<Home/>}/>
      <Route  exact path='/carnet' element={<Carnet/>}/>
      <Route  exact path='/formulario' element={<Formulario/>}/>
      <Route  exact path='/modal' element={<Modal/>}/>
      <Route  exact path='/listado' element={<Listado/>}/>
      <Route  exact path='/' element={<Principal/>}/>
      <Route  exact path='/componente' element={<Componente/>}/>
      <Route  exact path='/piepagina' element={<Piepagina/>}/>
      <Route  exact path='/spiner' element={<Spiner/>}/>
      <Route  exact path='/administrador' element={<Administrador/>}/>
    </Routes>
    </BrowserRouter>
    
   </div>
  );
}

export default App;
