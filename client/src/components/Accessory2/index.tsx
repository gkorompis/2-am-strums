import "./Accessory2.css";
import globalStates from '../../utils/global';
import { useContext } from "react";

const Accessory2 = () =>{
     const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffset50Screen2 = screensOffset && screensOffset.isOffset50Screen2;
    return(
        <div className="w-pc-accessory-2">
            <div className="wrapper">
                <div className={`worm worm-orange worm-1 
                    ${isOffset50Screen2 ? "onSlideShowUp" : ""}
                    `}></div>
                <div className={`worm worm-orange worm-2
                    ${isOffset50Screen2 ? "onSlideShowUp" : ""}
                    `}></div>
            </div>
        </div>
    )
};

export default Accessory2;