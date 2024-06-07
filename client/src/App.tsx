
import './App.css';
import globalStates from './utils/global';
import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect,  useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Musics } from './pages';

function App() {
  const globalContext = globalStates && globalStates.globalContext as any;
  
  const [windowWidthClass, setWindowWidthClass] = useState("w-pc");
  const windowSize = useWindowSize() as {width: any, height: any};
  const windowWidth = windowSize && windowSize.width;
  const windowHeight = windowSize && windowSize.height;

  const [screensOffset, setScreensOffset] = useState({} as any);

  useEffect(
    ()=>{
      if(+windowWidth < 650){
      setWindowWidthClass("w-mob");
    }

    else if (+windowWidth >= 650 && +windowWidth < 1025) {
      setWindowWidthClass("w-tab");
    }
    
    else {
      setWindowWidthClass("w-pc");
    }
    }, [windowSize, windowWidth, windowHeight]
  )




  return (
    <>
     <globalContext.Provider value={{
        windowSize, windowWidthClass, windowHeight, 
        screensOffset, setScreensOffset
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/musics" element={<Musics/>} />
          </Routes>
        </BrowserRouter>
      </globalContext.Provider>
    </>
    
  );
}

export default App;
