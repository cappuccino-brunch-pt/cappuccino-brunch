import gallery1 from "@/assets/gallery/1.jpeg";
import gallery2 from "@/assets/gallery/2.jpeg";
import gallery3 from "@/assets/gallery/3.jpeg";
import gallery4 from "@/assets/gallery/4.jpeg";
import gallery5 from "@/assets/gallery/5.jpeg";
import gallery6 from "@/assets/gallery/6.jpeg";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_HANDLE } from "@/constants";
import { Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const galleryImages = [
    { url: gallery1, alt: "Galeria 1" },
    { url: gallery2, alt: "Galeria 2" },
    { url: gallery3, alt: "Galeria 3" },
    { url: gallery4, alt: "Galeria 4" },
    { url: gallery5, alt: "Galeria 5" },
    { url: gallery6, alt: "Galeria 6" },
];

const Gallery = () => {
    const { t } = useTranslation();

    return (
        <section id="gallery" className="py-24 bg-cream/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-sm font-medium text-cappuccino tracking-wider uppercase mb-4">
                        {INSTAGRAM_HANDLE}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
                        {t("gallery.title")}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t("gallery.description")}
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 max-w-5xl mx-auto mb-8 sm:mb-12">
                    {galleryImages.map((image, index) => (
                        <a
                            key={index}
                            href="https://www.instagram.com/cappuccino.brunch/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-2xl overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${image.url})` }}
                            />
                            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-all duration-300 flex items-center justify-center">
                                <Instagram className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Instagram CTA */}
                <div className="text-center">
                    <Button
                        asChild
                        size="lg"
                        className="rounded-full px-8 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white border-0"
                    >
                        <a
                            href="https://www.instagram.com/cappuccino.brunch/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <Instagram className="w-5 h-5" />
                            {t("actions.follow_on_instagram")}
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
