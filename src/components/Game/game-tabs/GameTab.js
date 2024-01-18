const GameTab = (props) => {
    return (
        <>
            <li className="w-full">
                <button className={`game-tab bg-gray-100  border-b-2 border-b-gray-200
                            ${props.selectedTab === props.tabName ? '  border-b-red-800 text-black' : 'text-gray-500'}`}
                    onClick={() => props.setSelectedTab(props.tabName)}>{props.tabName}</button>
            </li>
        </>
    );
};
export default GameTab;