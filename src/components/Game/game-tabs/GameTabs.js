import React, { useState } from 'react';
import GameDescription from '../GameDescription';
import GameTab from './GameTab';
import GameWebsite from '../GameWebsite';
import ListTab from './ListsTab';

const GameTabs = (props) => {
    const [selectedTab, setSelectedTab] = useState('About');

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'About':
                return <GameDescription {...props} />;
            case 'Websites':
                return (
                    <>
                        {props.websites && props.websites.length > 0 ? (
                            <div className='grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-0 mt-8'>
                                {props.websites.map((website, index) => (
                                    <GameWebsite key={index} category={website.category} url={website.url} />
                                ))}
                            </div>
                        ) : (<p className='text-xl flex justify-center mt-10'>No websites available</p>)}
                    </>);
            case 'Add To':
                return (
                    <ListTab />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className='border-4 border-violet-800  w-full  min-h-[20rem] '>
                <ul className="tabs-ul shadow-xl flex flex-col sm:flex-row sm:space-y-0">
                    <GameTab
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        tabName="About" />

                    <GameTab
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        tabName="Websites" />

                    <GameTab
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        tabName="Add To" />
                </ul>
                <div>
                    {renderTabContent()}
                </div>
            </div>
        </>
    );
};

export default GameTabs;