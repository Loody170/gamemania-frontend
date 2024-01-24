import HomeSection from '../components/HomeSection';
import PlatformSection from '../components/best-games/PlatformSection';

function HomePage() {
  return (
    <>
      <h1 className="mx-10 md:mx-28 py-2">Welcome to GameMania, your destination for video games knowledge!</h1>
      <HomeSection 
      query="anticipatedgames" 
      queryKey={"anticipatedGames"} 
      title="Anticipated Games" 
      color="border-cyan-600" />

      <HomeSection 
      query="recenttopgames" 
      queryKey={"recentTopGames"} 
      title="Top Recent Games" 
      color="border-pink-600" />
      
      <HomeSection 
      query="upcominggames" 
      queryKey={"comingSoon"} 
      title="Coming Soon" 
      color="border-green-600" />

      <div>
        <h2 className='mx-10 md:ml-28 md:mr-48 text-5xl mb-8'>Best Games on</h2>
        {/* main container */}
        <div
          className='mx-8 lg:mx-36 flex flex-col space-y-10 lg:space-y-0
          lg:flex-row lg:space-x-12 justify-between lg:items-center'>
          {/* container 1 */}
          <div className='flex flex-col space-y-8'>
            <PlatformSection platform="playstation" />
          </div>
          {/* container 2 */}
          <div className=' flex flex-col space-y-8'>
            <PlatformSection platform="xbox" />
          </div>
          {/* container 3 */}
          <div className='flex flex-col space-y-8'>
            <PlatformSection platform="switch" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
