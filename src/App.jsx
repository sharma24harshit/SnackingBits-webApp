
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useRef } from 'react';
import './App.css'
import { RiTwitterXLine } from "react-icons/ri";
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Popular from './components/Popular';
import Review from './components/Review';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';

function App() {
  const aboutRef = useRef(null);
  const popularRef = useRef(null);
  const reviewRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToWithOffset = (ref) => {
    if (!ref?.current) return;
    const yOffset = -10; // navbar height
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <>
      {/*--------------- header -------------- */}
      <Header
        aboutRef={aboutRef}
        popularRef={popularRef}
        reviewRef={reviewRef}
        homeRef={homeRef}
        handleFunc={scrollToWithOffset}
      />
      <main className="pt-16 sm:pt-20">
        {/*--------   Home  ---------- */}
        <RevealOnScroll delay={80}>
          <Home homeRef={homeRef}/>
        </RevealOnScroll>
        {/*--------   Services  --------- */}
        <RevealOnScroll delay={160}>
          <Services />
        </RevealOnScroll>
        {/*--------   About us ----------*/}
        <RevealOnScroll delay={240}>
          <About aboutRef={aboutRef}/>
        </RevealOnScroll>
        {/*--------  Popular -------- */}
        <RevealOnScroll delay={320}>
          <Popular popularRef={popularRef}/>
        </RevealOnScroll>
        {/*--------  Review -------- */}
        <RevealOnScroll delay={400}>
          <Review reviewRef={reviewRef}/>
        </RevealOnScroll>
      </main>

      {/*--------  Footer -------- */}
      <RevealOnScroll delay={480}>
        <Footer />
      </RevealOnScroll>

      {/* < ! ---------~~~~~~~~ Scroll Up ~~~~~~~~~~~---- > */}

      {/*--------  Swiper Up -------- */}

      {/*--------  SCROLLREVEAL -------- */}

      {/*--------  mainjs -------- */}
    </>
  )
}

export default App
