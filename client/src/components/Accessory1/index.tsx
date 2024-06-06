import "./Accessory1.css";
import globalStates from '../../utils/global';
import { useContext } from "react";

const Accessory1 = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    return(
        <div className={`${windowWidthClass}-accessory-1`}>
            <div className="accessory-wrapper">
                <div className="worm worm-orange worm-1"></div>
                <div className="worm worm-gray worm-2"></div>
                <div className="worm worm-orange worm-3"></div>
            </div>
        </div>
    )
};

export default Accessory1;