import { AtSign } from "lucide-react"

export default function Navbar() {
    return (
        <header className="flex justify-between items-center px-10 py-4 border-b bg-white">
            <div className="flex items-center gap-2">
                <div className="bg-red-600 text-white px-2 py-1 rounded-md flex items-center gap-1 font-semibold">
                    <AtSign className="w-4 h-4" />
                    SIMS PPOB
                </div>
            </div>

            <nav className="flex gap-8 text-gray-700 font-medium">
                <a href="#" className="hover:text-red-600">Top Up</a>
                <a href="#" className="hover:text-red-600">Transaction</a>
                <a href="#" className="hover:text-red-600">Akun</a>
            </nav>
        </header>
    )
}
