import "./AppNavbar.css";
import globalStates from '../../utils/global';
import { useContext } from "react";

const AppNavbar = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    return(
        <>
            <nav className={`${windowWidthClass}-app-navbar`}>
                <div className="anchors-group-1">

                </div>
                <div className="anchors-group-2">

                </div>
              
                <div className="anchors-group-3">
                    {
                        windowWidthClass === "w-mob" ?
                        <div className="burger">
                            <div className="burger-layer layer-1"></div>
                            <div className="burger-layer layer-2"></div>
                            <div className="burger-layer layer-3"></div>
                        </div> : 
                        <>
                            <p>home</p>
                            <p>musics</p>
                            <p>stores</p>
                            <p>contacts</p>
                        </>
                    }
                    
                </div>
            </nav>
        </>
        
    )
};


export default AppNavbar;