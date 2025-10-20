import React from "react"

const services = [
    { name: "PBB", icon: "🏠" },
    { name: "Listrik", icon: "⚡" },
    { name: "Pulsa", icon: "📱" },
    { name: "PDAM", icon: "💧" },
    { name: "PGN", icon: "🔥" },
    { name: "TV Langganan", icon: "📺" },
    { name: "Musik", icon: "🎵" },
    { name: "Voucher Game", icon: "🎮" },
    { name: "Voucher Makanan", icon: "🍔" },
    { name: "Kurban", icon: "🐄" },
    { name: "Zakat", icon: "💰" },
    { name: "Paket Data", icon: "📶" },
]

export function ServiceGrid() {
    return (
        <div className="mt-8 px-4">
            <h2 className="text-lg font-semibold mb-4">Layanan</h2>
            <div className="
        grid 
        grid-cols-3 
        sm:grid-cols-4 
        md:grid-cols-6 
        lg:grid-cols-8 
        xl:grid-cols-10 
        gap-4 
        text-center
      ">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="flex flex-col items-center justify-center bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition"
                    >
                        <div className="text-3xl">{service.icon}</div>
                        <div className="text-xs mt-1 font-medium">{service.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
