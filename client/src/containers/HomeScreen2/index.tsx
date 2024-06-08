import { artworkAchilles } from "../../assets";
import { Accessory2, IframeSpotify } from "../../components";
import globalStates from '../../utils/global';
import { useContext, useEffect, useRef, useState } from "react";
import "./HomeScreen2.css";

const HomeScreen2 = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const [onTimeOutAnimation, setOnTimeOutAnimation] = useState(false);

    const screen2Ref = useRef(null) as any;
    useEffect(()=>{
        
        const handleScroll = () =>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screen2 = screen2Ref.current.getBoundingClientRect();
            const top2 = screen2.top;
            const bottom2 = screen2.bottom;
            const offset = globalContext && globalContext.windowHeight;

            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetScreen2: false, bottom2, offset, top2,
                isOffset50Screen2: false
            }});
             if(top2 < (0.9*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, isOffsetScreen2: true, bottom2, offset, top2, isOffset50Screen2: true}});
                setTimeout(()=>{
                    setOnTimeOutAnimation(true)
                },700)
            } else {
                setOnTimeOutAnimation(false)
            };
         
            
    }   ;
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    },[globalContext])
    return(
        <div ref={screen2Ref} className={`
            ${windowWidthClass}-home-screen-2
        `}>
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
            <div className={`latest-news
                ${onTimeOutAnimation?"onTimeOutAnimation":""}
            `}>
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