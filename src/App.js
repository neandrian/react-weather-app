import Content from "./components/Content";
import Header from "./components/Header";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="flex flex-col columns-2xl mx-auto">
        <Header />
        {/* sd */}
        <Content />
      </div>
    </WeatherProvider>
  );
}

export default App;
