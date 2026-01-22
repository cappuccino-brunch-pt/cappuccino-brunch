import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600",
    alt: "Brunch spread with fresh pastries"
  },
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
    alt: "Latte art cappuccino"
  },
  {
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600",
    alt: "Fluffy pancakes with berries"
  },
  {
    url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600",
    alt: "Avocado toast brunch"
  },
  {
    url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600",
    alt: "French toast with fruits"
  },
  {
    url: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600",
    alt: "Coffee and croissant"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-cappuccino tracking-wider uppercase mb-4">
            @cappuccino.brunch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Momentos que Merecem Partilha
          </h2>
          <p className="text-muted-foreground text-lg">
            Segue-nos no Instagram para não perderes nenhuma novidade e 
            partilha os teus momentos connosco!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
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
              Seguir no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
