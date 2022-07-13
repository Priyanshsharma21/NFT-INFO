import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
   <>
      <SectionWrapper 
      title="Your own store of nifty NFT, Start Selling & Growing"
      description="Buy,Store,Collect NFTs, exchange & earn crypto. Join 25+ people using NFTPro MarketPlace"
      showBtn={true}
      mockupImg={assets.homeHero}
      banner="banner"
       />

    <SectionWrapper 
      title="Smart User Interface Marketplace"
      description="Experience the buttery UI of NFTInfo NFTs. Somooth constant colors of a fluent UI Design"
      mockupImg={assets.homeCards}
      reverse
       />

       <Features />

       <SectionWrapper 
      title="Deployment"
      description="NFTInfo is build using Expo which runs natively on all users devices, you can easily get your app into people's hands"
      mockupImg={assets.feature}
      reverse
       />
       

       <SectionWrapper 
      title="Creative way to showcase the store"
      description="The app contain two screen's. First one show list of NFT's and second one show details of a specific NFT, you can search for your loved one."
      mockupImg={assets.mockup}
      banner="banner02"
       />

       <Download />
       
       <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by Priyansh Sharma</p>
       </div>
       
   </>
  )
}

export default App