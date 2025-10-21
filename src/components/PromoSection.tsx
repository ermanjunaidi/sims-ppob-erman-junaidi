import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const promos = [
    {
        title: "Saldo Gratis!",
        desc: "Saldo gratis Rp25.000 untuk pengguna pertama.",
        color: "bg-red-600 text-white",
    },
    {
        title: "Diskon Listrik!",
        desc: "Hemat 10% untuk pembayaran listrik.",
        color: "bg-pink-500 text-white",
    },
    {
        title: "Promo Makan!",
        desc: "Voucher restoran favoritmu menanti!",
        color: "bg-sky-500 text-white",
    },
    {
        title: "Cashback 25%",
        desc: "Dapatkan cashback untuk transaksi game!",
        color: "bg-gray-500 text-white",
    },
    {
        title: "Buy 1 Get 2!",
        desc: "Promo spesial bulan ini untukmu.",
        color: "bg-amber-500 text-white",
    },
    {
        title: "Pulsa Bonus!",
        desc: "Beli pulsa, dapat bonus saldo e-wallet!",
        color: "bg-green-600 text-white",
    },
]

export default function PromoSection() {
    const plugin = React.useRef(Autoplay({ delay: 3500, stopOnInteraction: false }))

    return (
        <section className="mt-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-lg font-semibold mb-4">Temukan promo menarik</h3>
                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="h-[100px] sm:h-[110px] md:h-[120px]">
                        {promos.map((p, i) => (
                            <CarouselItem
                                key={i}
                                className="basis-[90%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
                            >
                                <div
                                    className={`rounded-xl ${p.color} p-3 sm:p-4 h-full flex flex-col justify-between shadow-md`}
                                >
                                    <div>
                                        <h4 className="text-sm sm:text-base font-bold leading-tight">
                                            {p.title}
                                        </h4>
                                        <p className="text-[10px] sm:text-xs mt-1 opacity-90">{p.desc}</p>
                                    </div>
                                    <span className="text-[9px] sm:text-[10px] mt-1 font-semibold opacity-80">
                                        • SIMS PPOB
                                    </span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-0 bg-white/60 hover:bg-white" />
                    <CarouselNext className="right-0 bg-white/60 hover:bg-white" />
                </Carousel>
            </div>
        </section>
    )
}
