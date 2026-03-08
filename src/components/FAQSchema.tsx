export default function FAQSchema() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What services does Yaricho Senior Home Care provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yaricho Senior Home Care provides 24/7 professional assisted living care, memory care, medication management, home-cooked meals, housekeeping and laundry services, hygiene assistance, private luxury rooms, and daily engaging activities in Plano, Texas."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Yaricho Senior Home Care located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yaricho Senior Home Care is located at 2108 Winona Dr, Plano, TX 75074. We serve residents from Plano, Frisco, McKinney, and the greater Dallas area."
                }
            },
            {
                "@type": "Question",
                "name": "What are the visiting hours at Yaricho Senior Home Care?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our office hours are Monday-Friday 9 AM - 6 PM and Saturday-Sunday 10 AM - 4 PM. However, we provide 24/7 professional clinical care for our residents. Please call 945-268-5755 to schedule a tour."
                }
            },
            {
                "@type": "Question",
                "name": "Does Yaricho Senior Home Care offer memory care services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Yaricho Senior Home Care offers specialized memory care services for residents with Alzheimer's, dementia, and other memory-related conditions. Our trained staff provides compassionate, 24/7 care in a safe and comfortable environment."
                }
            },
            {
                "@type": "Question",
                "name": "What makes Yaricho Senior Home Care different from other senior living facilities in Plano?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yaricho Senior Home Care is a boutique luxury senior living facility offering private rooms, home-cooked meals, 24/7 professional care, and a personalized approach. We focus on creating a warm, home-like environment with clinical excellence and compassionate staff."
                }
            },
            {
                "@type": "Question",
                "name": "How much does assisted living cost at Yaricho Senior Home Care?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pricing varies based on level of care needed and room selection. Please call us at 945-268-5755 or visit our website to schedule a tour and discuss pricing options. We offer transparent pricing and personalized care plans."
                }
            },
            {
                "@type": "Question",
                "name": "Can I schedule a tour of Yaricho Senior Home Care?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We encourage families to schedule a tour to see our facility and meet our staff. Call us at 945-268-5755 or visit https://yarichoseniorhomecare.com to book your tour. We also offer virtual tours."
                }
            },
            {
                "@type": "Question",
                "name": "What amenities are included at Yaricho Senior Home Care?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our amenities include private luxury rooms, 24/7 professional care, medication management, home-cooked nutritious meals, housekeeping and laundry services, hygiene and grooming assistance, daily activities, and a safe, comfortable environment."
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    );
}
