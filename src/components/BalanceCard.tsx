import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import BackgroundSaldo from "@/assets/BackgroundSaldo.png"

export default function BalanceCard() {
    const [showBalance, setShowBalance] = useState(false)
    const saldo = "Rp 108.250.000"

    return (
        <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden">
            <img
                src={BackgroundSaldo}
                alt="background saldo"
                className="w-full h-48 md:h-40 object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black/30 backdrop-blur-[2px] rounded-2xl">
                <div>
                    <p className="text-sm text-white/90">Saldo Anda</p>
                    <div className="h-8 flex items-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            {showBalance ? (
                                <motion.h2
                                    key="visible"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl font-semibold tracking-wide text-white"
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
                                    className="text-2xl font-semibold tracking-wide text-white"
                                >
                                    Rp ••••••••
                                </motion.h2>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <button
                    onClick={() => setShowBalance(!showBalance)}
                    className="flex items-center gap-1 text-white/80 hover:text-white text-sm transition self-start"
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
        </div>
    )
}
