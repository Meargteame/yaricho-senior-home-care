export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AssistedLivingFacility",
        "name": "Yaricho Senior Home Care",
        "alternateName": "Yaricho Senior Home Care",
        "image": "https://yarichoseniorhomecare.com/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp",
        "url": "https://yarichoseniorhomecare.com",
        "telephone": "945-268-5755",
        "email": "faithseniormom@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "2108 Winona Dr",
            "addressLocality": "Plano",
            "addressRegion": "TX",
            "postalCode": "75074",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.0232,
            "longitude": -96.6715
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/yarichoseniorhomecare",
            "https://www.instagram.com/yarichoseniorhomecare"
        ],
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "24/7 Professional Care",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Private Rooms",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Medication Management",
                "value": true
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
