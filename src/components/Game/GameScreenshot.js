const GameScreenshot = (props) => {
    return (
        <>
            <img id={props.id} src={props.url} alt={`screenshot-${props.id}`}
                className="mx-2.5 w-104 h-80 md:w-120 md:h-96 lg:w-[847px] lg:h-[447px]
                  hover:scale-105 hover:mx-6 duration-300 cursor-pointer" 
                  onClick={() => props.openModal(props.url)}
                   />
        </>
    );
};

export default GameScreenshot;