import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import { Menu } from "@/components/Menu";
import Navigation from "@/components/Navigation";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <div id="home">
                    <Hero />
                </div>
                <About />
                <Menu />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
