// src/pages/TopUpPage.tsx
import { useState } from "react"
import Navbar from "@/components/Navbar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import BalanceCard from "@/components/BalanceCard"

export default function TopUpPage() {
    const [amount, setAmount] = useState("10000")
    const quickAmounts = ["10000", "20000", "50000", "100000", "250000", "500000"]

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="px-10 py-6">
                <div className="flex items-start justify-between flex-wrap gap-6">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://i.pravatar.cc/80"
                            alt="avatar"
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <p className="text-gray-600">Selamat datang,</p>
                            <h2 className="text-2xl font-semibold">Kristanto Wibowo</h2>
                        </div>
                    </div>
                    <BalanceCard />
                </div>

                <div className="mt-12 max-w-5xl">
                    <p className="text-gray-700 mb-2">Silahkan masukan</p>
                    <h3 className="text-2xl font-semibold mb-6">Nominal Top Up</h3>

                    <div className="flex flex-wrap items-center gap-3">
                        <Input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full sm:w-[400px]"
                            placeholder="Masukkan nominal"
                        />
                        <div className="flex flex-wrap gap-2">
                            {quickAmounts.map((amt) => (
                                <Button
                                    key={amt}
                                    variant="outline"
                                    onClick={() => setAmount(amt)}
                                >
                                    Rp{Number(amt).toLocaleString("id-ID")}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Button className="mt-6 w-full sm:w-[400px] bg-red-600 hover:bg-red-700 text-white font-semibold">
                        Top Up
                    </Button>
                </div>
            </main>
        </div>
    )
}
