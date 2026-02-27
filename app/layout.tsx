import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import StructuredData from '../src/components/StructuredData';
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
    metadataBase: new URL('https://yarichoseniorhomecare.com'), // Fixes relative URL issues
    title: {
        template: '%s | Yaricho Senior Home Care',
        default: 'Yaricho Senior Home Care | Boutique Senior Living in Plano, TX',
    },
    description: 'Premier Boutique Senior Living in Plano, Texas. Providing compassionate, 24/7 assisting living care, medication management, and a safe, home-like environment.',
    keywords: [
        'Senior Home Care Plano', 
        'Luxury Senior Living Texas', 
        'Assisted Living Plano TX', 
        'Elderly Care Plano', 
        'Memory Care Plano',
        'Private Senior Rooms',
        'Respite Care Plano',
        'Yaricho Senior Home Care'
    ],
    authors: [{ name: 'Yaricho Senior Home Care', url: 'https://yarichoseniorhomecare.com' }],
    creator: 'Yaricho Senior Home Care',
    publisher: 'Yaricho Senior Home Care',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Yaricho Senior Home Care | Boutique Luxury Senior Living',
        description: 'Boutique Luxury Senior Living in Plano, Texas. Compassionate, safe, and high-quality care with 24/7 staff support.',
        url: 'https://yarichoseniorhomecare.com',
        siteName: 'Yaricho Senior Home Care',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp',
                width: 1200,
                height: 630,
                alt: 'Yaricho Senior Home Care - Luxury Senior Living',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Yaricho Senior Home Care | Boutique Luxury Senior Living',
        description: 'Boutique Luxury Senior Living in Plano, Texas. Compassionate, safe, and high-quality care.',
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
        icon: '/favicon.ico', // Ensure you have a favicon
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
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="font-sans antialiased text-[#1B365D]">
                {children}
                <FloatingCTA />
            </body>
        </html>
    );
}
