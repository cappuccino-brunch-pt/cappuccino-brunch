import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import { Menu } from "@/components/Menu";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
    const location = useLocation();

    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        setTimeout(scrollToHash, 100);
    }, [location.hash]);

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
