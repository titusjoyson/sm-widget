import { useLayoutEffect, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export function useWindowSize() {
  const root = document.getElementById('root');
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([root.offsetWidth, root.offsetHeight]);
    }
    new ResizeObserver(updateSize).observe(root);
    updateSize();
  }, []);
  return size;
}

export function useCurrentPath() {
  const location = useLocation();
  const [pathname, setPathname] = useState(null);
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  return pathname;
}
