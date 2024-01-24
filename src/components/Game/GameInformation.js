import DescriptionItem from "./InformationItem";
function GameInformation(props) {
    const infoItems = [
        { title: "Release Date:", value: props.releaseDate ? props.releaseDate : '-' },
        { title: "Developers:", value: props.developer },
        { title: "Publishers:", value: props.extraDetails.publisher },
        {
            title: "Game Modes:", value: props.extraDetails.gamemodesNames.length > 0 ?
                props.extraDetails.gamemodesNames.join(", ") : '-'
        },
        { title: "Genre:", value: props.extraDetails.gamemodesNames.join(", ") },
        { title: "Themes:", value: props.extraDetails.themesNames.join(", ") },
        { title: "Player Perspectives:", value: props.extraDetails.playerPerspectivesNames.join(", ") },
        { title: "Game Engine:", value: props.extraDetails.gameEnginesNames.join(", ") },
    ];

    return (
        <div className="mx-auto max-w-7xl mb-10">
            <h2 className="text-3xl mt-8">
                Game Information
            </h2>
            <div className='border-b-2 border-red-400 w-20 py-1 font-bold' />

            <div className="mt-4 bg-white shadow-md rounded-lg overflow-hidden">
                <div className="mt-2 text-sm text-gray-500">
                    <dl className="grid grid-cols-1  gap-y-8 sm:grid-cols-2">
                        {infoItems.map((item, index) => (
                            <DescriptionItem key={index} title={item.title} value={item.value} />
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default GameInformation;

// function GameInformation(props) {
//     return (
//         <div className="mx-auto max-w-7xl mb-10">
//             <h2 className="text-3xl mt-8">
//                 Game Information
//             </h2>
//             <div className='border-b-2 border-red-400 w-20 py-1 font-bold' />

//             <div className="mt-4 bg-white shadow-md rounded-lg overflow-hidden">
//                 <div className="mt-2 text-sm text-gray-500">
//                     <dl className="grid grid-cols-1  gap-y-8 sm:grid-cols-2">
//                         <DescriptionItem title="Release Date:" value={props.releaseDate ? props.releaseDate: '-'} />
//                         <DescriptionItem title="Developers:" value={props.developer} />
//                         <DescriptionItem title="Publishers:" value={props.extraDetails.publisher} />
//                         <DescriptionItem title="Game Modes:" value={props.extraDetails.gamemodesNames.length > 0 ? props.extraDetails.gamemodesNames.map(gamemode=>gamemode).join(", ") : '-'} />
//                         <DescriptionItem title="Genre:" value={props.extraDetails.gamemodesNames.map(gamemode=>gamemode).join(", ")} />
//                         <DescriptionItem title="Themes:" value={props.extraDetails.themesNames.map(theme=>theme).join(", ")} />
//                         <DescriptionItem title="Player Perspectives:" value={props.extraDetails.playerPerspectivesNames.map(theme=>theme).join(", ")} />
//                         <DescriptionItem title="Game Engine:" value={props.extraDetails.gameEnginesNames.map(theme=>theme).join(", ")} />
//                     </dl>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default GameInformation;