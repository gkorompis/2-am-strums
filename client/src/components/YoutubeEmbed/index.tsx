const YoutubeEmbed=()=>{

    return(
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/DNxTbPJ8D-U?si=k0KDPaLXsgJcAVCp" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen={false}></iframe>
    )
};

export default YoutubeEmbed;