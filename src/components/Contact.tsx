import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <span className="inline-block text-sm font-medium text-cappuccino tracking-wider uppercase mb-4">
                                Contacto
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
                                Vem Visitar-nos
                            </h2>
                            <p className="text-muted-foreground text-lg mb-10">
                                Estamos sempre prontos para te receber. Reserva
                                a tua mesa ou simplesmente aparece — há sempre
                                espaço para mais um café!
                            </p>

                            <div className="space-y-6 mb-10">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
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
                            <div className="flex items-center gap-4">
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

                        {/* Contact Form */}
                        <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
                            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                                Envia-nos uma Mensagem
                            </h3>
                            <p className="text-muted-foreground mb-8">
                                Tens alguma questão ou queres fazer uma reserva
                                especial?
                            </p>

                            <form className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-foreground mb-2 block">
                                            Nome
                                        </label>
                                        <Input
                                            placeholder="O teu nome"
                                            className="rounded-xl bg-background border-border"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-foreground mb-2 block">
                                            Email
                                        </label>
                                        <Input
                                            type="email"
                                            placeholder="email@exemplo.pt"
                                            className="rounded-xl bg-background border-border"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">
                                        Telefone
                                    </label>
                                    <Input
                                        placeholder="+351..."
                                        className="rounded-xl bg-background border-border"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">
                                        Mensagem
                                    </label>
                                    <Textarea
                                        placeholder="Escreve a tua mensagem aqui..."
                                        rows={4}
                                        className="rounded-xl bg-background border-border resize-none"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full rounded-xl"
                                >
                                    Enviar Mensagem
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
