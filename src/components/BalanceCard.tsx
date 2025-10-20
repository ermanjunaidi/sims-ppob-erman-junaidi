import { Eye } from "lucide-react"

export default function BalanceCard() {
    return (
        <div className="bg-red-600 text-white rounded-2xl p-6 w-full max-w-md mt-6">
            <p className="text-sm mb-2">Saldo anda</p>
            <h2 className="text-3xl font-semibold tracking-wide">Rp ••••••••</h2>
            <button className="flex items-center gap-1 text-white/80 mt-2 hover:text-white text-sm">
                Lihat Saldo <Eye className="w-4 h-4" />
            </button>
        </div>
    )
}
