
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useRef } from 'react';
import './App.css'
import { RiDoubleQuotesR, RiFacebookFill, RiInstagramLine, RiLeafFill, RiLinkedinBoxFill, RiSendPlane2Fill, RiTwitterXLine } from "react-icons/ri";
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Popular from './components/Popular';
import Review from './components/Review';
import Footer from './components/footer';

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
      <Header aboutRef={aboutRef} popularRef={popularRef} reviewRef={reviewRef} homeRef={homeRef} handleFunc={scrollToWithOffset}/>
      <main>
        {/*--------   Home  ---------- */}
        <Home homeRef={homeRef}/>
        {/*--------   Services  --------- */}
        <Services />
        {/*--------   About us ----------*/}
        <About aboutRef={aboutRef}/>
        {/*--------  Popular -------- */}
        <Popular popularRef={popularRef}/>
        {/*--------  Review -------- */}
        <Review reviewRef={reviewRef}/>
      </main>

      {/*--------  Footer -------- */}
      <Footer />

      {/* < ! ---------~~~~~~~~ Scroll Up ~~~~~~~~~~~---- > */}

      {/*--------  Swiper Up -------- */}

      {/*--------  SCROLLREVEAL -------- */}

      {/*--------  mainjs -------- */}
    </>
  )
}

export default App
