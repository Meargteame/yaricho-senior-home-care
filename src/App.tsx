import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Locations from './components/Locations';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-[#F8FAF9] selection:bg-[#2D5A61]/10 selection:text-[#2D5A61]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

