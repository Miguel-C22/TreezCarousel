import { useState } from 'react';

// Define the hook interface (you can extend this for more complex toggles)
interface UseToggle {
  value: boolean;
  toggle: () => void;
 
}

const useToggle = (initialValue: boolean): UseToggle => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return {
    value,
    toggle,  
  };
};

export default useToggle;
 