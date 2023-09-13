import HomeHero from "./components/HomeHero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Freelance from "./components/Freelance";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";


export default function Home() {
    return (
        <main>
            <Nav />
            <HomeHero />
            <About />
            <Projects />
            <Freelance />
            <Experience />
            <Footer />
        </main>
    );
}
