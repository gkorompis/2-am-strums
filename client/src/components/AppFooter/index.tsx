import "./AppFooter.css";
import globalStates from '../../utils/global';
import { useContext } from "react";

const AppFooter = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    return(
        <div className={`${windowWidthClass}-app-footer`}>
            <h1>2amstrums.com</h1>
        </div>
    )
};

export default AppFooter;