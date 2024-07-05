import { useState } from 'react';

// Define the hook interface (you can extend this for more complex toggles)
interface UseToggle {
  toggleOnAndOff: boolean;
  toggle: () => void;
 
}

const useToggle = (initialValue: boolean): UseToggle => {
  const [toggleOnAndOff, setValue] = useState<boolean>(initialValue);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return {
    toggleOnAndOff,
    toggle,  
  };
};

export default useToggle;
 