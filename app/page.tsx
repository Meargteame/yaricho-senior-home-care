'use client';

import dynamic from 'next/dynamic';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import VideoSection from '../src/components/VideoSection';
import Services from '../src/components/Services';
import Footer from '../src/components/Footer';

// Lazy load heavy components
const Gallery = dynamic(() => import('../src/components/Gallery'), { 
  loading: () => <div className="h-[600px] bg-gray-100 animate-pulse" /> 
});
const Locations = dynamic(() => import('../src/components/Locations'), {
  loading: () => <div className="h-[400px] bg-gray-100 animate-pulse" />
});
const Testimonials = dynamic(() => import('../src/components/Testimonials'));

export default function Home() {
    return (
        <div className="font-sans antialiased text-gray-900 bg-[#F8FAFC] selection:bg-[#1B365D]/10 selection:text-[#1B365D]">
            <Navbar />
            <main>
                <Hero />
                <VideoSection />
                <Services />
                <Gallery />
                <Testimonials />
                <Locations />
            </main>
            <Footer />
        </div>
    );
}
