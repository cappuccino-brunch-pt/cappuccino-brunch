import { INSTAGRAM_HANDLE } from "@/constants";
import { Coffee, Heart, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-espresso text-cream py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pb-12 border-b border-cream/10">
                        {/* Logo */}
                        <div className="text-center md:text-left">
                            <a
                                href="#home"
                                className="inline-flex items-center gap-2 mb-4"
                            >
                                <Coffee className="w-6 h-6 sm:w-8 sm:h-8" />
                                <span className="font-serif text-2xl sm:text-3xl font-semibold">
                                    {t("title")}
                                </span>
                            </a>
                            <p className="text-cream/60 max-w-xs">
                                {t("footer.description")}
                            </p>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap justify-center gap-8 text-sm">
                            <a
                                href="#home"
                                className="text-cream/60 hover:text-cream transition-colors"
                            >
                                {t("navigation.home")}
                            </a>
                            <a
                                href="#about"
                                className="text-cream/60 hover:text-cream transition-colors"
                            >
                                {t("navigation.about")}
                            </a>
                            <a
                                href="#menu"
                                className="text-cream/60 hover:text-cream transition-colors"
                            >
                                {t("navigation.menu")}
                            </a>
                            <a
                                href="#gallery"
                                className="text-cream/60 hover:text-cream transition-colors"
                            >
                                {t("navigation.gallery")}
                            </a>
                            <a
                                href="#contact"
                                className="text-cream/60 hover:text-cream transition-colors"
                            >
                                {t("navigation.contact")}
                            </a>
                        </div>

                        {/* Social */}
                        <div>
                            <a
                                href="https://www.instagram.com/cappuccino.brunch/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                                <span className="text-sm">
                                    {INSTAGRAM_HANDLE}
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/40">
                        <p>{t("footer.rights", { year: currentYear })}</p>
                        <p className="flex items-center gap-1">
                            {t("footer.made_with")}
                            <Heart className="w-4 h-4 text-berry fill-berry" />{" "}
                            {t("footer.made_in")}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
