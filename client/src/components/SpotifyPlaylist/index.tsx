const IframeSpotify=({style}:any)=>{
    const defaultStyle = {borderRadius:"12px", padding: "0", margin: "0", height: "300px"}
    const iframeStyle = {...defaultStyle, ...style }
    return(
        <iframe 
        title={"This is 2 AM Strums"}  
        style={iframeStyle} 
        src="https://open.spotify.com/embed/artist/4zdSyyDm2DRSzAIzQdmRrm?utm_source=generator" 
        width="100%" 
        allowFullScreen={false} 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    )
}

export default IframeSpotify;