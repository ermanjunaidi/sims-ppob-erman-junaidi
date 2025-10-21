import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import bgsaldo from "@/assets/BackgroundSaldo.png" // pastikan file ada di src/assets/

export default function BalanceCard() {
    const [showBalance, setShowBalance] = useState(false)
    const saldo = "Rp 8.250.000"

    return (
        <div className="bg-red-600 text-white rounded-2xl p-6 w-full lg:w-1/2 shadow-md flex items-center justify-between">
            {/* Kiri: ikon dan teks saldo */}
            <div className="flex items-center gap-3">
                <div>
                    <p className="text-sm text-white/90">Saldo Anda</p>

                    {/* ANIMASI SALDO */}
                    <div className="h-8 flex items-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            {showBalance ? (
                                <motion.h2
                                    key="visible"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl font-semibold tracking-wide"
                                >
                                    {saldo}
                                </motion.h2>
                            ) : (
                                <motion.h2
                                    key="hidden"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl font-semibold tracking-wide"
                                >
                                    Rp ••••••••
                                </motion.h2>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Kanan: tombol toggle */}
            <button
                onClick={() => setShowBalance(!showBalance)}
                className="flex items-center gap-1 text-white/80 hover:text-white text-sm transition"
            >
                {showBalance ? (
                    <>
                        <EyeOff className="w-4 h-4" /> Sembunyikan
                    </>
                ) : (
                    <>
                        <Eye className="w-4 h-4" /> Lihat
                    </>
                )}
            </button>
        </div>
    )
}
