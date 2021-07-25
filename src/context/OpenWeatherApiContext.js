import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const OpenWeatherApiContext = createContext();

export const OpenWeatherApiProvider = ({ children }) => {
  const [state, setState] = useState({
    plaka: 1,
    il_adi: 'ADANA',
    lat: 37,
    lon: 35.3213333,
    northeast_lat: 37.072004,
    northeast_lon: 35.461995,
    southwest_lat: 36.935523,
    southwest_lon: 35.174706,
  });
  const [weather, setWeather] = useState();

  useEffect(() => {
    (async () => {
      await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${state.lat}&lon=${state.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=4149abd5057af5395599d6b3ddb20a82`
      )
        .then((res) => setWeather(res.data))
        .catch((e) => console.error(e));
    })();
  }, [state]);

  return (
    <OpenWeatherApiContext.Provider value={{ state, setState, weather }}>
      {children}
    </OpenWeatherApiContext.Provider>
  );
};

export const UseOpenWeatherApi = () => useContext(OpenWeatherApiContext);
