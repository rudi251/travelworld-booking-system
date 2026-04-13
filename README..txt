🌍 TravelWorld Booking System

TravelWorld Booking System adalah aplikasi website booking paket wisata sederhana berbasis HTML + Node.js + Express yang dapat menyimpan data booking pelanggan ke database JSON dan menampilkan dashboard admin.
Project ini cocok digunakan sebagai:

Sistem booking travel sederhana

Sistem manajemen order UMKM travel

Project latihan fullstack beginner–intermediate

Prototype aplikasi travel agency

🚀 Fitur Utama

✅ Landing page TravelWorld
✅ Form booking pelanggan
✅ Kirim data ke backend Node.js
✅ Simpan data ke database JSON
✅ Dashboard admin melihat booking masuk
✅ Login admin (secure access)
✅ Logout admin
✅ Export data booking ke Excel
✅ Timestamp otomatis waktu booking
✅ Struktur project frontend + backend profesional

📂 Struktur Folder Project

project_termux │ ├── frontend │ └── index.html │ └── backend ├── server.js ├── booking.json └── package.json 

⚙️ Teknologi Yang Digunakan

Frontend:

HTML

CSS

JavaScript (Fetch API)

Backend:

Node.js

Express.js

File System (JSON Database)

Environment:

Termux Android atau

Laptop Windows / Linux / Mac

📦 Cara Install Project

Masuk ke folder backend:
cd backend 
Install dependencies:
npm install express 
Jalankan server:
node server.js 
Server akan berjalan di:
http://127.0.0.1:3000 

🌐 Cara Menjalankan Website

Buka browser:
http://127.0.0.1:3000/index.html 
Isi form booking → data otomatis tersimpan ke:
booking.json 

🔐 Login Admin

Buka halaman:
http://127.0.0.1:3000/login 
Login menggunakan:
Username: admin Password: 12345 
Setelah login akan diarahkan ke dashboard admin:
http://127.0.0.1:3000/admin 

📊 Dashboard Admin

Fitur dashboard:

Melihat data booking pelanggan

Melihat tanggal booking

Melihat paket wisata yang dipilih

Export data ke Excel

Link dashboard:
http://127.0.0.1:3000/admin 

📁 Export Data Excel

Untuk download data booking:
http://127.0.0.1:3000/export 
File Excel akan otomatis terdownload.

🧠 Cara Kerja Sistem

Alur sistem:
User isi form booking ↓ Frontend kirim data via Fetch API ↓ Server Express menerima data ↓ Data disimpan ke booking.json ↓ Admin melihat data di dashboard 

🔒 Keamanan Login Admin

Login admin menggunakan session sederhana:
/login /admin /logout 
User yang belum login tidak bisa membuka halaman admin.

📈 Pengembangan Selanjutnya (Recommended Upgrade)

Beberapa upgrade yang bisa ditambahkan:

Status booking (Pending / Confirmed / Cancel)

Database MySQL atau MongoDB

Upload bukti pembayaran

Sistem user login pelanggan

Hosting ke VPS / internet public

Mobile app React Native

👨‍💻 Developer

Project dibuat oleh:
RUDI SUSANTO 
Software Engineer & Industrial Machine Specialist

