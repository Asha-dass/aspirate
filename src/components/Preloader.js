import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="loader">
        <img
          rel="preload"
          fetchPriority="low"
          src="/assets/images/logo/logo.webp"
          alt="Aspira Technology Logo"
        />
      </div>
    </div>
  );
};

export default Preloader;

