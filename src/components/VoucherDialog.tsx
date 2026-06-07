import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CreditCard, Gift, MapPin, Sparkles, Ticket } from "lucide-react";
import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

interface VoucherDialogProps {
    trigger: ReactNode;
}

const VOUCHER_VALUES = [15, 20, 30, 50];
const POPULAR_VALUE = 30;

const VoucherDialog = ({ trigger }: VoucherDialogProps) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const handleContact = () => {
        setOpen(false);
        setTimeout(() => {
            document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
        }, 200);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-warm border-border p-0">
                <div className="relative p-6 sm:p-8">
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-berry/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                    <DialogHeader className="relative text-center space-y-3 mb-6">
                        <div className="mx-auto w-14 h-14 rounded-full bg-berry/15 flex items-center justify-center mb-2">
                            <Gift className="w-7 h-7 text-berry" />
                        </div>
                        <DialogTitle className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                            {t("vouchers.title")}
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground text-base">
                            {t("vouchers.tagline")}
                        </DialogDescription>
                    </DialogHeader>

                    {/* Values grid */}
                    <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                        {VOUCHER_VALUES.map((v) => {
                            const isPopular = v === POPULAR_VALUE;
                            return (
                                <div
                                    key={v}
                                    className={`relative rounded-2xl p-4 text-center border transition-all duration-300 hover:-translate-y-1 ${
                                        isPopular
                                            ? "bg-gradient-to-br from-berry/10 to-gold/10 border-berry/40 shadow-md"
                                            : "bg-card border-border hover:border-cappuccino/40"
                                    }`}
                                >
                                    {isPopular && (
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-berry text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap flex items-center gap-1">
                                            <Sparkles className="w-2.5 h-2.5" />
                                            {t("vouchers.popular")}
                                        </div>
                                    )}
                                    <div className="font-serif text-3xl sm:text-4xl font-semibold text-gradient">
                                        {v}€
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* How to get */}
                    <div className="relative bg-card/60 backdrop-blur rounded-2xl p-5 border border-border mb-6">
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-3 text-center">
                            {t("vouchers.how_to_get")}
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-4 h-4 text-cappuccino" />
                                </div>
                                <p className="text-sm text-foreground/80 pt-1">
                                    {t("vouchers.step_pickup")}
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                                    <CreditCard className="w-4 h-4 text-cappuccino" />
                                </div>
                                <p className="text-sm text-foreground/80 pt-1">
                                    {t("vouchers.step_payment")}
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                                    <Ticket className="w-4 h-4 text-cappuccino" />
                                </div>
                                <p className="text-sm text-foreground/80 pt-1">
                                    {t("vouchers.step_physical")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="relative flex flex-col sm:flex-row gap-3">
                        <Button
                            className="rounded-full flex-1"
                            onClick={handleContact}
                        >
                            {t("vouchers.cta_contact")}
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full flex-1 border-2"
                            asChild
                        >
                            <a
                                href="https://maps.google.com/?q=Cappuccino+Brunch"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("vouchers.cta_directions")}
                            </a>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default VoucherDialog;
