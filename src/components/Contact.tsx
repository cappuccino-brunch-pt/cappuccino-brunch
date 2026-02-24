import { getScheduleInfoForContactComponent } from "@/lib/utils";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    const contactInfo = [
        {
            icon: MapPin,
            label: t("contact.features.address.title"),
            value: t("contact.features.address.value"),
            subvalue: t("contact.features.address.subvalue"),
        },
        {
            icon: Phone,
            label: t("contact.features.phone.title"),
            value: t("contact.features.phone.value"),
            subvalue: t("contact.features.phone.subvalue"),
        },
        {
            icon: Clock,
            label: t("contact.features.schedule.title"),
            ...getScheduleInfoForContactComponent(t),
        },
        {
            icon: Mail,
            label: t("contact.features.email.title"),
            value: t("contact.features.email.value"),
            subvalue: t("contact.features.email.subvalue"),
        },
    ];

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block text-sm font-medium text-cappuccino tracking-wider uppercase mb-4">
                        {t("contact.section_title")}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
                        {t("contact.title")}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                        {t("contact.description")}
                    </p>

                    {/* Contact Info Grid 2x2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border shadow-sm flex items-start gap-3 sm:gap-4 text-left"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cappuccino" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                                        {info.label}
                                    </span>
                                    <p className="font-semibold text-foreground text-sm sm:text-base break-words">
                                        {info.value}
                                    </p>
                                    <p className="text-xs sm:text-sm text-muted-foreground break-words">
                                        {info.subvalue}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social */}
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-sm text-muted-foreground">
                            {t("contact.follow_us")}
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
