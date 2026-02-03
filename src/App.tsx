import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';


function App() {
  return (
    <div className="min-h-screen bg-background text-white font-primary overflow-x-hidden flex flex-col">
      <Header />
      <main className="flex flex-col items-center w-full max-w-[1440px] mx-auto gap-40">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
