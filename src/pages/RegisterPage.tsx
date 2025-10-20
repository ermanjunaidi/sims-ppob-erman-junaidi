import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, User, AtSign, Lock } from "lucide-react"
import { Link } from "react-router-dom"
import Illustrasi from "@/assets/Illustrasi.png"

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-center bg-white px-8">
                <Card className="w-full max-w-md shadow-none border-0">
                    <CardHeader className="space-y-2 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                E
                            </div>
                            <span className="font-semibold text-lg">SIMS PPOB ERMAN JUNAIDI</span>
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-800">
                            Lengkapi data untuk <br /> membuat akun
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <div className="relative">
                                <AtSign className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input id="email" type="email" placeholder="masukkan email anda" className="pl-9" />
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input id="nama-depan" placeholder="nama depan" className="pl-9" />
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input id="nama-belakang" placeholder="nama belakang" className="pl-9" />
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Buat Password"
                                    className="pl-9"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-gray-400"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input
                                    id="confirm"
                                    type={showConfirm ? "text" : "password"}
                                    placeholder="Konfirmasi Password"
                                    className="pl-9"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-3 top-2.5 text-gray-400"
                                >
                                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg">
                            Registrasi
                        </Button>

                        <p className="text-center text-sm text-gray-500">
                            Sudah punya akun?{" "}
                            {/* <a href="#" className="text-red-600 hover:underline">
                                login di sini
                            </a> */}
                            <Link to="/login" className="text-red-600 hover:underline">
                                login di sini
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="hidden md:flex items-center justify-center bg-[#FFF5F5]">
                <img
                    src={Illustrasi}
                    alt="Ilustrasi Register"
                    className="object-contain w-[400px] h-auto"
                />
            </div>
        </div>
    )
}
