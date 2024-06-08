import "./AppNavbar.css";
import globalStates from '../../utils/global';
import { useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { iconClose } from "../../assets";

const AppNavbar = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreen1 = screensOffset && screensOffset.isOffsetScreen1;

    const [isBurgerCollapsed, setIsBurgerCollapsed ] = useState(false);

    const navigate = useNavigate();

    const handleSwitchPage = (page:string)=>{
        const path = page || "/";
        navigate(path);
    };

    const handleBurger = () =>{
        setIsBurgerCollapsed(!isBurgerCollapsed);
    };
    
    useEffect(()=>{
        console.log('>>>app-navbar', {screensOffset})
    })
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
                        <div className={ ` burger  ${isOffsetScreen1 ? 'burger-darker' : ''}`}
                            onClick={handleBurger}
                        >
                            <div className="burger-layer layer-1"></div>
                            <div className="burger-layer layer-2"></div>
                            <div className="burger-layer layer-3"></div>
                        </div> : 
                        <>
                            <p onClick={()=>handleSwitchPage("/")}>home</p>
                            <p onClick={()=>handleSwitchPage("musics")}>musics</p>
                            <p onClick={()=>handleSwitchPage("/")}>stores</p>
                            <p onClick={()=>handleSwitchPage("/")}>contacts</p>
                        </>
                    }
                </div>
                
                   
                    <div className={`burger-collapsed ${isBurgerCollapsed ? "" : "slide-hide"}`}
                    
                    >
                            <img src={iconClose} alt={"close button"}  
                                onClick={handleBurger}
                            />
                             <p onClick={()=>handleSwitchPage("/")}>home</p>
                            <p onClick={()=>handleSwitchPage("musics")}>musics</p>
                            <p onClick={()=>handleSwitchPage("/")}>stores</p>
                            <p onClick={()=>handleSwitchPage("/")}>contacts</p>
                    </div>
                
               
            </nav>
        </>
        
    )
};


export default AppNavbar;