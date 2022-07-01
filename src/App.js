
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Developers from './components/Developers';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
                    <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/services' element={<Services/>} />
                    <Route path='/services/:name' element={<Service/>} />
                    <Route path='/developers' element={<Developers/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
    </div>
  );
}

export default App;
