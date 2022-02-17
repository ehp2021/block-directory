import CompanyCardList from "./components/CompanyCardList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Read from "./components/Read";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
          <ChakraProvider>
            <BrowserRouter>
              <Navbar />
              <div className="body-container">
                <Routes>
                  <Route path='/submit' element={<Footer/>} />
                  <Route path='/read' element={<Read />} />
                  <Route path='/' element={<CompanyCardList />} />
                </Routes>
                
              </div>
            </BrowserRouter>
          </ChakraProvider>
        </div>
    )
}

export default App;
