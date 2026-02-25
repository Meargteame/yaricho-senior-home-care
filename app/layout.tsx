import './globals.css';
import type { Metadata } from 'next';
import StructuredData from '../src/components/StructuredData';

export const metadata: Metadata = {
    title: 'Heavenly Manor of Plano | Yaricho Senior Home Care',
    description: 'Boutique Luxury Senior Living in Plano, Texas. Honored to provide compassionate, safe, and high-quality care for your loved ones with 24/7 support.',
    keywords: ['Senior Home Care Plano', 'Luxury Senior Living Texas', 'Assisted Living Plano TX', 'Elderly Care Plano', 'Heavenly Manor Plano', 'Yaricho Senior Home Care'],
    authors: [{ name: 'Yaricho Senior Home Care' }],
    openGraph: {
        title: 'Heavenly Manor of Plano | Yaricho Senior Home Care',
        description: 'Boutique Luxury Senior Living in Plano, Texas. Compassionate, safe, and high-quality care.',
        url: 'https://yarichoseniorhomecare.com',
        siteName: 'Yaricho Senior Home Care',
        images: [
            {
                url: '/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp',
                width: 1200,
                height: 630,
                alt: 'Heavenly Manor of Plano',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Heavenly Manor of Plano | Yaricho Senior Home Care',
        description: 'Boutique Luxury Senior Living in Plano, Texas. Compassionate, safe, and high-quality care.',
        images: ['/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp'],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://yarichoseniorhomecare.com',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <StructuredData />
            </head>
            <body>{children}</body>
        </html>
    );
}
