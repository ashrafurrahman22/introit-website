import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Header/Navbar';

function App() {
  return (
    <div> 

      <Navbar></Navbar>

      <Routes>
          <Route path='/' element={<Home></Home>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
