import Header from './components/Header';
import Carousel from './components/Carousel';
import MobileCarousel from './components/MobileCarousel';
import Footer from './components/Footer';
import { useIsMobile } from './hooks/useIsMobile';
import bgImage from './assets/background.png';
import bgImageMobile from './assets/background-mobile.png';

function App() {
  const isMobile = useIsMobile();

  return (
    <div className={`app-wrapper${isMobile ? ' mobile' : ''}`}>
      <div
        className="bg-layer"
        style={{
          backgroundImage: `url(${isMobile ? bgImageMobile : bgImage})`,
          backgroundPosition: isMobile ? 'center top' : 'center',
        }}
      ></div>
      <div className="app-content">
        <Header />
        <main className="main-content">
          {isMobile ? <MobileCarousel /> : <Carousel />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
