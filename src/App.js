import 'bootstrap/dist/css/bootstrap.min.css';
import SelectHeader from './components/SelectCity';
import WeatherCardsContainer from './container/WeatherCardsContainer/';
import { OpenWeatherApiProvider } from './context/OpenWeatherApiContext';

function App() {
  return (
    <div className='App'>
      <OpenWeatherApiProvider>
        <SelectHeader></SelectHeader>
        <WeatherCardsContainer></WeatherCardsContainer>
      </OpenWeatherApiProvider>
    </div>
  );
}

export default App;
