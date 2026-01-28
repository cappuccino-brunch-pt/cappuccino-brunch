import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: MapPin,
            label: "Morada",
            value: "Braga, Portugal",
            subvalue: "Alameda do Fujacal - 279 - 4705-096",
        },
        {
            icon: Phone,
            label: "Telefone",
            value: "+351 253 049 517",
            subvalue: "Reservas e informações",
        },
        {
            icon: Clock,
            label: "Horário",
            value: "Seg - Dom: 10h - 19h",
            subvalue: "Brunch servido todo o dia",
        },
        {
            icon: Mail,
            label: "Email",
            value: "hello@cappuccinobrunch.pt",
            subvalue: "Respondemos em 24h",
        },
    ];

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block text-sm font-medium text-cappuccino tracking-wider uppercase mb-4">
                        Contacto
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
                        Vem Visitar-nos
                    </h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                        Estamos sempre prontos para te receber. Reserva a tua
                        mesa ou simplesmente aparece — há sempre espaço para
                        mais um café!
                    </p>

                    {/* Contact Info Grid 2x2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-2xl p-6 border border-border shadow-sm flex items-start gap-4 text-left"
                            >
                                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                                    <info.icon className="w-5 h-5 text-cappuccino" />
                                </div>
                                <div>
                                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                                        {info.label}
                                    </span>
                                    <p className="font-semibold text-foreground">
                                        {info.value}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {info.subvalue}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social */}
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-sm text-muted-foreground">
                            Segue-nos:
                        </span>
                        <a
                            href="https://www.instagram.com/cappuccino.brunch/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-cappuccino hover:text-cream transition-all duration-300"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
