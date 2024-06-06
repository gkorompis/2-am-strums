import { Accessory1 } from "../../components";
import "./HomeScreen1.css";
import globalStates from '../../utils/global';
import { useContext } from "react";

const HomeScreen1 = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    return(
        <>
            <div className={`${windowWidthClass}-home-screen-1`}>
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