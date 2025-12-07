import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <AppPreview />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
