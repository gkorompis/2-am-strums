import "./MusicsScreen2.css";
import globalStates from '../../utils/global';
import { useContext} from "react";
import { artworkAchilles, artworkBranches, artworkClyde, artworkMany, artworkPetunia, artworkZero } from "../../assets";

const MusicsScreen2 = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const discographyList = [
        {
            imgSrc: artworkClyde,
            title: "Clyde",
            type: "Single"
        },
        {
            imgSrc: artworkBranches,
            title: "Branches",
            type: "Single",
        },
        {
            imgSrc: artworkPetunia,
            title: "Petunia",
            type: "Album"
        },
        {
            imgSrc: artworkZero,
            title: "Zero",
            type: "Single"
        },
        {
            imgSrc: artworkMany,
            title: "Many Were Found Dead",
            type: "Single"
        },
        {
            imgSrc: artworkAchilles,
            title: "Achilles",
            type: "Single"
        },

    ]

    return(
        <div className={`${windowWidthClass}-musics-screen-2`}>
            <div className="screen-menubar">
                <input/>
            </div>
            <div className="screen-content">
                <div className="wrapper">
                    {
                        discographyList.map((music:any, index:any)=>{
                            const {imgSrc, title, type} = music;
                            return(
                                <div key={index+title} className="card">
                                        <div className="img">
                                            <img src={imgSrc} alt={title}/>
                                        </div>
                                        <div className="texts">
                                            <h4>{title}</h4>
                                            <p>{type}</p>
                                        </div>
                                        
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default MusicsScreen2;