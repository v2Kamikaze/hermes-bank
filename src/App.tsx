import "./App.css";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
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
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
