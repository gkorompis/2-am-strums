import { iconApple, iconSpotify, iconYoutube } from "../../assets";
import globalStates from '../../utils/global';
import { useContext } from "react";
import "./HomeScreen3.css";


const HomeScreen3 = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    return (
        <div className={`${windowWidthClass}-home-screen-3`} >
            <div className="screen screen-title">
                <p>stream musics now</p>
            </div>
             <div className="screen screen-content">
                <div className="img-group">
                    <img src={iconSpotify} alt="green spotify logo" />
                    <p>listen on spotify</p>
                </div>
                <div className="img-group">
                    <img src={iconYoutube} alt="red youtube icon"/>
                    <p>watch on youtube</p>
                </div>
                <div className="img-group">
                     <img src={iconApple} alt="white blue pink apple icon"/>
                     <p>play on apple music</p>
                </div>
            </div>
            {/* {windowWidthClass!=="w-mob"?<Screen3Accessory/>:null} */}
        </div>
    )
};

export default HomeScreen3;