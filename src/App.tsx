import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import bgImage from './assets/background.png';

function App() {
  return (
    <div className="app-wrapper">
      <div
        className="bg-layer"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>
      <div className="app-content">
        <Header />
        <main className="main-content">
          <Carousel />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
