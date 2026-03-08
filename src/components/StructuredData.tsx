export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AssistedLivingFacility",
                "@id": "https://yarichoseniorhomecare.com/#organization",
                "name": "Yaricho Senior Home Care",
                "alternateName": "Yaricho Senior Home Care Plano",
                "description": "Premier boutique senior living and assisted living facility in Plano, Texas. Providing 24/7 compassionate care, medication management, memory care, and private luxury rooms.",
                "image": "https://yarichoseniorhomecare.com/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp",
                "logo": "https://yarichoseniorhomecare.com/images/new_logo.png",
                "url": "https://yarichoseniorhomecare.com",
                "telephone": "+1-945-268-5755",
                "email": "faithseniormom@gmail.com",
                "priceRange": "$$$",
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
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Plano",
                        "containedIn": {
                            "@type": "State",
                            "name": "Texas"
                        }
                    },
                    {
                        "@type": "City",
                        "name": "Frisco"
                    },
                    {
                        "@type": "City",
                        "name": "McKinney"
                    },
                    {
                        "@type": "City",
                        "name": "Dallas"
                    }
                ],
                "amenityFeature": [
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "24/7 Professional Care",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Private Luxury Rooms",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Medication Management",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Memory Care",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Home Cooked Meals",
                        "value": true
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Housekeeping & Laundry",
                        "value": true
                    }
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Senior Care Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Assisted Living",
                                "description": "24/7 professional assisted living care"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Memory Care",
                                "description": "Specialized memory and dementia care"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Respite Care",
                                "description": "Short-term respite care services"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://yarichoseniorhomecare.com/#website",
                "url": "https://yarichoseniorhomecare.com",
                "name": "Yaricho Senior Home Care",
                "description": "Premier boutique senior living in Plano, Texas",
                "publisher": {
                    "@id": "https://yarichoseniorhomecare.com/#organization"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://yarichoseniorhomecare.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://yarichoseniorhomecare.com/#localbusiness",
                "name": "Yaricho Senior Home Care",
                "image": "https://yarichoseniorhomecare.com/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp",
                "telephone": "+1-945-268-5755",
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
                "url": "https://yarichoseniorhomecare.com",
                "priceRange": "$$$",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "50"
                }
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
