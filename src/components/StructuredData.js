import React, { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    const organizationSchema = {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Aspira Technology",
      "url": "https://www.aspiratechnology.in/",
      "logo": "https://www.aspiratechnology.in/assets/images/logo/logo.webp",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9677077990",
          "contactType": "Customer service",
          "contactOption": "TollFree"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-9677077990",
          "contactType": "Technical support",
          "contactOption": "TollFree"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No:31, 2nd floor, Thiruneermalai main road, Nagelkani, Chromepet",
        "addressLocality": "Chennai",
        "addressRegion": "TN",
        "postalCode": "600044",
        "addressCountry": "IN"
      },
      "telephone": "+91 96770 77990",
      "sameAs": [
        "https://twitter.com/aspiratech2022",
        "https://www.linkedin.com/company/aspiratechnology",
        "https://www.facebook.com/aspiratechnology",
        "https://www.instagram.com/aspiratechnology",
        "https://www.youtube.com/@aspiratechnology"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "108",
        "bestRating": "110",
        "ratingCount": "22",
        "reviewCount": "22"
      }
    };

    const websiteSchema = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "url": "https://www.aspiratechnology.in/",
      "name": "Aspira Technology"
    };

    // Create and append organization schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    // Create and append website schema
    const webScript = document.createElement('script');
    webScript.type = 'application/ld+json';
    webScript.text = JSON.stringify(websiteSchema);
    document.head.appendChild(webScript);

    return () => {
      // Cleanup
      if (orgScript.parentNode) {
        orgScript.parentNode.removeChild(orgScript);
      }
      if (webScript.parentNode) {
        webScript.parentNode.removeChild(webScript);
      }
    };
  }, []);

  return null;
};

export default StructuredData;

