import "./App.css";
import { Hero } from "./components/Hero";
import { NavigationBar } from "./components/NavigationBar";
import { WhyUs } from "./components/WhyUs";

function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <WhyUs />
    </div>
  );
}

export default App;
