# 🌟 Assignment Front End Programmer  
### Departement SIMS — PT Nutech Integrasi  

---

## 🎯 **Tujuan**
Menguji kemampuan peserta dalam:
- Mengimplementasikan desain modern & responsif menggunakan **React.js** (Vite preferred)
- Mengelola state menggunakan **Redux Toolkit**
- Mengintegrasikan API publik dari **[Nutech Integrasi THT API](https://api-doc-tht.nutech-integrasi.com/)**
- Menerapkan praktik clean code, reusable component, dan animasi halus (UI/UX focus)

---

## 🧩 **Teknologi Wajib**
| Kategori | Teknologi |
|-----------|------------|
| Framework | React.js (Vite) |
| State Management | Redux Toolkit |
| Styling | Tailwind CSS / Shadcn UI |
| Animasi | Framer Motion |

---

## 🧠 **Tugas Utama**

### 1. 🔐 **Login Page**
- Buat halaman login dengan validasi sederhana (email & password).
- Setelah login berhasil (menggunakan endpoint API THT), simpan token ke Redux state.
- Redirect ke halaman dashboard.

### 2. 💰 **Dashboard**
Tampilkan informasi berikut:
- **Saldo Pengguna**
  - Data diambil dari API.
  - Tampilkan dengan animasi toggle (lihat/sembunyikan saldo) menggunakan Framer Motion.
- **Riwayat Transaksi**
  - Ambil data transaksi pengguna dari endpoint API.
  - Tampilkan dengan desain clean + list atau card.

### 3. 💳 **Top Up Page**
- Form input nominal top-up.
- Kirim request ke endpoint API (POST).
- Setelah sukses, update saldo di Redux store secara realtime.

### 4. 👤 **Profile Page**
- Ambil data pengguna dari API.
- Tampilkan nama, email, dan avatar.
- Sediakan tombol logout untuk menghapus token dari Redux & redirect ke login.

---

## 🖼️ **Desain & UX Requirement**
- Gunakan **Tailwind CSS** atau **Shadcn UI** untuk gaya modern dan konsisten.
- Tambahkan **efek animasi halus** pada transisi halaman dan tampilan data.
- Navigasi harus **responsif di semua ukuran layar (mobile-first)**.
- Warna utama:  
  - 🔴 Merah (#E63946)  
  - ⚪ Putih (#FFFFFF)  
  - ⚫ Abu gelap (#1E1E1E)  

---

