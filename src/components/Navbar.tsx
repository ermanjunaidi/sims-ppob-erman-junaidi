import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "@/assets/logo.png"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="flex justify-between items-center px-6 md:px-10 py-4 border-b bg-white relative z-50">
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-7 h-7" />
                <span className="font-semibold text-lg">SIMS PPOB</span>
            </div>
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-gray-700"
            >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
                <a href="#" className="hover:text-red-600 transition">Top Up</a>
                <a href="#" className="hover:text-red-600 transition">Transaction</a>
                <a href="#" className="hover:text-red-600 transition">Akun</a>
            </nav>
            <AnimatePresence>
                {open && (
                    <motion.nav
                        key="mobileMenu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col items-center gap-4 py-4 text-gray-700 font-medium md:hidden"
                    >
                        <a
                            href="#"
                            onClick={() => setOpen(false)}
                            className="hover:text-red-600 transition"
                        >
                            Top Up
                        </a>
                        <a
                            href="#"
                            onClick={() => setOpen(false)}
                            className="hover:text-red-600 transition"
                        >
                            Transaction
                        </a>
                        <a
                            href="#"
                            onClick={() => setOpen(false)}
                            className="hover:text-red-600 transition"
                        >
                            Akun
                        </a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}
