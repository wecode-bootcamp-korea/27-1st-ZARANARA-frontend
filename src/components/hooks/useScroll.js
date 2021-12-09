import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return scrollY;
};

export default useScroll;
