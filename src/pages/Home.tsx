import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <PageTransition>
      <div className="home">
        <Hero />
        <Footer />
      </div>
    </PageTransition>
  );
}

