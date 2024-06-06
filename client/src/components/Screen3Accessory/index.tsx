import "./Screen3Accessory.css";

const Screen3Accessory = ({style}:any) =>{
    const componentStyle = {
        height: "60vh",
        ...style,

    }
    return(
        <div className="w-pc-screen3accessory" style={componentStyle}>
            <div className="wrapper">
                <div className="triangle"></div>
                <div className="triangle-2"></div>
            </div>
        </div>  
    )
};

export default Screen3Accessory;