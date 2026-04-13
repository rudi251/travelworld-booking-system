const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB_FILE = "booking.json";

// LOGIN SEDERHANA
const USERNAME = "rudi susanto";
const PASSWORD = "ellyfa12";

let isLogin = false;


/*
========================================
API TERIMA BOOKING
========================================
*/
app.post("/booking", (req, res) => {

  const dataBaru = req.body;

  console.log("Booking masuk:", dataBaru);

  let dataLama = [];

  if (fs.existsSync(DB_FILE)) {
    let file = fs.readFileSync(DB_FILE);
    dataLama = JSON.parse(file);
  }

  dataLama.push(dataBaru);

  fs.writeFileSync(DB_FILE, JSON.stringify(dataLama, null, 2));

  res.json({
    status: "sukses",
    message: "Booking tersimpan"
  });

});


/*
========================================
HALAMAN LOGIN
========================================
*/
app.get("/login", (req, res) => {

  res.send(`
  <html>
  <head>
    <title>Login Admin</title>

    <style>
      body{
        background:#111;
        color:white;
        font-family:Arial;
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
      }

      form{
        background:#222;
        padding:30px;
        border-radius:10px;
      }

      input{
        display:block;
        margin:10px 0;
        padding:10px;
        width:200px;
      }

      button{
        padding:10px;
        background:gold;
        border:none;
        cursor:pointer;
      }
    </style>

  </head>

  <body>

  <form method="POST" action="/login">
    <h2>🔐 Login Admin</h2>

    <input name="username" placeholder="Username">
    <input name="password" type="password" placeholder="Password">

    <button>Login</button>
  </form>

  </body>
  </html>
  `);

});


/*
========================================
PROSES LOGIN
========================================
*/
app.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {

    isLogin = true;

    res.redirect("/admin");

  } else {

    res.send("Login gagal ❌");

  }

});


/*
========================================
LOGOUT
========================================
*/
app.get("/logout", (req, res) => {

  isLogin = false;

  res.redirect("/login");

});


/*
========================================
HALAMAN ADMIN (PROTECTED)
========================================
*/
app.get("/admin", (req, res) => {

  if (!isLogin) {

    return res.redirect("/login");

  }

  let data = [];

  if (fs.existsSync(DB_FILE)) {

    let file = fs.readFileSync(DB_FILE);

    data = JSON.parse(file);

  }

  let html = `
  <html>
  <head>
    <title>Admin TravelWorld</title>

    <style>
      body{
        font-family:Arial;
        background:#111;
        color:white;
        padding:20px;
      }

      table{
        width:100%;
        border-collapse:collapse;
      }

      th, td{
        border:1px solid #444;
        padding:10px;
      }

      th{
        background:gold;
        color:black;
      }

      tr:nth-child(even){
        background:#222;
      }

      button{
        padding:10px;
        background:gold;
        border:none;
        border-radius:8px;
        cursor:pointer;
        margin-bottom:15px;
      }
    </style>

  </head>

  <body>

    <h2>📊 Data Booking Masuk</h2>

    <a href="/export">
      <button>⬇ Download Excel</button>
    </a>

    <a href="/logout">
      <button>Logout</button>
    </a>

    <table>

      <tr>
        <th>Nama</th>
        <th>No HP</th>
        <th>Tanggal</th>
        <th>Paket</th>
      </tr>
  `;

  data.forEach(item => {

    let paket = item.cart
      .map(p => `${p.name} (${p.qty}x)`)
      .join(", ");

    html += `
      <tr>
        <td>${item.nama}</td>
        <td>${item.hp}</td>
        <td>${item.tanggal}</td>
        <td>${paket}</td>
      </tr>
    `;

  });

  html += `
    </table>

  </body>
  </html>
  `;

  res.send(html);

});


/*
========================================
EXPORT DATA (PROTECTED)
========================================
*/
app.get("/export", (req, res) => {

  if (!isLogin) {

    return res.redirect("/login");

  }

  let data = [];

  if (fs.existsSync(DB_FILE)) {

    let file = fs.readFileSync(DB_FILE);

    data = JSON.parse(file);

  }

  let csv = "Nama,No HP,Tanggal,Paket\n";

  data.forEach(item => {

    let paket = item.cart
      .map(p => `${p.name} (${p.qty}x)`)
      .join(" | ");

    csv += `${item.nama},${item.hp},${item.tanggal},${paket}\n`;

  });

  res.header("Content-Type", "text/csv");

  res.attachment("booking_travelworld.csv");

  res.send(csv);

});


/*
========================================
TEST SERVER
========================================
*/
app.get("/", (req, res) => {

  res.send("Server TravelWorld aktif 🚀");

});


/*
========================================
START SERVER
========================================
*/
app.listen(3000, () => {

  console.log("Server jalan di http://127.0.0.1:3000");

});
