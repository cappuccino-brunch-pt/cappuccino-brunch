import { Heart, Leaf, Star } from "lucide-react";

const About = () => {
    const foundationYear = 2024;
    const yearsOfExperience = new Date().getFullYear() - foundationYear;

    const features = [
        {
            icon: Leaf,
            title: "Ingredientes Frescos",
            description:
                "Produtos locais e sazonais, cuidadosamente selecionados todos os dias.",
        },
        {
            icon: Heart,
            title: "Feito com Amor",
            description:
                "Cada prato é preparado com paixão e atenção aos detalhes.",
        },
        {
            icon: Star,
            title: "Experiência Única",
            description:
                "Um ambiente acolhedor para momentos especiais com quem amas.",
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
                                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400')] bg-cover bg-center" />
                                    </div>
                                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-berry/20 to-berry/5 overflow-hidden">
                                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400')] bg-cover bg-center" />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-sage/20 to-sage/5 overflow-hidden">
                                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400')] bg-cover bg-center" />
                                    </div>
                                    <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 overflow-hidden">
                                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400')] bg-cover bg-center" />
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
                                        Anos de Sabor
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:pl-8">
                            <span className="inline-block text-sm font-medium text-cappuccino tracking-wider uppercase mb-4">
                                A Nossa História
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                                Onde o Café Encontra a Arte
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Nascido da paixão por brunches memoráveis, o
                                Cappuccino Brunch é mais do que um restaurante —
                                é um refúgio para os amantes de boa comida e
                                bons momentos.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-10">
                                Acreditamos que cada refeição deve ser uma
                                celebração. Por isso, combinamos ingredientes
                                frescos com técnicas criativas para criar pratos
                                que são tão bonitos quanto deliciosos. Do nosso
                                café de especialidade às nossas panquecas
                                fluffy, cada detalhe é pensado para te fazer
                                sorrir.
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
