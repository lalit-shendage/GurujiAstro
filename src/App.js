import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "./components/Navbar";
import VideoCarousel from "./components/VideoCarousel";
import AstrologerCards from './components/AstrologerCards';
import Css from './App.css'
import TheCircle from './components/TheCircle';
import Reviews from './components/Reviews';


function App() {
  return (
    <ChakraProvider>
    <Navbar />
    <div className='main'>
    <VideoCarousel className="sub" />
    <AstrologerCards />
    </div>
    <TheCircle/>
    <Reviews/>
    </ChakraProvider>
  );
}

export default App;
