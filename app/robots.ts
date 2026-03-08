import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 0,
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                crawlDelay: 1,
            },
        ],
        sitemap: 'https://yarichoseniorhomecare.com/sitemap.xml',
        host: 'https://yarichoseniorhomecare.com',
    };
}
