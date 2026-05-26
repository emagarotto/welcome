import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Hero />
      <Projects />
      <Stack />
      <Footer />
    </div>
  );
}
