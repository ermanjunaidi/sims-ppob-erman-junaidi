import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Illustrasi from "@/assets/Illustrasi.png"



export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email && password) {
            localStorage.setItem("token", "dummy-token")
            navigate("/homepage")
        } else {
            alert("Masukkan email dan password!")
        }
    }

    return (
        <div className="min-h-screen grid md:grid-cols-2">
            <div className="flex flex-col justify-center items-center px-8 md:px-16 bg-white">
                <div className="w-full max-w-md space-y-6">
                    <CardHeader className="space-y-2 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                E
                            </div>
                            <span className="font-semibold text-lg">SIMS PPOB ERMAN JUNAIDI</span>
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-800">
                            Masuk atau Buat Akun <br /> Untuk Memulais
                        </CardTitle>
                    </CardHeader>

                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-1">
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="masukan email anda"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="space-y-1">
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="masukan password anda"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                            Masuk
                        </Button>

                        <p className="text-sm text-center text-gray-600">
                            belum punya akun?{" "}
                            <Link to="/register" className="text-red-600 font-medium hover:underline">
                                registrasi di sini
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            <div className="hidden md:flex items-center justify-center bg-red-50">
                <img src={Illustrasi} alt="Login Illustration" className="max-w-md w-full object-contain" />
            </div>
        </div>
    )
}
