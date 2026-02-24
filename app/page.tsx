import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import Gallery from '../src/components/Gallery';
import Locations from '../src/components/Locations';
import Footer from '../src/components/Footer';

export default function Home() {
    return (
        <div className="font-sans antialiased text-gray-900 bg-[#F8FAFC] selection:bg-[#1B365D]/10 selection:text-[#1B365D]">
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
