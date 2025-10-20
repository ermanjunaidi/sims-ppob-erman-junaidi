import Navbar from "@/components/Navbar"
import BalanceCard from "@/components/BalanceCard"
import ServicesGrid from "@/components/ServicesGrid"
import PromoSection from "@/components/PromoSection"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="px-10 py-6">
                <div className="flex items-center gap-6">
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
                <BalanceCard />
                <ServicesGrid />
                <PromoSection />
            </main>
        </div>
    )
}
