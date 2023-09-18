import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Hero } from "./components/Hero";
import { NavigationBar } from "./components/NavigationBar";
import { WhyUs } from "./components/WhyUs";

function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <WhyUs />
      <AboutUs />
    </div>
  );
}

export default App;
