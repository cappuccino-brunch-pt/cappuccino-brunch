import chef from "@/assets/history/chef.jpeg";
import food1 from "@/assets/history/food1.jpeg";
import food2 from "@/assets/history/food2.jpeg";
import table from "@/assets/history/table.jpeg";
import { Heart, Leaf, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    const foundationYear = 2024;
    const yearsOfExperience = new Date().getFullYear() - foundationYear;

    const features = [
        {
            icon: Leaf,
            title: t("about.features.title_1"),
            description: t("about.features.description_1"),
        },
        {
            icon: Heart,
            title: t("about.features.title_2"),
            description: t("about.features.description_2"),
        },
        {
            icon: Star,
            title: t("about.features.title_3"),
            description: t("about.features.description_3"),
        },
    ];

    return (
        <section id="about" className="py-24 bg-cream/50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Grid */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-cappuccino/20 to-cappuccino/5 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url(${chef})`,
                                            }}
                                        />
                                    </div>
                                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-berry/20 to-berry/5 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url(${food2})`,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-sage/20 to-sage/5 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url(${food1})`,
                                            }}
                                        />
                                    </div>
                                    <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url(${table})`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-border">
                                <div className="text-center">
                                    <span className="block text-2xl sm:text-4xl font-serif font-bold text-cappuccino">
                                        {yearsOfExperience}+
                                    </span>
                                    <span className="text-xs sm:text-sm text-muted-foreground">
                                        {t("about.years_of_flavour")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:pl-8">
                            <span className="inline-block text-sm font-medium text-cappuccino tracking-wider uppercase mb-4">
                                {t("about.subtitle")}
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                                {t("about.title")}
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                {t("about.description")}
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-10">
                                {t("about.content")}
                            </p>

                            {/* Features */}
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-6 h-6 text-cappuccino" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
