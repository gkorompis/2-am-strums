import { Accessory1 } from "../../components";
import "./HomeScreen1.css";
import globalStates from '../../utils/global';
import { useContext, useEffect, useRef } from "react";

const HomeScreen1 = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    

    const screen1Ref = useRef(null) as any;
    
   
    useEffect(()=>{
        
        const handleScroll = () =>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screen1 = screen1Ref.current.getBoundingClientRect();
            const top = screen1.top;
            const bottom = screen1.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, isOffsetScreen1: false, bottom, offset, top}});
            if(top < (-1*0.8*offset) && bottom < 0.1*offset ){
                setScreensOffset((prev:any)=>{return {...prev, isOffsetScreen1: true, bottom, offset, top}});
            };
            
    }   ;
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    },[globalContext])
    return(
        <>
            <div ref={screen1Ref} className={`${windowWidthClass}-home-screen-1`}>
                <div className="wrapper">
                    <p>this is</p>
                    <h1>2 AM Strums</h1>
                </div>
                <Accessory1/>
            </div>
           
        </>
        

    )
};

export default HomeScreen1;