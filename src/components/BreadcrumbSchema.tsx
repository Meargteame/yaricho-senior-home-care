export default function BreadcrumbSchema() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yarichoseniorhomecare.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://yarichoseniorhomecare.com/#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Gallery",
                "item": "https://yarichoseniorhomecare.com/#gallery"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Locations",
                "item": "https://yarichoseniorhomecare.com/#locations"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://yarichoseniorhomecare.com/#contact"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
    );
}
