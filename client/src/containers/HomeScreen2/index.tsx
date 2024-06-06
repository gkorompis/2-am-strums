import { artworkAchilles } from "../../assets";
import { Accessory2, IframeSpotify } from "../../components";
import globalStates from '../../utils/global';
import { useContext } from "react";
import "./HomeScreen2.css";

const HomeScreen2 = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    return(
        <div className={`${windowWidthClass}-home-screen-2`}>
            <div className="spotify-embed-1">
                <IframeSpotify 
                    style={{
                        height: "20vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "4vh",
                        }}/>
            </div>
            <div className="latest-news">
                <div className="div-img">
                    <img src={artworkAchilles} alt="artwork cover of single achilles"/>
                </div>
                <div className="div-news">
                        <div className="triangle"></div>
                        <div className="text">
                            <p className="news-title">single out now</p>
                            <h1 className="news-content-1">Achilles</h1>
                            <p className="news-content-2">June 25, 2022</p>
                        </div>
                </div>
            </div>
            {windowWidthClass==="w-pc" ? <Accessory2/> : null}
        </div>
    )
};

export default HomeScreen2;