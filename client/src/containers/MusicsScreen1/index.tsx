import { Accessory1 } from "../../components";
import "./MusicsScreen1.css";
import globalStates from '../../utils/global';
import { useContext, useEffect, useRef, useState } from "react";

const MusicsScreen1 = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const [onTimeOutAnimation, setOnTimeOutAnimation] = useState(false);

    const screen1Ref = useRef(null) as any;
    
   
    useEffect(()=>{

        setTimeout(()=>{
            setOnTimeOutAnimation(true);
        }, 500)
        
        const handleScroll = () =>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screen1 = screen1Ref.current.getBoundingClientRect();
            const top = screen1.top;
            const bottom = screen1.bottom;
            const offset = globalContext && globalContext.windowHeight;

            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetScreen1: false, bottom, offset, top,
                isOffset50Screen1: false
            }});
            if(top < (-1*0.8*offset) && bottom < 0.1*offset ){
                setScreensOffset((prev:any)=>{return {...prev, isOffsetScreen1: true, bottom, offset, top}});
            };
             if(top < (-1*0.02*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, isOffsetScreen1: true, bottom, offset, top, isOffset50Screen1: true}});
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    },[globalContext])
    return(
        <>
            <div ref={screen1Ref} className={`${windowWidthClass}-musics-screen-1`}>
                <div className={`wrapper
                        ${onTimeOutAnimation? "onTimeOutAnimation":""}
                    `}>
                    <p>this is</p>
                    <h1>musics</h1>
                </div>
                <Accessory1/>
            </div>
           
        </>
        

    )
};

export default MusicsScreen1;