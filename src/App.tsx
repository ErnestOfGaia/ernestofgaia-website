import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />

        {/* Gallery / Slides */}
        <section
          id="gallery"
          style={{
            backgroundColor: 'var(--color-background)',
            padding: 'var(--space-lg) 0 calc(var(--space-lg) + 3rem)',
          }}
        >
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-dark)', marginBottom: '1rem' }}>
                Gallery
              </h2>
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: 'var(--color-accent-light)',
                  margin: '0 auto',
                }}
              />
            </div>
            <Carousel />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
