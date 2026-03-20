import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <PageTransition>
      <div className="home">
        <div className="home-top">
          <Logo className="home-logo" size={60} />
          <span className="home-year">{year}</span>
        </div>
        <Hero />
        <Footer />
      </div>
    </PageTransition>
  );
}

