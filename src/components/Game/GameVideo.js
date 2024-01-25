const GameVideo = (props) => {
    const videoUrl = `https://www.youtube-nocookie.com/embed/${props.videoId}`;
    
    return (
        <>
            <div className="mx-2">
                <iframe
                    src={videoUrl}
                    title="YouTube Video"
                    className="border border-white w-96 h-72 md:w-120 md:h-96 lg:w-[825px] lg:h-[447px]"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
};

export default GameVideo;
