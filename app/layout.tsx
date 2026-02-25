import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Heavenly Manor of Plano | Yaricho Senior Home Care',
    description: 'Boutique Luxury Senior Living in Plano, Texas. Honored to provide compassionate, safe, and high-quality care.',
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
