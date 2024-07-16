import { useEffect } from 'react';

function useBodyClass(className){
  useEffect(() => {
    document.body.classList.add(className); 

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
}

export default useBodyClass;