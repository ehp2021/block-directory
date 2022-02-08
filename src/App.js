import CompanyCardList from "./components/CompanyCardList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    return (
        <div>
          <ChakraProvider>
            <Navbar />
            <div className="body-container">
              <CompanyCardList />
              <Footer/>


            </div>
            
          </ChakraProvider>
        </div>
    )
}

export default App;
