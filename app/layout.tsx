import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import StructuredData from '../src/components/StructuredData';
import BreadcrumbSchema from '../src/components/BreadcrumbSchema';
import FAQSchema from '../src/components/FAQSchema';
import FloatingCTA from '../src/components/FloatingCTA';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://yarichoseniorhomecare.com'),
    title: {
        template: '%s | Yaricho Senior Home Care',
        default: 'Yaricho Senior Home Care | #1 Boutique Senior Living in Plano, TX | 24/7 Care',
    },
    description: 'Premier Boutique Senior Living & Assisted Living in Plano, Texas. Award-winning 24/7 compassionate care, medication management, memory care, private luxury rooms, and home-cooked meals. Serving Plano, Frisco, McKinney & Dallas areas. Call 945-268-5755 for a tour.',
    keywords: [
        // Primary Keywords
        'Senior Home Care Plano TX',
        'Assisted Living Plano Texas', 
        'Senior Living Plano',
        'Elderly Care Plano',
        'Memory Care Plano TX',
        'Nursing Home Plano',
        'Senior Care Facility Plano',
        
        // Location-based
        'Senior Living Frisco TX',
        'Assisted Living McKinney TX',
        'Senior Care Dallas TX',
        'Plano Senior Housing',
        'Collin County Senior Care',
        
        // Service-based
        '24/7 Senior Care',
        'Private Senior Rooms',
        'Medication Management Plano',
        'Respite Care Plano',
        'Dementia Care Plano',
        'Alzheimer Care Plano',
        'Senior Assisted Living',
        'Independent Living Plano',
        
        // Quality/Type
        'Luxury Senior Living Texas',
        'Boutique Senior Care',
        'Premium Elderly Care',
        'High-End Senior Living',
        'Affordable Senior Care Plano',
        
        // Brand
        'Yaricho Senior Home Care',
        'Yaricho Plano',
        
        // Long-tail
        'best senior living in Plano',
        'senior care near me Plano',
        'assisted living facilities Plano TX',
        'memory care facilities Plano',
        'senior home with private rooms Plano'
    ],
    authors: [{ name: 'Yaricho Senior Home Care', url: 'https://yarichoseniorhomecare.com' }],
    creator: 'Yaricho Senior Home Care',
    publisher: 'Yaricho Senior Home Care',
    category: 'Healthcare',
    classification: 'Assisted Living Facility',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Yaricho Senior Home Care | #1 Boutique Senior Living in Plano, TX',
        description: 'Award-winning boutique senior living in Plano, Texas. 24/7 compassionate care, private luxury rooms, memory care, and medication management. Serving Plano, Frisco & McKinney. Call 945-268-5755.',
        url: 'https://yarichoseniorhomecare.com',
        siteName: 'Yaricho Senior Home Care',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp',
                width: 1200,
                height: 630,
                alt: 'Yaricho Senior Home Care - Premier Boutique Senior Living in Plano, Texas',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Yaricho Senior Home Care | #1 Boutique Senior Living Plano, TX',
        description: 'Award-winning senior living in Plano. 24/7 care, private rooms, memory care. Call 945-268-5755 for a tour.',
        images: ['/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://yarichoseniorhomecare.com',
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/favicon.ico',
    },
    verification: {
        google: 'your-google-verification-code', // Add Google Search Console verification
        // yandex: 'your-yandex-verification-code',
        // bing: 'your-bing-verification-code',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`}>
            <head>
                <StructuredData />
                <BreadcrumbSchema />
                <FAQSchema />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="geo.region" content="US-TX" />
                <meta name="geo.placename" content="Plano" />
                <meta name="geo.position" content="33.0232;-96.6715" />
                <meta name="ICBM" content="33.0232, -96.6715" />
            </head>
            <body className="font-sans antialiased text-[#1B365D]">
                {children}
                <FloatingCTA />
            </body>
        </html>
    );
}
