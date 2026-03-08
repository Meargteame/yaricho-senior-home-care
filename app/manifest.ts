import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Yaricho Senior Home Care - Premier Senior Living in Plano, TX',
        short_name: 'Yaricho Senior Care',
        description: 'Premier boutique senior living and assisted living facility in Plano, Texas. 24/7 compassionate care, memory care, and private luxury rooms.',
        start_url: '/',
        display: 'standalone',
        background_color: '#F8FAFC',
        theme_color: '#1B365D',
        icons: [
            {
                src: '/images/new_logo.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
        categories: ['healthcare', 'senior-care', 'assisted-living'],
        lang: 'en-US',
        dir: 'ltr',
    };
}
