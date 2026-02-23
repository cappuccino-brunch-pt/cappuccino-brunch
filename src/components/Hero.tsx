import { Button } from "@/components/ui/button";
import { Clock, Coffee, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation("translations");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cappuccino/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-berry/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-cream border border-border animate-fade-in">
                        <Coffee className="w-4 h-4 text-cappuccino" />
                        <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                            {t("hero.tag")}
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1
                        className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 animate-fade-in"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <span className="text-foreground">
                            {t("cappuccino")}
                        </span>
                        <br />
                        <span className="text-gradient italic">
                            {t("brunch")}
                        </span>
                    </h1>

                    {/* Tagline */}
                    <p
                        className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in px-2"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {t("hero.description")}
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                            asChild
                        >
                            <a href="#menu">{t("actions.view_menu")}</a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 w-full sm:w-auto"
                            asChild
                        >
                            <a href="#contact">{t("actions.reserve_table")}</a>
                        </Button>
                    </div>

                    {/* Info cards */}
                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm animate-fade-in"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-cappuccino" />
                            </div>
                            <span>{t("hero.location")}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                                <Clock className="w-5 h-5 text-cappuccino" />
                            </div>
                            {/* TODO add translation for schedule */}
                            <span>Seg-Dom: 10h - 19h</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-cappuccino/30 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-cappuccino/50 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
