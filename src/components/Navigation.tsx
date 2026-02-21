import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Navigation = () => {
    const { t } = useTranslation("translations");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: t("navigation.home"), href: "#home" },
        { label: t("navigation.about"), href: "#about" },
        { label: t("navigation.menu"), href: "#menu" },
        { label: t("navigation.gallery"), href: "#gallery" },
        { label: t("navigation.contact"), href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6",
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2">
                        <span className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                            {t("cappuccino")}
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cappuccino group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://www.instagram.com/cappuccino.brunch/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-cappuccino hover:text-cream transition-all duration-300"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <Button className="rounded-full px-6" asChild>
                            <a href="#contact">{t("reserve")}</a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-10 h-10 rounded-full bg-cream flex items-center justify-center"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5 text-foreground" />
                        ) : (
                            <Menu className="w-5 h-5 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "md:hidden overflow-hidden transition-all duration-500",
                        isMobileMenuOpen
                            ? "max-h-fit opacity-100 mt-6"
                            : "max-h-0 opacity-0",
                    )}
                >
                    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-foreground hover:text-cappuccino transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <hr className="border-border my-2" />
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.instagram.com/cappuccino.brunch/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-cream flex items-center justify-center"
                                >
                                    <Instagram className="w-5 h-5 text-foreground" />
                                </a>
                                <Button className="rounded-full flex-1" asChild>
                                    <a
                                        href="#contact"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {t("reserve_table")}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
