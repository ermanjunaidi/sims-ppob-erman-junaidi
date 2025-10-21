import Navbar from "@/components/Navbar"
import BalanceCard from "@/components/BalanceCard"
import ServicesGrid from "@/components/ServicesGrid"
import PromoSection from "@/components/PromoSection"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="px-10 py-6">
                {/* Profil dan saldo sejajar */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://i.pravatar.cc/80"
                            alt="avatar"
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <p className="text-gray-600">Selamat datang,</p>
                            <h2 className="text-2xl font-semibold">Erman Junaidi</h2>
                        </div>
                    </div>

                    {/* Kartu saldo panjang */}
                    <div className="flex-1 flex justify-end">
                        <BalanceCard />
                    </div>
                </div>

                <ServicesGrid />
                <PromoSection />
            </main>
        </div>
    )
}
