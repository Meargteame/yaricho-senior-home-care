import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yaricho Senior Home Care | Luxury Senior Living in Plano',
    description: 'Dignity, Comfort, and Compassionate Care. Premium senior living facility in Plano, Texas.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body>{children}</body>
        </html>
    );
}
