import { useEffect } from 'react';
import sr from 'scrollreveal';
import srConfig from '../utils/sr';

const useScrollReveal = (ref, delay = 200) => {
  useEffect(() => {
    if (ref.current) {
      sr().reveal(ref.current, srConfig(delay));
    }
  }, [ref, delay]);
};

export default useScrollReveal;
