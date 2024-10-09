import {useEffect, useState} from 'react';

const useDebounceValue = (inputText: string, timer: number = 600) => {
  const [debounceValue, setDebounceValue] = useState(inputText);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceValue(inputText);
    }, timer);

    return () => {
      clearTimeout(timeOut);
    };
  }, [inputText, timer]);

  return debounceValue;
};

export default useDebounceValue;
