import "./Accessory1.css";
import globalStates from '../../utils/global';
import { useContext, useEffect, useState } from "react";

const Accessory1 = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffset50Screen1 = screensOffset && screensOffset.isOffset50Screen1;
    const [onTimeOutAnimation, setOnTimeOutAnimation] = useState(false);

    

    useEffect(()=>{
        console.log("accessory1", screensOffset);
        
        setTimeout(()=>{
            setOnTimeOutAnimation(true);
        }, 500)
    }, [screensOffset])
    return(
        <div className={`${windowWidthClass}-accessory-1`}>
            <div className="accessory-wrapper">
                <div className={`worm worm-orange worm-1
                    ${onTimeOutAnimation ? "onTimeOutAnimation":""}
                    ${isOffset50Screen1 ? "slide50Animation":""}`}></div>
                <div className={`worm worm-gray worm-2 
                    ${onTimeOutAnimation ? "onTimeOutAnimation":""}
                    ${isOffset50Screen1 ? "slide50Animation":""}`}></div>
                <div className={`worm worm-orange worm-3 
                    ${onTimeOutAnimation ? "onTimeOutAnimation":""}
                    ${isOffset50Screen1 ? "slide50Animation":""}`}></div>
            </div>
        </div>
    )
};

export default Accessory1;