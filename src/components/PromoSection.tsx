import { Carousel, CarouselItem } from "@/components/ui/carousel"

const promos = [
    {
        title: "Saldo Gratis!",
        desc: "Saldo SIMS PPOB gratis maksimal Rp25.000 untuk pengguna pertama",
        color: "bg-red-600 text-white",
    },
    {
        title: "Diskon listrik!",
        desc: "Diskon untuk setiap pembayaran listrik prabayar/pascabayar 10%",
        color: "bg-pink-400 text-white",
    },
    {
        title: "Promo makan!",
        desc: "Dapatkan voucher makan di restoran favorit dengan transaksi di sini!",
        color: "bg-sky-400 text-white",
    },
    {
        title: "Cashback 25%",
        desc: "Untuk setiap pembayaran voucher game di atas Rp100.000",
        color: "bg-gray-400 text-white",
    },
    {
        title: "Buy 1 Get 2!",
        desc: "Nikmati promo bulan ini untuk pembelian produk digital tertentu.",
        color: "bg-amber-400 text-white",
    },
]

export default function PromoSection() {
    return (
        <section className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Temukan promo menarik</h3>
            <Carousel className="w-full rounded-xl">
                {promos.map((p, i) => (
                    <CarouselItem key={i}>
                        <div
                            className={`rounded-xl p-8 ${p.color} flex flex-col justify-between min-h-[180px]`}
                        >
                            <div>
                                <h4 className="text-2xl font-bold">{p.title}</h4>
                                <p className="text-sm mt-2 opacity-90">{p.desc}</p>
                            </div>
                            <span className="text-xs mt-3 font-semibold opacity-80">• SIMS PPOB</span>
                        </div>
                    </CarouselItem>
                ))}
            </Carousel>
        </section>
    )
}
