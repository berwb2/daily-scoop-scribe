
import React, { useState, useEffect } from 'react';

const ReadingProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="reading-progress" style={{ width: `${progress}%` }}></div>
  );
};

export default ReadingProgressBar;
