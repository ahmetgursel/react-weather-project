import { useContext, createContext, useState } from 'react';

const OpenWeatherApiContext = createContext();

export const OpenWeatherApiProvider = ({ children }) => {
  const [state, setState] = useState(null);

  console.log(state);

  return (
    <OpenWeatherApiContext.Provider value={{ state, setState }}>
      {children}
    </OpenWeatherApiContext.Provider>
  );
};

export const useOpenWeatherApi = () => useContext(OpenWeatherApiContext);
