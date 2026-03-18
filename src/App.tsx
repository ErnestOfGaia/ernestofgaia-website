
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import bgImage from './assets/background.png';

function App() {
  return (
    <div className="app-wrapper">
      <div className="bg-layer" style={{ 
        backgroundImage: `url(${bgImage}), url(https://images.unsplash.com/photo-1541094254804-5d51c0997ee4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)` 
      }}></div>
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
