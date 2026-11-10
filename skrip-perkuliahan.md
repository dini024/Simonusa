---
title: "Simonusa · Skrip Perkuliahan"
subtitle: "Computational Chemistry dan DFT: Pertemuan 0 (Linux) dan 14 pertemuan (90 menit per pertemuan)"
author: "Simulation and Modeling of Nusantara Atoms"
lang: id-ID
---

**Cara memakai.** Satu bab = satu pertemuan 90 menit. Blok **Ucapkan** dibacakan hampir apa adanya; **Lakukan** adalah tindakan pada halaman (proyektor); **Tanyakan** disertai jawaban yang diharapkan; bagian *cadangan* dipakai bila waktu lebih. Waktu tiap segmen sudah termasuk demo, diskusi, dan latihan, sehingga total sekitar 90 menit.

**Daftar Isi**

0. Pertemuan 0 · Dasar Linux: Pre-test dan Latihan Terminal
1. Pertemuan 1 · Pengantar Computational Chemistry
2. Pertemuan 2 · Persamaan Schrödinger
3. Pertemuan 3 · Atom Hidrogen dan Orbital
4. Pertemuan 4 · Hartree–Fock dan Proses SCF
5. Pertemuan 5 · Korelasi Elektron: MP2, CI, Coupled Cluster
6. Pertemuan 6 · Basis Set
7. Pertemuan 7 · Force Field, Dinamika Molekul, dan Monte Carlo
8. Pertemuan 8 · Permukaan Energi Potensial, Optimasi, dan Frekuensi
9. Course 2 · Pertemuan D1 · Hohenberg–Kohn dan Kohn–Sham
10. Course 2 · Pertemuan D2 · Fungsional, Tangga Jacob, dan Dispersi
11. Course 2 · Pertemuan D3 · Praktik DFT dengan ORCA
12. Course 2 · Pertemuan D4 · Praktik DFT dengan Gaussian
13. Course 2 · Pertemuan D5 · Membaca Output, Kalkulator Energi, dan Troubleshooting
14. Course 2 · Pertemuan D6 · TD-DFT dan Spektrum UV-Vis

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Pertemuan 0 · Dasar Linux: Pre-test dan Latihan Terminal

**Durasi:** 90 menit. **Halaman:** Pre-test, Terminal. **Capaian belajar:** (1) mengukur level Linux kelas; (2) berlatih perintah yang dibutuhkan untuk kerja HPC; (3) menjalankan alur kerja ORCA lengkap (input, job, antrean, keluaran) dalam simulasi yang aman.

| Menit | Kegiatan |
|---|---|
| 0–5 | Pemantik |
| 5–25 | Pre-test (individu) |
| 25–35 | Bahas: kesalahan umum |
| 35–75 | Misi terminal 1–6 |
| 75–88 | Misi terminal 7–10 dan unduh |
| 88–90 | Rangkuman dan tugas |

### 0–5 Pemantik

> **Ucapkan:** "Kimia komputasi dikerjakan di cluster Linux, dan hampir tidak ada yang diklik. Sebelum perhitungan pertama, mari lihat seberapa nyaman kita dengan baris perintah. Ini diagnostik, bukan ujian: tidak ada nilai yang dihitung."

### 5–25 Pre-test

- **Lakukan:** buka halaman Pre-test; mahasiswa mengerjakan sendiri 15 menit. Setelah tiap jawaban halaman menampilkan jawaban benar dan penjelasan singkat, sehingga tes ini juga mengajar.
- **Tanyakan sesudahnya:** "Siapa yang skornya di bawah 60%? Siapa di atas 85%?" Gunakan kelompok itu untuk memasangkan mahasiswa berpengalaman dengan pemula.

### 25–35 Bahas

> **Ucapkan:** "Kesalahan paling umum: beda satu dan dua tanda panah, beda rm dan rmdir, beda find dan grep. Satu tanda panah menimpa berkas, dua menambahkan. rm -r tidak bisa dibatalkan. find mencari nama berkas, grep mencari di dalam berkas."

- **Lakukan:** proyeksikan tabel tinjauan seorang sukarelawan dan bahas dua jawaban yang salah.

### 35–75 Misi terminal 1–6

> **Ucapkan:** "Terminal ini simulasi: JavaScript di browser Anda, tidak ada ORCA sungguhan dan tidak ada yang dikirim ke BRIN. Karena itu Anda boleh salah sebebasnya. Ikuti misi di sebelah kanan."

- **Lakukan:** kerjakan misi 1 bersama (pwd, ls), lalu biarkan mahasiswa melanjutkan sendiri.
- **Pelajaran yang disisipkan:** minta mereka menjalankan <code>orca water.inp</code> sebelum memuat modul. Mereka akan melihat "command not found". **Tanyakan:** "Mengapa?" **Jawaban:** perangkat lunak di cluster disediakan lewat modul; muat dulu.
- **Tanyakan:** "Mengapa mengirim dengan sbatch, bukan langsung menjalankan orca?" **Jawaban:** login node dipakai bersama; kerja berat lewat penjadwal.

### 75–88 Misi terminal 7–10

> **Ucapkan:** "Sekarang baca keluaran seperti di cluster sungguhan: grep untuk energi, grep dengan minus A untuk membaca tabel orbital, dan grep untuk cm minus satu guna melihat frekuensi. Frekuensi negatif berarti mode imajiner."

- **Lakukan:** tiap mahasiswa menemukan energi HOMO dan LUMO dan menyatakan ada atau tidaknya frekuensi imajiner.
- **Lakukan:** jalankan <code>download water.out</code>, unggah ke Results Analyzer, dan bandingkan dengan yang dibaca di terminal.
- **Catatan:** angka dibangkitkan untuk latihan; tekankan bahwa tata letaknya asli, nilainya bukan.

### 88–90 Rangkuman dan tugas

**Cek pemahaman.** (1) Perintah untuk melihat job di antrean? *squeue.* (2) Cara membaca baris energi saja? *grep.* (3) Mengapa memuat modul? *Agar perangkat lunak tersedia.*

**Tugas.** Ulangi pre-test dan catat peningkatannya. Tulis urutan perintah yang akan Anda pakai untuk menjalankan satu job ORCA di cluster sungguhan.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Pertemuan 1 · Pengantar Computational Chemistry

**Durasi:** 90 menit. **Halaman:** Kursus → Bab 1. **Capaian belajar:** (1) menyebut tiga fungsi simulasi: menjelaskan, memprediksi, dan memandu eksperimen; (2) memilih kelas metode berdasarkan ukuran sistem dan skala waktu; (3) menilai prediksi dengan membandingkannya dengan eksperimen. **Persiapan:** buka Bab 1 di proyektor, mode layar penuh; siapkan kertas untuk diskusi berpasangan.

**Cara memakai naskah.** Blok **Ucapkan** dibacakan hampir apa adanya. **Lakukan** adalah tindakan pada halaman. **Tanyakan** disertai jawaban yang diharapkan. Bagian bertanda *cadangan* dipakai jika waktu lebih; bagian bertanda *potong* dilewati jika waktu kurang.

| Menit | Kegiatan |
|---|---|
| 0–8 | Pemantik |
| 8–20 | 1.1 Definisi dan bidang aplikasi |
| 20–32 | 1.2 Peta metode |
| 32–52 | 1.3a H₂ dari prinsip pertama |
| 52–62 | 1.3b Hückel dan warna |
| 62–68 | 1.3c Spektrum simulasi vs eksperimen |
| 68–82 | 1.4 Simulasi sebagai pedoman eksperimen |
| 82–90 | 1.5 Alur riset, rangkuman, tugas |

### 0–8 Pemantik

> **Ucapkan:** "Selamat pagi. Sebelum kita mulai, bayangkan Anda punya 1,6 juta kandidat molekul untuk layar OLED yang lebih efisien, dan satu bulan. Mensintesis dan mengukur satu molekul bisa memakan berhari-hari sampai berminggu-minggu. Bagaimana Anda memilih molekul mana yang dibuat? Diskusikan dengan teman di sebelah Anda selama dua menit."

- **Lakukan:** jam dua menit; kumpulkan tiga jawaban, tulis di papan.
- **Jawaban yang diharapkan:** intuisi, literatur, coba acak. Arahkan: "Semua itu bisa, tetapi lambat. Hari ini kita lihat cara ketiga: menghitung dulu."

> **Ucapkan:** "Perkuliahan ini menjawab tiga pertanyaan: apa itu kimia komputasi, metode apa saja yang ada, dan mengapa hasilnya cukup dipercaya untuk memandu eksperimen."

### 8–20 Definisi dan bidang aplikasi (1.1)

> **Ucapkan:** "Kimia komputasi mengubah hukum fisika, yaitu mekanika kuantum, mekanika klasik, dan mekanika statistik, menjadi algoritma. Hasilnya: struktur, energi, sifat, dan perilaku molekul serta material. Ingat satu hal: simulasi tidak menggantikan eksperimen. Ia melakukan tiga pekerjaan. Pertama, menjelaskan mengapa sesuatu terjadi. Kedua, memprediksi apa yang belum diukur. Ketiga, menyaring apa yang layak dicoba."

- **Lakukan:** gulir ke kartu bidang. Minta tiap mahasiswa memilih satu kartu dan menyebut data yang ia butuhkan dari simulasi.
- **Contoh jawaban:** baterai → tegangan dan difusi ion Li; penyimpanan H₂ → isoterm adsorpsi dan energi ikat; spektroskopi → penugasan pita IR/UV-Vis; katalisis → barrier reaksi.

> **Ucapkan:** "Perhatikan: hampir semua bidang sains material dan kehidupan memakai data simulasi. Ada yang memakai untuk keputusan desain, ada yang untuk menafsirkan spektrum. Alasan umumnya sama: sebagian hal tidak bisa diukur, terlalu mahal, atau terlalu berbahaya."

### 20–32 Peta metode (1.2)

> **Ucapkan:** "Tidak ada satu metode untuk semua. Sumbu horizontal ini jumlah atom, sumbu vertikal skala waktu, keduanya logaritmik. Metode kuantum seperti DFT menghitung elektron secara eksplisit sehingga akurat, tetapi mahal: puluhan sampai ratusan atom dan hingga pikodetik. Metode klasik menganggap atom sebagai bola dan pegas, tanpa elektron, sehingga bisa jutaan atom dan mikrodetik, tetapi tidak bisa memutus atau membentuk ikatan. Monte Carlo, termasuk GCMC, tidak punya lintasan waktu nyata, tetapi sangat baik untuk adsorpsi kesetimbangan."

- **Lakukan:** klik DFT, xTB, MD, GCMC, coarse-grained bergantian; baca deskripsi di bawah kanvas.
- **Tanyakan:** "Mengapa kotak DFT sempit sedangkan MD lebar?" **Jawaban:** karena elektron dihitung eksplisit; biaya naik cepat terhadap jumlah atom (Bab 5 menunjukkan skala N³ sampai N⁷).
- **Tanyakan:** "Untuk adsorpsi H₂ pada zeolit, metode apa?" **Jawaban:** GCMC untuk isoterm, DFT untuk energi ikat di situs tertentu.

### 32–52 H₂ dari prinsip pertama (1.3a)

> **Ucapkan:** "Sekarang bukti nyata. Kurva ini dihitung langsung di browser Anda: metode Hartree–Fock dengan basis minimal untuk molekul hidrogen. Dengan pendekatan Born–Oppenheimer, inti dianggap diam, dan untuk tiap jarak R kita hitung energi elektron. Hasilnya permukaan energi potensial. Dasar lembah adalah panjang ikatan yang diprediksi; kelengkungan dasar lembah memberi frekuensi vibrasi."

- **Lakukan:** biarkan titik bergerak (molekul bergetar). Tunjukkan tabel.
- **Tanyakan sebelum melihat tabel:** "Menurut Anda, seberapa dekat prediksi dengan eksperimen?" Catat tebakan.
- **Angka:** prediksi R<sub>e</sub> = 0,712 Å vs eksperimen 0,741 Å (galat sekitar −4%); frekuensi 5482 cm⁻¹ vs 4401 cm⁻¹ (galat sekitar +25%).

> **Ucapkan:** "Panjang ikatan cukup baik, frekuensi terlalu tinggi 25%. Mengapa? Basis hanya dua fungsi dan elektron dihitung tanpa korelasi. Lihat sekarang sisi kanan kurva. Garis hijau adalah energi dua atom H yang terpisah: batas disosiasi yang benar. Kurva kita mendatar di atas garis itu. Ini bukan bug: ini kegagalan Hartree–Fock terbatas (RHF) pada pemutusan ikatan, dan itulah alasan kita belajar metode berkorelasi di Bab 5."

- **Lakukan:** tunjuk selisih energi pada R besar.
- **Jawaban inti:** model sederhana menangkap tren dan nilai kualitatif; kualitas kuantitatif butuh metode dan basis yang lebih baik.
- *Cadangan:* tanya mahasiswa cara memperbaiki: basis lebih besar, UHF, CI, DFT.

### 52–62 Hückel dan warna (1.3b)

> **Ucapkan:** "Contoh kedua menjelaskan sesuatu yang bisa Anda lihat: warna. Molekul poliena seperti β-karoten punya ikatan rangkap berselang-seling. Elektron π-nya ditangani model Hückel, dan energi orbital hasilnya mengikuti rumus kosinus. Makin panjang rantai konjugasi, makin rapat tingkat energinya, dan celah HOMO–LUMO mengecil."

- **Lakukan:** geser N dari 2 sampai 24; tunjuk celah di kiri atas dan grafik tren di kanan.
- **Tanyakan:** "Apa yang terjadi pada panjang gelombang serapan?" **Jawaban:** celah kecil berarti serapan di panjang gelombang besar; pada rantai sangat panjang serapan bergeser ke tampak, itu asal warna.
- **Peringatan:** model hanya menangkap tren. Etena, butadiena, heksatriena, dan oktatetraena menyerap sekitar 165, 217, 253, dan 304 nm (nilai tipikal), dan penurunan celah mengikuti arah yang sama, tetapi Hückel menurun lebih cepat.

### 62–68 Spektrum simulasi vs eksperimen (1.3c)

> **Ucapkan:** "Di laboratorium Anda akan membandingkan spektrum UV-Vis dengan perhitungan TD-DFT. Kurva biru adalah eksperimen sintetis, garis putus-putus simulasi. Perhatikan pergeseran sistematis: simulasi sering sedikit bergeser. Karena itu bandingkan pola dan urutan pita, bukan hanya angka satu puncak. Nilai tambah simulasi: tiap pita eksperimen bisa ditugaskan ke transisi orbital tertentu, misalnya HOMO ke LUMO."

- **Lakukan:** matikan animasi, geser pergeseran ke 0 dan ke 40.
- **Catatan:** ini data sintetis untuk ilustrasi, bukan data paper.

### 68–82 Simulasi sebagai pedoman eksperimen (1.4)

> **Ucapkan:** "Sekarang yang paling berguna: simulasi sebagai pedoman. Corong ini dari studi OLED tahun 2016: ruang pencarian 1,6 juta molekul, lebih dari 400 ribu disaring dengan TD-DFT, ribuan kandidat menjanjikan, sedikit yang disintesis, dan efisiensi kuantum eksternal hingga 22 persen. Eksperimen tidak membuang waktu pada ratusan ribu molekul yang buruk."

- **Isoterm GCMC:** "Simulasi memindai potensial kimia, setara dengan tekanan. Bagian yang curam, cakupan 0,2 sampai 0,9, adalah daerah yang informatif. Di bawahnya hampir kosong, di atasnya jenuh. Eksperimen cukup dijalankan di jendela ini."
- **Eyring:** biarkan ΔG‡ = 22 kcal/mol dan T = 298 K: k ≈ 4,6×10⁻⁴ s⁻¹, waktu paruh sekitar 0,4 jam. Naikkan barrier ke 28: reaksi menjadi terlalu lambat; naikkan T. **Tanyakan:** "Berapa suhu agar reaksi dengan barrier 28 selesai dalam jam?" (coba T ≈ 380–400 K).
- **Sabatier:** "Katalis terbaik mengikat intermediet dengan kekuatan sedang. DFT menghitung ΔG adsorpsi pada banyak permukaan; hanya yang dekat puncak yang disintesis. Ini skema kualitatif."
- **Kd:** ΔG<sub>bind</sub> = −9 kcal/mol memberi K<sub>d</sub> ≈ 250 nM (afinitas sedang); tiap 1,4 kcal/mol mengubah K<sub>d</sub> sekitar 10 kali.

### 82–90 Rangkuman dan tugas (1.5)

> **Ucapkan:** "Alur risetnya: model, hitung, validasi, perbaiki. Hasil simulasi hanya sebaik modelnya, yaitu fungsional, basis, pelarut, dan struktur awal. Selalu validasi pada sistem yang data eksperimennya diketahui, laporkan metode secara lengkap, dan perlakukan prediksi sebagai hipotesis."

**Cek pemahaman.** (1) Sebut tiga fungsi simulasi. *Menjelaskan, memprediksi, memandu eksperimen.* (2) Mengapa DFT tidak dipakai untuk satu juta atom? *Biaya naik cepat karena elektron eksplisit.* (3) Mengapa RHF gagal pada disosiasi H₂? *Tidak ada korelasi; fungsi gelombang satu determinan tidak bisa memerikan dua atom netral.*

**Kesalahpahaman umum.** "Simulasi pasti benar." Tidak: ia benar sesuai asumsinya. "Simulasi membuat eksperimen tidak perlu." Tidak: ia memilih dan menjelaskan.

**Tugas.** Ringkas satu paper (1 halaman): masalah, metode, validasi eksperimen, keterbatasan.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Pertemuan 2 · Persamaan Schrödinger

**Durasi:** 90 menit. **Halaman:** Bab 2. **Capaian belajar:** (1) menjelaskan mengapa fisika klasik gagal dan bagaimana mekanika kuantum muncul; (2) membaca tiap suku persamaan Schrödinger; (3) menafsirkan ψ, energi terkuantisasi, dan aturan Born.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik dan konteks |
| 10–25 | 2.1 Sejarah |
| 25–40 | 2.2 Persamaan dan artinya |
| 40–55 | 2.3 Paket gelombang |
| 55–75 | 2.4 Partikel dalam kotak |
| 75–85 | 2.5 Pengukuran dan \|ψ\|² |
| 85–90 | Rangkuman dan tugas |

### 0–10 Pemantik

> **Ucapkan:** "Atom hidrogen stabil. Menurut fisika klasik, elektron yang mengorbit inti harus memancarkan radiasi, kehilangan energi, dan jatuh ke inti dalam sekitar 10⁻¹¹ detik. Namun atom tetap ada. Ada yang salah dengan fisika klasik. Hari ini kita lihat bagaimana persamaan Schrödinger memperbaikinya."

- **Tanyakan:** "Fenomena apa lagi yang tidak bisa dijelaskan fisika klasik pada awal abad ke-20?" **Jawaban:** radiasi benda hitam, efek fotolistrik, garis spektrum atom.

### 10–25 Sejarah (2.1)

> **Ucapkan:** "Tahun 1900 Planck mengusulkan bahwa energi radiasi datang dalam paket, E sama dengan h kali frekuensi, untuk menjelaskan benda hitam. Tahun 1905 Einstein memakai ide itu untuk efek fotolistrik: cahaya terdiri dari foton. Tahun 1913 Bohr menjelaskan garis spektrum hidrogen dengan orbit diskret, tetapi aturannya ad hoc. Tahun 1924 de Broglie mengusulkan bahwa materi punya panjang gelombang, lambda sama dengan h per p. Tahun 1925 Heisenberg menyusun mekanika matriks. Tahun 1926 Schrödinger menyusun mekanika gelombang, memperlakukan kuantisasi sebagai masalah nilai eigen, dan Born menafsirkan kuadrat fungsi gelombang sebagai rapat peluang. Tahun 1933 Schrödinger dan Dirac menerima Nobel Fisika."

- **Lakukan:** tunjuk tabel linimasa baris demi baris.
- **Tanyakan:** "Mengapa persamaan ini menjadi dasar kimia?" **Jawaban:** sekali diselesaikan, ia memberi energi dan fungsi gelombang atom dan molekul, dan semua metode kita (HF, DFT, CC) adalah hampiran penyelesaiannya. Kutipan Dirac (1929): hukum fisikanya sudah diketahui, kesulitannya persamaan terlalu rumit untuk diselesaikan eksak.

### 25–40 Persamaan dan artinya (2.2)

> **Ucapkan:** "Persamaan ini punya tiga bagian. Merah: operator energi kinetik. Ini mengukur kelengkungan fungsi gelombang: makin berosilasi, makin besar energinya. Biru: energi potensial, yaitu lingkungan partikel. Hijau: E, nilai eigen. Hanya nilai E tertentu yang menghasilkan fungsi gelombang yang bisa dinormalkan, dan itulah asal kuantisasi. Versi bergantung waktu menambahkan i h-bar turunan waktu. Untuk keadaan eigen, yang berubah hanya fase, e pangkat minus i E t per h-bar."

- **Lakukan:** tunjuk satu per satu suku berwarna pada persamaan.
- **Tanyakan:** "Mengapa kelengkungan berhubungan dengan energi kinetik?" **Jawaban:** kelengkungan besar berarti momentum tinggi; panjang gelombang pendek.
- **Aturan Born:** peluang P(x) = |Ψ|², dengan integral |Ψ|² = 1.

### 40–55 Paket gelombang (2.3)

> **Ucapkan:** "Partikel bebas tidak punya potensial. Kita menggambarkannya dengan paket gelombang. Bagian real dan imajiner berosilasi: itu fasenya. Garis hijau, kuadrat besarnya, adalah peluang. Perhatikan dua hal: paket bergerak ke kanan, dan ia melebar. Pelebaran adalah konsekuensi langsung persamaan Schrödinger."

- **Lakukan:** biarkan animasi berjalan; tunjuk lebar paket di t kecil dan t besar; jeda sebentar.
- **Tanyakan:** "Mengapa partikel bebas tidak tetap terlokalisasi?" **Jawaban:** paket terdiri dari banyak panjang gelombang yang bergerak dengan kecepatan berbeda.

### 55–75 Partikel dalam kotak (2.4)

> **Ucapkan:** "Sekarang partikel terkurung dalam kotak. Fungsi gelombangnya gelombang sinus dengan simpul di dinding, energinya n kuadrat pi kuadrat h-bar kuadrat per dua m L kuadrat. Hanya n bulat yang diperbolehkan: kuantisasi muncul karena syarat batas. Untuk elektron dalam kotak satu nanometer, E₁ sekitar 0,376 eV, dan transisi 1 ke 2 membutuhkan 3 kali itu, sekitar 1,13 eV, atau panjang gelombang 1100 nm."

- **Lakukan:** mulai dengan n₁ = n₂ = 1: kerapatan diam. Lalu n₁ = 1, n₂ = 2, bobot 0,5: kerapatan berayun.
- **Tanyakan:** "Mengapa kerapatan berayun hanya pada campuran?" **Jawaban:** faktor silang cos((E₂−E₁)t) hanya ada jika dua keadaan dicampur.
- **Latihan di kelas (5 menit):** hitung E₁ untuk kotak 0,5 nm (jawaban: 1,50 eV, karena E ∝ 1/L²).
- *Cadangan:* ganti n₂ menjadi 3 dan 4, bandingkan frekuensi ayunan: selisih n² adalah 8 untuk (1,3) dan 3 untuk (1,2), jadi ayunannya sekitar 2,7 kali lebih cepat.

### 75–85 Pengukuran dan \|ψ\|² (2.5)

> **Ucapkan:** "Tiap titik di sini satu hasil pengukuran posisi. Satu pengukuran acak, tetapi ribuan pengukuran menyusun pola kuadrat fungsi gelombang, garis merah. Inilah tafsir Born: fungsi gelombang tidak mengatakan di mana partikel berada, tetapi seberapa mungkin."

- **Lakukan:** tunggu sampai histogram meniru kurva; pilih n₁ = 3 dan ulangi.

### 85–90 Rangkuman dan tugas

**Cek pemahaman.** (1) Apa arti kuantisasi energi? *Hanya nilai eigen tertentu yang diperbolehkan oleh syarat batas.* (2) Apa |Ψ|²? *Rapat peluang.* (3) Mengapa paket gelombang melebar? *Dispersi.*

**Tugas.** Hitung E₁ untuk elektron dalam kotak 1 nm (jawaban: 0,376 eV) dan panjang gelombang transisi 1→2 (jawaban: sekitar 1100 nm). Jelaskan dalam tiga kalimat mengapa elektron dalam kotak yang lebih sempit bergerak lebih "energik".

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Pertemuan 3 · Atom Hidrogen dan Orbital

**Durasi:** 90 menit. **Halaman:** Bab 3. **Capaian belajar:** (1) menghubungkan n, l, m dengan energi, bentuk, dan orientasi; (2) menghitung panjang gelombang garis spektrum; (3) membaca peluang radial, node, dan tanda fase orbital.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–30 | 3.1 Persamaan dan bilangan kuantum |
| 30–55 | 3.2 Tingkat energi dan garis spektrum |
| 55–70 | 3.3 Peluang radial |
| 70–85 | 3.4 Awan orbital |
| 85–90 | Rangkuman dan tugas |

### 0–10 Pemantik

> **Ucapkan:** "Atom hidrogen adalah satu-satunya atom yang persamaan Schrödingernya bisa diselesaikan eksak. Karena itu ia menjadi batu uji bagi semua teori. Hari ini kita pakai untuk menjawab dua hal: dari mana bentuk s, p, dan d yang Anda kenal dari kimia dasar, dan mengapa hidrogen memancarkan warna tertentu."

- **Tanyakan:** "Siapa yang pernah melihat lampu hidrogen atau nyala natrium?" Gunakan untuk menghubungkan ke warna garis spektrum.

### 10–30 Persamaan dan bilangan kuantum (3.1)

> **Ucapkan:** "Satu elektron dalam potensial Coulomb inti. Solusinya terdiri dari bagian radial R n l dari r dan bagian sudut, harmonik bola. Tiga bilangan kuantum muncul secara alami dari syarat batas. n, bilangan kuantum utama, menentukan energi dan ukuran: E sama dengan minus 13,606 elektron volt per n kuadrat. l, dari 0 sampai n minus 1, menentukan bentuk: s, p, d, f. m, dari minus l sampai plus l, menentukan orientasi."

- **Lakukan:** tulis di papan: n=1: 1s; n=2: 2s, 2p (3 orientasi); n=3: 3s, 3p, 3d (5 orientasi).
- **Tanyakan:** "Berapa banyak orbital ada pada n = 3?" **Jawaban:** 9 (n²).
- **Catatan:** jumlah node radial = n − l − 1; node total = n − 1. Pada atom satu elektron, energi hanya bergantung n; pada atom banyak elektron, tolakan elektron memisahkan l.

### 30–55 Tingkat energi dan garis spektrum (3.2)

> **Ucapkan:** "Rumus Rydberg: satu per lambda sama dengan konstanta Rydberg kali selisih satu per n₁ kuadrat dan satu per n₂ kuadrat. Dalam nanometer, lambda sama dengan 91,18 dibagi selisih tersebut. Seri Balmer berakhir di n = 2, dan hanya garisnya yang tampak. Prediksikan panjang gelombang loncatan 3 ke 2 sebelum animasi menunjukkannya."

- **Lakukan:** beri 1 menit untuk menghitung 3→2; lalu jalankan animasi.
- **Angka:** 3→2: 656,5 nm (merah); 4→2: 486,3 nm (hijau kebiruan); 5→2: 434,2 nm (biru); 6→2: 410,3 nm (ungu). Lyman 2→1: 121,6 nm (UV); Paschen 4→3: 1876 nm (inframerah).
- **Tanyakan:** "Mengapa garis Lyman tidak tampak?" **Jawaban:** energinya terlalu besar; panjang gelombang di ultraviolet.
- **Tanyakan:** "Mengapa spektrum atom berupa garis, bukan kontinu?" **Jawaban:** energi elektron terkuantisasi; hanya selisih tertentu.
- *Cadangan:* minta mahasiswa menghitung energi foton 3→2 dalam eV (≈ 1,89 eV).

### 55–70 Peluang radial (3.3)

> **Ucapkan:** "P dari r sama dengan r kuadrat kali R kuadrat: peluang menemukan elektron pada jarak r, dalam kulit tipis. Awalnya nol di inti karena volume kulit nol, lalu naik ke puncak. 1s punya satu puncak. 2s punya dua puncak dengan satu node radial. 2p punya satu puncak tanpa node radial. Orbital berenergi tinggi menjangkau jauh."

- **Lakukan:** aktifkan 1s, 2s, 2p; lalu tambah 3s, 3p, 3d.
- **Tanyakan:** "Berapa node radial 3d?" **Jawaban:** 3 − 2 − 1 = 0.
- **Tanyakan:** "Mengapa puncak 1s bukan di r = 0 padahal kerapatan terbesar di inti?" **Jawaban:** peluang pada kulit tipis mengalikan kerapatan dengan volume kulit 4πr².

### 70–85 Awan orbital (3.4)

> **Ucapkan:** "Tiap titik satu pengukuran posisi, irisan bidang x-z. Merah dan biru adalah tanda fungsi gelombang. Ini fase, bukan muatan. Di bidang antara merah dan biru terdapat node. Fase menentukan bagaimana orbital bergabung: fase sama membentuk ikatan, fase berlawanan membentuk antiikatan, yang akan kita lihat di bab tentang molekul."

- **Lakukan:** 1s (satu fase), 2s (dua bola berbeda fase), 2p_z (dua cuping), 2p_x (orientasi lain).
- **Peringatan:** orbital p bukan "angka delapan" yang tegas; itu rapat peluang yang menyebar.

### 85–90 Rangkuman dan tugas

**Cek pemahaman.** (1) Apa yang menentukan bentuk orbital? *l.* (2) Sebutkan dua seri spektrum hidrogen dan wilayahnya. *Lyman (UV), Balmer (tampak), Paschen (IR).* (3) Apa arti tanda merah/biru? *Fase fungsi gelombang.*

**Tugas.** Hitung λ transisi 4→2 (486,3 nm) dan jelaskan warnanya; hitung energi tingkat n = 5 dalam eV (−0,544 eV) dan energi ionisasi dari keadaan dasar (13,606 eV).

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Pertemuan 4 · Hartree–Fock dan Proses SCF

**Durasi:** 90 menit. **Halaman:** Bab 4. **Capaian belajar:** (1) menjelaskan mengapa masalah banyak-elektron sulit; (2) membaca persamaan Hartree–Fock–Roothaan; (3) menjalankan dan menafsirkan SCF; (4) menyebut batas HF.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–25 | 4.1 Hamiltonian molekul dan Born–Oppenheimer |
| 25–40 | 4.2 Determinan Slater |
| 40–55 | 4.3 Persamaan Roothaan dan alur SCF |
| 55–80 | 4.4 SCF nyata H₂ |
| 80–90 | 4.5 Batas HF dan tugas |

### 0–10 Pemantik

> **Ucapkan:** "Pada hidrogen, satu elektron, persamaan bisa dipecahkan eksak. Tambahkan satu elektron, yaitu helium atau H₂, dan tidak ada lagi solusi eksak. Mengapa satu elektron tambahan mengubah segalanya? Jawabannya ada pada satu suku di Hamiltonian: tolakan antar elektron."

### 10–25 Hamiltonian dan Born–Oppenheimer (4.1)

> **Ucapkan:** "Inti ribuan kali lebih berat daripada elektron, jadi kita anggap inti diam. Itu Born–Oppenheimer. Hamiltonian elektronik punya tiga suku: kinetik, tarikan inti, dan tolakan antar elektron, satu per jarak antar elektron. Suku hijau inilah masalahnya: ia mengaitkan setiap elektron dengan setiap elektron lain, sehingga persamaan tidak bisa dipisah per elektron. Hartree–Fock mengganti tolakan instan itu dengan tolakan rata-rata: tiap elektron bergerak dalam medan rata-rata elektron lainnya."

- **Lakukan:** tunjuk ketiga suku berwarna.
- **Tanyakan:** "Mengapa rata-rata adalah hampiran?" **Jawaban:** elektron menghindar satu sama lain secara instan, bukan terhadap rata-rata.

### 25–40 Determinan Slater (4.2)

> **Ucapkan:** "Fungsi gelombang harus antisimetrik: jika dua elektron ditukar, tandanya berbalik. Determinan Slater memenuhinya secara otomatis. Menukar dua elektron sama dengan menukar dua baris, dan tanda determinan berbalik. Jika dua elektron memiliki spin-orbital yang sama, dua kolom identik dan determinan sama dengan nol: itulah asas larangan Pauli."

- **Lakukan:** di papan tulis determinan 2×2 untuk dua elektron; tukar baris; tunjukkan tanda berbalik.
- **Tanyakan:** "Mengapa dua elektron dengan spin sama tidak bisa berada pada orbital yang sama?" **Jawaban:** determinannya nol.

### 40–55 Persamaan Roothaan dan alur SCF (4.3)

> **Ucapkan:** "Persamaannya: F C sama dengan S C epsilon. Matriks Fock F berisi inti, ditambah tolakan Coulomb dari awan elektron, dikurangi pertukaran, yaitu efek Pauli yang tidak punya analog klasik. Kuncinya: F bergantung pada kerapatan P, P dibentuk dari orbital C, dan C berasal dari F. Persamaannya melingkar, jadi diselesaikan berulang-ulang sampai konsisten: self-consistent field."

- **Lakukan:** tunjuk diagram alur: tebakan P, bentuk F, diagonalisasi, P baru, hitung E, konvergen?
- **Tanyakan:** "Apa yang dimaksud konsisten?" **Jawaban:** orbital keluaran menghasilkan kerapatan yang sama dengan kerapatan masukan.

### 55–80 SCF nyata H₂ (4.4)

> **Ucapkan:** "Ini perhitungan sungguhan, bukan ilustrasi: H₂ pada R = 1,4 bohr, dengan integral dari buku Szabo dan Ostlund. Mulai dari tebakan paling buruk: kedua elektron di atom A. Perhatikan grafik kanan: orbital pada iterasi pertama timpang, dan seiring iterasi ia mengalir menjadi simetris, orbital ikatan yang menyebar di kedua atom."

- **Lakukan:** pilih "elektron terlokalisasi di atom A", α = 1, tekan **Ulangi SCF**. Tunjuk tabel iterasi.
- **Angka:** energi per iterasi: −0,7519, −1,1129, −1,1167, −1,1168, −1,1168; konvergen (|ΔE| < 10⁻⁶) pada iterasi ke-5. Nilai akhir: E = −1,1168 Eh, ε<sub>HOMO</sub> = −0,578 Eh, ε<sub>LUMO</sub> = +0,670 Eh, c<sub>A</sub> = c<sub>B</sub> = 0,549.
- **Lakukan lagi:** α = 0,5. Energi: −0,7519, −0,9192, −1,0137, −1,0640, −1,0900, … baru konvergen pada iterasi ke-20.
- **Tanyakan:** "Mengapa mixing kecil lebih lambat tetapi lebih stabil?" **Jawaban:** perubahan kerapatan kecil per iterasi; pada sistem sulit, mixing besar berosilasi atau divergen.
- *Cadangan:* ganti ke tebakan simetris dan bandingkan jumlah iterasi.

### 80–90 Batas HF dan tugas (4.5)

> **Ucapkan:** "HF memenuhi Pauli, tetapi hanya merasakan rata-rata elektron lain. Yang hilang adalah energi korelasi, sekitar satu persen dari energi total, tetapi sebanding dengan energi ikatan kimia. Akibatnya HF gagal pada pemutusan ikatan dan energi reaksi akurat. Bab 5 memperbaikinya, dan di kursus kedua kita pakai DFT yang memasukkan korelasi dengan biaya jauh lebih rendah."

**Cek pemahaman.** (1) Mengapa SCF diperlukan? *Persamaannya melingkar.* (2) Apa beda Coulomb dan pertukaran? *Coulomb: tolakan klasik awan; pertukaran: efek Pauli.* (3) Apa yang dilakukan jika SCF tidak konvergen? *Turunkan mixing/damping, level shift, DIIS, tebakan awal yang lebih baik.*

**Tugas.** Dari tabel iterasi, tentukan iterasi saat |ΔE| < 10⁻⁶ untuk α = 1 dan α = 0,5 (5 dan 20), dan jelaskan perbedaannya. **Penilaian contoh:** kuis 20%, tugas paper 20%, praktik ORCA/Gaussian 30%, ujian 30%.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Pertemuan 5 · Korelasi Elektron: MP2, CI, Coupled Cluster

**Durasi:** 90 menit. **Halaman:** Bab 5. **Capaian belajar:** (1) mendefinisikan energi korelasi; (2) membedakan MP2, CI, dan CC; (3) memilih metode berdasarkan biaya dan akurasi.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–35 | 5.1–5.2 Energi korelasi dan lubang korelasi |
| 35–60 | 5.3 MP2, CI, CC |
| 60–82 | 5.4 Skala biaya |
| 82–90 | Rangkuman dan tugas |

### 0–10 Pemantik

> **Ucapkan:** "Hartree–Fock memberi sekitar 99 persen energi total. Kedengarannya bagus, tetapi energi ikatan kimia hanya sekitar satu persen dari energi total. Satu persen yang hilang itulah yang menentukan apakah reaksi berlangsung. Hari ini kita pelajari apa yang hilang dan bagaimana mengembalikannya."

- **Tanyakan:** "Jika galat 1% tampak kecil, mengapa fatal untuk kimia?" **Jawaban:** karena yang dibandingkan adalah selisih energi antara reaktan dan produk, yang ukurannya sebanding dengan galat itu.

### 10–35 Energi korelasi dan lubang korelasi

> **Ucapkan:** "Energi korelasi didefinisikan sebagai selisih energi eksak dan energi Hartree–Fock, selalu negatif. Di HF tiap elektron merasakan rata-rata elektron lain. Padahal elektron saling menghindar secara instan: jika satu elektron di sini, yang lain cenderung di sisi seberang. Pada animasi, dua elektron bergerak pada cincin. Mode pertama tanpa korelasi: selisih sudut merata. Mode kedua berkorelasi: selisih sudut dekat nol jarang terjadi. Itulah lubang Coulomb."

- **Lakukan:** pilih mode tanpa korelasi, tunggu histogram datar (garis putus-putus 1/2π); ganti ke mode berkorelasi, tunggu histogram meniru (1−cos Δ)/2π.
- **Tanyakan:** "Apa beda dua histogram?" **Jawaban:** pada mode berkorelasi elektron jarang berdekatan.
- **Catatan:** ini model mainan konsep, bukan hasil kuantum.

### 35–60 MP2, CI, dan Coupled Cluster

> **Ucapkan:** "Tiga cara menambah korelasi. MP2 memakai teori gangguan orde dua: ia menjumlahkan sumbangan eksitasi ganda, dengan penyebut selisih energi orbital. Murah, tetapi buruk untuk sistem yang sangat terdelokalisasi. CI, configuration interaction, menulis fungsi gelombang sebagai gabungan determinan hasil eksitasi. Jika semua eksitasi dimasukkan, FCI, hasilnya eksak untuk basis itu, tetapi hanya mungkin untuk molekul sangat kecil, dan CISD tidak size-extensive. Coupled cluster memakai bentuk eksponensial e pangkat T, yang menjamin size-extensive. CCSD(T) disebut standar emas untuk molekul kecil sampai menengah."

- **Lakukan:** tunjuk penyebut selisih energi pada rumus MP2; tunjuk eksponensial T pada CC.
- **Tanyakan:** "Apa arti size-extensive?" **Jawaban:** energi dua molekul yang saling jauh sama dengan jumlah energi masing-masing.
- **Tanyakan:** "Mengapa eksponensial menjamin hal itu?" **Jawaban:** karena e^(A+B) = e^A e^B untuk bagian yang tak berinteraksi.

### 60–82 Skala biaya

> **Ucapkan:** "Metode yang lebih akurat lebih mahal. Jika ukuran sistem dikalikan N, biaya formal naik N pangkat k. DFT murni sekitar N pangkat 3; Hartree–Fock dan DFT hibrida N pangkat 4; MP2 N pangkat 5; CCSD N pangkat 6; CCSD(T) N pangkat 7. Penanda pada grafik bergerak dari sistem kecil ke besar; perhatikan bagaimana biaya CCSD(T) meledak."

- **Lakukan:** biarkan animasi; baca teks biaya di bawah grafik.
- **Tanyakan:** "Jika sistem 2 kali lebih besar, berapa kali lipat biaya CCSD(T)?" **Jawaban:** 2⁷ = 128. DFT GGA: 8 kali. MP2: 32. CCSD: 64.
- **Latihan:** "DFT GGA memakan 1 jam. Berapa lama CCSD(T) pada sistem yang sama ukurannya? Pada sistem 3 kali lebih besar?" Jawaban kasar: jika konstan awal diabaikan, 3⁷/3³ = 81 kali lebih lama dari DFT pada ukuran yang sama.
- *Cadangan:* diskusikan strategi: gunakan DFT untuk geometri, CCSD(T) satu titik di basis TZ untuk energi.

### 82–90 Rangkuman dan tugas

**Cek pemahaman.** (1) Definisi energi korelasi. *E eksak − E HF.* (2) Metode mana yang size-extensive? *MP2 dan CC (CISD tidak).* (3) Mengapa tidak selalu memakai CCSD(T)? *Biaya N⁷.*

**Tugas.** Rancang strategi untuk menghitung energi reaksi molekul organik 30 atom: geometri, frekuensi, energi akhir; tuliskan metode, basis, dan alasannya.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Pertemuan 6 · Basis Set

**Durasi:** 90 menit. **Halaman:** Bab 6. **Capaian belajar:** (1) menjelaskan LCAO dan mengapa Gaussian dipakai; (2) memilih basis (polarisasi, difus); (3) memahami ekstrapolasi ke batas basis lengkap dan harga basis.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–30 | 6.1 LCAO dan STO-nG |
| 30–50 | 6.2 Polarisasi dan fungsi difus |
| 50–70 | 6.3 Konvergensi dan CBS |
| 70–85 | 6.4 Memilih basis dan harganya |
| 85–90 | Rangkuman dan tugas |

### 0–10 Pemantik

> **Ucapkan:** "Fungsi gelombang itu fungsi kontinu. Komputer hanya menyimpan angka. Basis set adalah cara kita menyimpan orbital dengan jumlah angka terbatas. Pilihan basis menentukan akurasi sama besar dengan pilihan metode. Seorang peneliti yang memilih basis salah bisa mendapat hasil yang tampak masuk akal tetapi keliru."

### 10–30 LCAO dan STO-nG (6.1)

> **Ucapkan:** "Orbital molekul kita tulis sebagai kombinasi linear fungsi basis: LCAO. Orbital atom sebenarnya berbentuk Slater, e pangkat minus zeta r, dengan cusp tajam di inti dan ekor eksponensial. Gaussian, e pangkat minus alfa r kuadrat, tidak punya cusp dan ekornya turun terlalu cepat. Tetapi integral Gaussian bisa dihitung analitik, jadi komputer memakainya. Trik: beberapa Gaussian dikontraksi untuk meniru satu Slater. STO-3G memakai tiga."

- **Lakukan:** geser n dari 1 ke 3; amati kecocokan dekat inti. Aktifkan skala log dan lihat ekor.
- **Tanyakan:** "Di mana Gaussian paling gagal meniru Slater?" **Jawaban:** di r = 0 (cusp) dan di ekor jauh.

### 30–50 Polarisasi dan fungsi difus (6.2)

> **Ucapkan:** "Polarisasi: tambahkan fungsi berkarakter lebih tinggi, d pada karbon, p pada hidrogen. Ini memungkinkan awan elektron berubah bentuk di dalam ikatan. Pada grafik, kerapatan s murni simetris; tambahkan sedikit p_z dan awan bergeser. Fungsi difus, awalan aug atau tanda plus, punya eksponen kecil sehingga awan menjangkau jauh. Wajib untuk anion, keadaan Rydberg, dan interaksi lemah."

- **Lakukan:** geser λ; tunjuk pergeseran kerapatan. Pada grafik difus, tunjuk puncak jauh.
- **Tanyakan:** "Basis apa untuk afinitas elektron?" **Jawaban:** basis dengan fungsi difus (aug-cc-pVTZ, def2 dengan ma-/+).

### 50–70 Konvergensi dan CBS (6.3)

> **Ucapkan:** "Energi korelasi menurun terhadap kualitas basis dengan pola X pangkat minus 3, dengan X = 2 untuk double-zeta, 3 untuk triple-zeta, dan seterusnya. Karena polanya diketahui, kita bisa mengekstrapolasi ke batas basis lengkap dari dua basis, misalnya triple dan quadruple zeta, memakai rumus di layar."

- **Lakukan:** biarkan B kecil (0,1); catat galat ekstrapolasi. Naikkan B ke 0,4; galat membesar.
- **Tanyakan:** "Mengapa ekstrapolasi tidak sempurna?" **Jawaban:** suku orde lebih tinggi (X⁻⁵) tidak ikut dimodelkan.
- **Peringatan:** grafik ini model bentuk fungsi, angka ilustrasi.

### 70–85 Memilih basis dan harganya (6.4)

> **Ucapkan:** "Tabel ini menunjukkan jumlah fungsi basis untuk air dan biaya HF relatif, sebanding dengan N pangkat 4, dengan cc-pVDZ sama dengan 1. STO-3G: 7 fungsi, biaya 0,007. cc-pVTZ: 58 fungsi, biaya 34 kali. aug-cc-pVTZ: 92, biaya 216 kali. cc-pVQZ: 115, biaya 527 kali. Artinya satu langkah ke basis lebih besar bisa membuat perhitungan puluhan sampai ratusan kali lebih lama."

- **Aturan praktis:** optimasi awal: def2-SVP atau 6-31G(d); energi akhir dan properti: def2-TZVP atau cc-pVTZ; anion dan eksitasi: tambahkan difus; atom berat: pseudopotensial (def2 menanganinya).
- **Latihan lisan:** (a) optimasi molekul organik 80 atom, (b) afinitas elektron, (c) TD-DFT dye. Jawaban: (a) def2-SVP + D3BJ, (b) aug-cc-pVTZ atau ma-def2-TZVP, (c) def2-TZVP atau 6-311+G(d,p) dengan CAM-B3LYP.

### 85–90 Rangkuman dan tugas

**Cek pemahaman.** (1) Mengapa Gaussian dipakai walau kurang akurat? *Integralnya analitik.* (2) Untuk apa fungsi difus? *Ekor panjang: anion, eksitasi, interaksi lemah.* (3) Berapa kali lipat biaya HF dari cc-pVDZ ke cc-pVTZ untuk air? *Sekitar 34.*

**Tugas.** Pilih basis untuk tiga kasus pada slide dan beri alasan satu kalimat tiap kasus.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Pertemuan 7 · Force Field, Dinamika Molekul, dan Monte Carlo

**Durasi:** 90 menit. **Halaman:** Bab 7. **Capaian belajar:** (1) menulis komponen force field; (2) menjelaskan MD dan Monte Carlo; (3) memilih metode klasik vs kuantum.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–25 | 7.1 Force field dan kurva Lennard-Jones |
| 25–55 | 7.2 MD hidup |
| 55–82 | 7.3 GCMC pada kisi |
| 82–90 | 7.4 Memilih metode, tugas |

### 0–10 Pemantik

> **Ucapkan:** "Jika kita ingin melihat protein melipat atau air membeku, kita butuh ribuan atom selama nanodetik. Metode kuantum tidak sanggup. Solusinya: buang elektron, dan gambarkan atom sebagai bola dengan pegas. Hari ini kita lihat apa yang diperoleh dan apa yang hilang."

### 10–25 Force field (7.1)

> **Ucapkan:** "Energi dijumlahkan dari pegas ikatan, pegas sudut, torsi, dan interaksi nonikatan, yaitu van der Waals dan Coulomb. Interaksi van der Waals dimodelkan Lennard-Jones: empat epsilon dikali sigma per r pangkat dua belas minus sigma per r pangkat enam. Suku pangkat dua belas adalah tolakan Pauli, suku pangkat enam adalah dispersi. Kedalaman sumur epsilon, jarak nol sigma."

- **Lakukan:** geser ε dan σ; tunjuk letak minimum (≈ 1,12 σ).
- **Tanyakan:** "Apa yang tidak bisa dilakukan force field standar?" **Jawaban:** memutus atau membentuk ikatan, transfer muatan, keadaan elektronik tereksitasi.

### 25–55 Dinamika molekul hidup (7.2)

> **Ucapkan:** "Di sini 49 partikel Lennard-Jones dalam dua dimensi. Kita memecahkan hukum Newton langkah demi langkah dengan algoritma velocity Verlet. Atur suhu target dengan slider. Pada suhu rendah, partikel membentuk kisi teratur, padat. Naikkan suhu dan kisi meleleh. Grafik kanan menunjukkan energi kinetik, potensial, dan total. Tanpa termostat, energi total hampir konstan."

- **Lakukan:** mulai T = 0,3 (padat); naikkan perlahan ke 1,5; tekan Reset dan ulangi dengan T = 0 (tanpa termostat) dan tunjuk energi total datar.
- **Tanyakan:** "Mengapa energi total hampir konstan tanpa termostat?" **Jawaban:** sistem terisolasi, kekekalan energi (galat kecil karena langkah waktu dan cutoff).
- **Tanyakan:** "Apa gunanya termostat?" **Jawaban:** meniru kontak dengan lingkungan pada suhu tertentu.
- *Cadangan:* diskusikan langkah waktu: terlalu besar → energi melayang.

### 55–82 GCMC pada kisi (7.3)

> **Ucapkan:** "Monte Carlo grand-kanonik cocok untuk adsorpsi, misalnya H₂ pada zeolit atau biochar. Molekul disisipkan atau dihapus secara acak dengan aturan Metropolis: peluang menerima sisipan adalah minimum satu atau e pangkat minus selisih energi dikurangi potensial kimia per kT. Kisi 30 kali 30. Epsilon energi ikat, J interaksi antar tetangga. Jika J nol, hasilnya harus mengikuti isoterm Langmuir. Perhatikan garis putus-putus."

- **Lakukan:** J = 0, ε = 0,5, kT = 1. Pilih μ = −3, −1, 0, 1; tiap kali tunggu beberapa detik dan tekan **Catat titik isoterm**. Titik harus jatuh pada Langmuir (misal μ = −1: θ ≈ 0,38).
- **Lakukan lagi:** Hapus titik; J = 1,2, kT = 0,7; sapu μ dari −4 sampai −1: lonjakan tajam (kondensasi).
- **Tanyakan:** "Mengapa lonjakan muncul ketika J besar?" **Jawaban:** interaksi tarik antar molekul membuat adsorpsi kooperatif: transisi fase.
- **Hubungkan ke riset:** kisi hanyalah model; RASPA memakai medan gaya nyata dan koordinat zeolit.

### 82–90 Memilih metode dan tugas (7.4)

**Cek pemahaman.** (1) Perbedaan MD dan MC? *MD punya lintasan waktu; MC hanya sampling.* (2) Apa dua suku Lennard-Jones? *Tolakan r⁻¹² dan tarikan r⁻⁶.* (3) Metode untuk reaksi pada situs aktif enzim? *QM/MM.*

**Tugas.** Untuk H₂ pada zeolit, daftar masukan GCMC yang diperlukan: suhu, tekanan (fugasitas), kerangka dan muatan, medan gaya, jumlah siklus, cutoff.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Pertemuan 8 · Permukaan Energi Potensial, Optimasi, dan Frekuensi

**Durasi:** 90 menit. **Halaman:** Bab 8. **Capaian belajar:** (1) membedakan minimum dan titik pelana; (2) memahami optimasi; (3) menghitung frekuensi dan ZPE serta menafsirkan frekuensi imajiner.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–35 | 8.1 PES dan titik stasioner |
| 35–60 | Optimasi: demo Morse dan penghalang |
| 60–80 | 8.2 Frekuensi harmonik |
| 80–90 | 8.3 Termodinamika, tugas |

### 0–10 Pemantik

> **Ucapkan:** "Setelah menjalankan optimasi geometri, program berkata 'converged'. Apakah itu berarti Anda mendapat struktur stabil? Belum tentu. Hari ini kita lihat mengapa kita selalu menjalankan frekuensi setelah optimasi."

### 10–35 PES dan titik stasioner (8.1)

> **Ucapkan:** "Dengan Born–Oppenheimer, energi elektronik adalah fungsi posisi inti: permukaan energi potensial. Titik stasioner adalah titik dengan gradien nol. Jika semua kelengkungan positif, itu minimum: reaktan, produk, atau intermediet. Jika satu kelengkungan negatif, itu titik pelana orde satu: keadaan transisi. Di kimia, minimum adalah apa yang bisa difoto; keadaan transisi adalah puncak penghalang yang menentukan laju."

- **Lakukan:** pilih Morse; geser x; tunjuk gradien dan k.
- **Tanyakan:** "Apa beda minimum dan titik pelana pada kelengkungan?" **Jawaban:** minimum k > 0; titik pelana ada k < 0.

### 35–60 Optimasi (demo)

> **Ucapkan:** "Optimasi bergerak menuruni gradien sampai gaya hampir nol. Pada permukaan Morse, mulai dari mana saja, ia turun ke minimum. Sekarang kita ganti ke permukaan penghalang dan mulai persis di x = 0. Gradien di sana nol."

- **Lakukan:** Morse → tekan **Optimasi**: konvergen ke minimum. Ganti ke Penghalang; geser x ke 0; tekan **Optimasi**: tidak bergerak. Teks: gradien ≈ 0 tetapi k < 0, titik pelana.
- **Tanyakan:** "Apakah 'converged' berarti minimum?" **Jawaban:** tidak; hanya gradien nol. Perlu frekuensi.
- **Lakukan:** geser x ke 0,35 dan optimasi: turun ke salah satu minimum (±1).
- *Cadangan:* diskusikan cara mencari TS (OptTS, calcfc, IRC).

### 60–80 Frekuensi harmonik (8.2)

> **Ucapkan:** "Frekuensi vibrasi berasal dari kelengkungan: nu tilde sama dengan 1 per 2 pi c kali akar k per mu. Dalam satuan praktis, 130,28 kali akar k dalam newton per meter dibagi mu dalam amu. Untuk CO, k sekitar 1850 newton per meter dan mu 6,86 amu, jadi sekitar 2139 per sentimeter. Eksperimen 2143 per sentimeter untuk frekuensi fundamental. Energi titik nol, setengah h c nu tilde, sekitar 3,06 kilokalori per mol."

- **Lakukan:** atur k = 1850, μ = 6,86 (atur dengan slider); baca teks frekuensi dan ZPE; ubah μ menjadi 0,5 (H₂-like): frekuensi naik.
- **Tanyakan:** "Ikatan yang lebih kaku atau atom lebih ringan: frekuensi?" **Jawaban:** lebih tinggi.
- **Latihan:** k = 500 N/m, μ = 1 amu: ν̃ ≈ 2913 cm⁻¹.

### 80–90 Termodinamika dan tugas (8.3)

> **Ucapkan:** "Aturan praktisnya: nol frekuensi imajiner berarti minimum; satu berarti keadaan transisi; dua atau lebih berarti struktur bukan titik penting dan harus dioptimasi ulang. Energi bebas G sama dengan energi elektronik ditambah ZPE dan koreksi termal dikurangi T kali entropi. Frekuensi DFT biasanya dikalikan faktor skala, sekitar 0,96 sampai 0,98 untuk B3LYP, dan faktor itu harus dilaporkan."

**Cek pemahaman.** (1) Mengapa frekuensi setelah optimasi? *Membedakan minimum dan titik pelana.* (2) Apa arti satu frekuensi imajiner? *Keadaan transisi.* (3) Mengapa frekuensi hanya valid pada geometri hasil optimasi dengan level teori yang sama? *Kelengkungan hanya bermakna pada titik stasioner.*

**Tugas.** Hitung ZPE untuk O–H (k = 780 N/m, μ = 0,948 amu) dan bandingkan dengan C–O. *Hint:* ν̃ = 130,28√(k/μ). *Jawaban:* ν̃ ≈ 3737 cm⁻¹, ZPE ≈ 5,3 kcal/mol (O–H lebih tinggi dari C–O karena μ jauh lebih kecil).

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Pertemuan D1 · Hohenberg–Kohn dan Kohn–Sham

**Durasi:** 90 menit. **Halaman:** Course 2 → D1. **Capaian belajar:** (1) menyatakan teorema Hohenberg–Kohn; (2) membaca persamaan Kohn–Sham; (3) menjelaskan mengapa SCF pada kerapatan sama dengan SCF di Hartree–Fock.

| Menit | Kegiatan |
|---|---|
| 0–12 | Pemantik: dari 3N ke 3 dimensi |
| 12–35 | D1.1 Teorema HK |
| 35–58 | D1.2 Persamaan KS |
| 58–80 | D1.3 SCF kerapatan H₂ |
| 80–90 | D1.4 Konsekuensi, tugas |

### 0–12 Pemantik

> **Ucapkan:** "Ingat dinding eksponensial di Bab 2 dan 4: fungsi gelombang N elektron punya 3N dimensi. Kerapatan elektron, berapa pun N, hanya tiga dimensi. Pertanyaan yang mengubah kimia komputasi tahun 1964: bisakah kita menghitung energi hanya dari kerapatan, tanpa fungsi gelombang?"

- **Tanyakan:** "Jika kerapatan cukup, informasi apa yang kita buang?" **Jawaban:** fungsi gelombang rinci; kita hanya memegang peluang menemukan elektron di tiap titik.

### 12–35 Teorema Hohenberg–Kohn (D1.1)

> **Ucapkan:** "Teorema pertama: kerapatan keadaan dasar menentukan secara unik potensial eksternal sampai konstanta. Karena potensial menentukan Hamiltonian, kerapatan menentukan seluruh sifat sistem: energi adalah fungsional dari kerapatan. Teorema kedua: energi adalah fungsional variasional: untuk kerapatan uji yang valid, energi tidak lebih rendah dari energi keadaan dasar. Maka kita bisa mencari kerapatan dengan meminimalkan energi."

- **Tanyakan:** "Apa batasan teorema ini?" **Jawaban:** hanya menjamin keberadaan fungsional; bentuk eksaknya tidak diketahui.
- **Catatan:** tekankan bahwa kualitas DFT sepenuhnya ditentukan oleh hampiran fungsional.

### 35–58 Persamaan Kohn–Sham (D1.2)

> **Ucapkan:** "Kohn dan Sham mengusulkan trik: gunakan sistem pengganti elektron tak berinteraksi yang kerapatannya sama. Energi dipecah: kinetik sistem pengganti, tarikan inti, Hartree, yaitu tolakan Coulomb klasik, dan E xc. Semua kerumitan kuantum, yaitu pertukaran, korelasi, dan koreksi kinetik, dikemas di E xc. Persamaan satu-elektronnya mirip Hartree–Fock: potensial efektif berisi tarikan inti, potensial Hartree, dan potensial xc, turunan fungsional E xc terhadap kerapatan."

- **Lakukan:** tunjuk suku berwarna pada persamaan.
- **Tanyakan:** "Apa beda KS dan HF?" **Jawaban:** HF memakai pertukaran eksak dan tanpa korelasi; KS memakai E xc hampiran yang memuat pertukaran dan korelasi. Fungsional hibrida mencampur sebagian pertukaran HF.
- **Tanyakan:** "Mengapa harus SCF?" **Jawaban:** potensial bergantung kerapatan, kerapatan dari orbital, orbital dari potensial.

### 58–80 SCF kerapatan H₂ (D1.3)

> **Ucapkan:** "Animasi ini memakai SCF H₂ nyata dari Bab 4, dilihat sebagai kerapatan sepanjang sumbu ikatan. Garis abu-abu adalah penjumlahan dua atom H bebas. Garis biru adalah kerapatan molekul pada iterasi berjalan. Kurva bawah adalah selisih: positif berarti elektron bertambah. Perhatikan: pada iterasi awal kerapatan timpang, lalu simetris, dan ada penumpukan elektron di antara dua inti: itu ikatan kovalen."

- **Lakukan:** biarkan animasi mengulang; jeda saat iterasi terakhir; tunjuk bagian positif di antara inti dan bagian negatif di dekat inti.
- **Tanyakan:** "Mengapa penumpukan di antara inti menstabilkan molekul?" **Jawaban:** elektron di antara inti menarik kedua inti dan menyaring tolakan inti-inti.
- *Cadangan:* tanya mahasiswa apa yang akan terjadi pada R yang lebih besar (penumpukan hilang).

### 80–90 Konsekuensi dan tugas (D1.4)

> **Ucapkan:** "Orbital KS bukan orbital fisik, tetapi bentuknya mirip orbital HF dan biasa dipakai untuk analisis HOMO dan LUMO. Biaya DFT murni sekitar N pangkat 3, lebih rendah dari HF, sehingga mungkin untuk ratusan atom. Dan kerapatan keadaan dasar saja tidak memberi eksitasi: untuk spektrum kita pakai TD-DFT di D6."

**Cek pemahaman.** (1) Tulis dua teorema HK. (2) Apa isi E xc? (3) Mengapa DFT lebih murah dari HF? *Kerapatan 3 dimensi; fungsional lokal/semilokal tanpa integral pertukaran eksak.*

**Tugas.** Sebutkan dua perbedaan KS dan HF dan satu persamaannya.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Pertemuan D2 · Fungsional, Tangga Jacob, dan Dispersi

**Durasi:** 90 menit. **Halaman:** D2. **Capaian belajar:** (1) menyebut anak tangga Jacob dan contohnya; (2) menjelaskan GGA lewat faktor peningkatan pertukaran; (3) memahami perlunya koreksi dispersi; (4) memilih fungsional untuk tujuan tertentu.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–28 | D2.1 Tangga Jacob |
| 28–50 | D2.2 Faktor peningkatan F_x |
| 50–68 | D2.3 Dispersi |
| 68–85 | D2.4 Memilih fungsional |
| 85–90 | Rangkuman dan tugas |

### 0–10 Pemantik

> **Ucapkan:** "Ada ratusan fungsional. Mahasiswa sering memilih B3LYP 'karena semua orang memakainya'. Hari ini kita lihat apa yang sebenarnya berbeda antar fungsional dan bagaimana memilihnya dengan alasan."

### 10–28 Tangga Jacob (D2.1)

> **Ucapkan:** "John Perdew menyusun fungsional seperti tangga ke surga akurasi. Anak tangga pertama LDA, hanya bergantung pada kerapatan. Kedua GGA, menambah gradien kerapatan: PBE, BP86. Ketiga meta-GGA, menambah kerapatan energi kinetik. Keempat hibrida, mencampur pertukaran Hartree–Fock: B3LYP, PBE0, M06-2X. Ada hibrida range-separated seperti CAM-B3LYP dan ωB97X-D, yang cocok untuk transfer muatan. Kelima hibrida ganda dengan korelasi MP2. Naik tangga umumnya lebih akurat, tetapi lebih mahal."

- **Tanyakan:** "Mengapa hibrida butuh waktu lebih lama dari GGA?" **Jawaban:** integral pertukaran eksak (RIJCOSX membantu).

### 28–50 Faktor peningkatan pertukaran (D2.2)

> **Ucapkan:** "LDA hanya melihat nilai kerapatan, jadi faktor peningkatan sama dengan satu. GGA juga melihat gradien lewat s. Pada PBE, F x sama dengan satu ditambah kappa dikurangi kappa per satu ditambah mu s kuadrat per kappa. Dengan kappa 0,804, nilai maksimum F x adalah 1,804, tepat batas Lieb–Oxford. Geser slider mu dan kappa: jika kappa melampaui 0,804, kurva melanggar batas fisik."

- **Lakukan:** mulai dari PBE; naikkan κ ke 0,9; tunjuk teks "melanggar batas Lieb–Oxford". Turunkan μ ke 0,1235 (PBEsol): kurva lebih datar.
- **Tanyakan:** "Mengapa PBEsol memakai μ lebih kecil?" **Jawaban:** diatur agar tepat untuk padatan (ekspansi gradien kecil).

### 50–68 Dispersi (D2.3)

> **Ucapkan:** "Gaya dispersi London berasal dari korelasi jangka panjang yang tidak ditangkap fungsional lokal. Koreksi D3 menambah suku minus C6 per R pangkat 6 dengan peredam Becke–Johnson agar tidak divergen pada jarak dekat. Pada grafik, garis abu-abu tanpa peredam melonjak menuju minus tak hingga, garis merah dengan peredam tetap terbatas. Animasi menyapu parameter a1, yaitu seberapa dini peredaman bekerja."

- **Lakukan:** biarkan animasi; matikan; geser a₁ ke 0,1 dan 0,8, amati kedalaman.
- **Tanyakan:** "Fungsional mana yang tidak perlu D3 tambahan?" **Jawaban:** yang sudah memuat dispersi (ωB97X-D) atau diparametrisasi untuknya (M06-2X) umumnya tidak memakai D3 tambahan.
- **Catatan:** nilai pada grafik bergaya Ar···Ar, bukan parameter resmi D3; di ORCA gunakan kata kunci D3BJ, di Gaussian EmpiricalDispersion=GD3BJ.

### 68–85 Memilih fungsional (D2.4)

> **Ucapkan:** "Titik awal, bukan aturan: geometri organik B3LYP-D3BJ atau PBE0-D3BJ dengan def2-SVP sampai TZVP; termokimia dan barrier M06-2X, ωB97X-D3, atau hibrida ganda; eksitasi π ke π bintang B3LYP atau PBE0, tetapi transfer muatan dan Rydberg butuh CAM-B3LYP atau ωB97X-D; padatan PBE atau PBEsol, dan HSE06 untuk celah pita; logam transisi perlu menguji beberapa fungsional."

- **Latihan lisan:** (a) geometri dye organik, (b) eksitasi transfer muatan, (c) celah pita padatan. *Jawaban:* (a) B3LYP-D3BJ/def2-SVP, (b) CAM-B3LYP/def2-TZVP, (c) HSE06.
- **Peringatan:** fungsional murni meremehkan celah dan barrier karena kesalahan delokalisasi; selalu validasi dengan data eksperimen atau referensi tingkat tinggi dan laporkan fungsional, basis, dispersi, dan pelarut.

**Cek pemahaman.** (1) Apa itu GGA? *Bergantung pada ρ dan ∇ρ.* (2) Mengapa D3 diperlukan? *Fungsional lokal tidak menangkap dispersi.* (3) Fungsional untuk transfer muatan? *Range-separated.*

**Tugas.** Tulis tabel tiga baris pilihan fungsional untuk riset Anda dan alasannya.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Pertemuan D3 · Praktik DFT dengan ORCA

**Durasi:** 90 menit. **Halaman:** D3, Input Builder, Molecular Builder. **Capaian belajar:** (1) membaca dan menulis input ORCA; (2) menyiapkan dan mengirim job SLURM; (3) mengenali berkas hasil dan kriteria selesai.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–30 | D3.1 Anatomi input |
| 30–60 | Praktik: dari molekul ke input |
| 60–75 | D3.2 Skrip SLURM dan menjalankan |
| 75–90 | D3.3 Berkas hasil dan tugas |

### 0–10 Pemantik

> **Ucapkan:** "Sampai sekarang kita belajar teori. Hari ini kita menjalankan perhitungan. Satu input ORCA hanya beberapa baris, tetapi tiap baris adalah keputusan ilmiah: fungsional, basis, dispersi, pelarut, muatan, multiplisitas."

### 10–30 Anatomi input (D3.1)

> **Ucapkan:** "Baris pertama diawali tanda seru: keyword. Contoh: B3LYP D3BJ def2-SVP Opt Freq CPCM air. Berikutnya blok yang diawali persen: persen pal untuk jumlah core, persen maxcore untuk memori per core dalam megabita. Koordinat diawali bintang xyz, diikuti muatan dan multiplisitas, diakhiri bintang."

- **Lakukan:** buka D3; tunjuk tiap bagian pada kotak kode.
- **Tanyakan:** "Berapa memori total jika nprocs 8 dan maxcore 2000?" **Jawaban:** 16 000 MB (16 GB), dan harus lebih kecil dari memori node.
- **Tanyakan:** "Mengapa ORCA paralel harus dipanggil dengan path lengkap?" **Jawaban:** ORCA meluncurkan proses MPI sendiri.

### 30–60 Praktik: dari molekul ke input

- **Lakukan (demo, 30 menit):** (1) Molecular Builder: ketik SMILES, misal etanol (CCO), Build, Generate 3D. (2) Input Builder: pilih ORCA, preset "Opt+Freq organik", periksa kata kunci yang dihasilkan. (3) Ganti ke TD-DFT dengan CAM-B3LYP dan SMD: lihat perubahan kata kunci. (4) Tambahkan batasan "freeze bond 1 2" dan lihat blok %geom.
- **Tanyakan:** "Mengapa muncul peringatan multiplisitas jika saya ubah ke 2?" **Jawaban:** jumlah elektron tidak cocok dengan multiplisitas; Input Builder menghitung elektronnya.
- **Tugas kelas:** tiap kelompok membuat input untuk molekul pilihannya dan mengunduhnya.

### 60–75 Skrip SLURM dan menjalankan (D3.2)

> **Ucapkan:** "Di cluster, kita tidak menjalankan langsung, tetapi mengirim ke SLURM. Skrip berisi sumber daya: jumlah node, jumlah core, waktu; memuat modul ORCA; berpindah ke direktori pengiriman; lalu memanggil ORCA dengan path lengkap, arahkan keluaran ke berkas out. Nama modul bergantung pada cluster Anda, jadi tanyakan administrator."

- **Lakukan:** di Input Builder, tab skrip SLURM; isi partisi dan waktu; unduh. Tunjuk `$(which orca)`.
- **Tanyakan:** "Apa yang terjadi jika waktu terlalu pendek?" **Jawaban:** job dibunuh di tengah; pakai restart.

### 75–90 Berkas hasil dan tugas (D3.3)

> **Ucapkan:** "Output utama adalah berkas out. Keberhasilan: kalimat ORCA TERMINATED NORMALLY di akhir, dan untuk optimasi THE OPTIMIZATION HAS CONVERGED. Berkas xyz berisi geometri akhir untuk perhitungan berikutnya. gbw menyimpan orbital biner; ubah menjadi molden dengan orca_2mkl nama -molden, atau buat cube dengan orca_plot nama.gbw -i. Unggah berkas out ke Results Analyzer."

**Cek pemahaman.** (1) Dua kriteria sukses optimasi. (2) Perintah untuk molden. (3) Mengapa Freq dijalankan di level yang sama dengan Opt?

**Tugas.** Optimasi satu molekul kecil, laporkan: geometri akhir, jumlah frekuensi imajiner, energi total, dan kriteria selesai.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Pertemuan D4 · Praktik DFT dengan Gaussian

**Durasi:** 90 menit. **Halaman:** D4. **Capaian belajar:** (1) membaca input Gaussian; (2) mengubah chk menjadi fchk dan cube; (3) membandingkan ORCA dan Gaussian.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–30 | D4.1 Anatomi input |
| 30–55 | Praktik di Input Builder |
| 55–75 | D4.2 TD-DFT dan konversi orbital |
| 75–90 | D4.3 Perbandingan dan tugas |

### 0–10 Pemantik

> **Ucapkan:** "Gaussian dan ORCA menjawab pertanyaan yang sama dengan sintaks berbeda. Di jurnal, hasilnya setara. Keterampilan yang Anda butuhkan: membaca kedua format, dan tahu padanannya."

### 10–30 Anatomi input (D4.1)

> **Ucapkan:** "Gaussian membaca berkas dengan bagian-bagian dipisah baris kosong. Bagian Link 0 di atas: persen nprocshared, persen mem, persen chk. Lalu route section dimulai dengan tanda pagar p: metode per basis, kata kunci pekerjaan seperti opt, freq, td. Baris kosong, judul, baris kosong, muatan dan multiplisitas, koordinat, dan baris kosong di akhir yang wajib ada."

- **Lakukan:** tunjuk bagian; tunjuk contoh `#p B3LYP/6-31G(d) opt freq EmpiricalDispersion=GD3BJ scrf=(smd,solvent=water)`.
- **Tanyakan:** "Apa yang terjadi jika baris kosong terakhir tidak ada?" **Jawaban:** Gaussian sering gagal membaca atau macet.

### 30–55 Praktik di Input Builder

- **Lakukan (demo):** pilih Gaussian; preset "TD-DFT dye"; tunjuk td(nstates=20,singlets,root=1) dan scrf SMD. Tambahkan atom berat (misal Ru) dan pilih LANL2DZ: tunjuk blok genecp.
- **Tanyakan:** "Mengapa atom berat perlu ECP?" **Jawaban:** elektron inti digantikan potensial efektif; mengurangi biaya dan memasukkan efek relativistik.
- **Tugas kelas:** membuat input Gaussian untuk molekul yang sama seperti pertemuan sebelumnya dan membandingkan dengan input ORCA.

### 55–75 TD-DFT dan konversi orbital (D4.2)

> **Ucapkan:** "Untuk orbital 3D, kita ubah berkas chk menjadi formatted checkpoint dengan formchk, lalu buat cube HOMO dan LUMO dengan cubegen. Keberhasilan: Normal termination of Gaussian di akhir log; optimasi: Optimization completed dan Stationary point found. Frekuensi negatif pada blok Frequencies berarti imajiner."

- **Lakukan:** tulis di papan tiga perintah: `formchk dye.chk dye.fchk`, `cubegen 0 MO=Homo dye.fchk homo.cube 0 h`, `cubegen 0 MO=Lumo dye.fchk lumo.cube 0 h`.
- **Tanyakan:** "Berkas mana yang diunggah ke Results Analyzer?" **Jawaban:** log, plus dua cube (HOMO dan LUMO).

### 75–90 Perbandingan dan tugas (D4.3)

> **Ucapkan:** "Perbedaan praktis: ORCA memakai berkas inp, keyword dengan tanda seru, dan blok persen; Gaussian memakai com, route dengan tanda pagar. ORCA menyimpan orbital di gbw dan dikonversi dengan orca_2mkl; Gaussian di chk dan formchk. ORCA gratis untuk akademik dengan pendaftaran; Gaussian komersial."

**Cek pemahaman.** (1) Padanan D3BJ di Gaussian. *EmpiricalDispersion=GD3BJ.* (2) Perintah untuk cube. *cubegen.* (3) Padanan %pal. *%nprocshared.*

**Tugas.** Bandingkan geometri hasil ORCA dan Gaussian untuk molekul yang sama (panjang ikatan, energi relatif) dan komentari perbedaannya.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Pertemuan D5 · Membaca Output, Kalkulator Energi, dan Troubleshooting

**Durasi:** 90 menit. **Halaman:** D5, Results Analyzer. **Capaian belajar:** (1) memeriksa kesehatan perhitungan; (2) menghitung energi reaksi dan bobot Boltzmann; (3) mendiagnosis masalah umum.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–30 | D5.1 Daftar periksa |
| 30–55 | D5.2 Kalkulator ΔG |
| 55–65 | D5.3 Bobot Boltzmann |
| 65–85 | D5.4 Troubleshooting |
| 85–90 | Tugas |

### 0–10 Pemantik

> **Ucapkan:** "Perhitungan yang selesai tanpa error belum tentu benar. Hari ini kita belajar skeptis secara sistematis: apa yang harus diperiksa sebelum Anda mempercayai satu angka."

### 10–30 Daftar periksa (D5.1)

> **Ucapkan:** "Enam hal: pertama, selesai normal. Kedua, SCF konvergen. Ketiga, optimasi konvergen. Keempat, frekuensi tanpa imajiner. Kelima untuk open-shell, kontaminasi spin: nilai S kuadrat mendekati S kali S ditambah satu. Keenam untuk TD-DFT, blok eksitasi lengkap."

- **Lakukan:** tunjuk tabel; buka Results Analyzer; unggah satu output contoh; tunjuk tabel frekuensi.
- **Tanyakan:** "Jika ⟨S²⟩ = 1,2 untuk doublet, apa artinya?" **Jawaban:** kontaminasi spin besar (nilai ideal 0,75); hasil kurang andal.

### 30–55 Kalkulator ΔG (D5.2)

> **Ucapkan:** "Masukkan energi bebas Gibbs. Reaktan: minus 232,123456 dan minus 76,400000 Hartree. Produk: minus 308,540000. Hitung selisihnya: produk minus reaktan sama dengan minus 0,016544 Hartree. Dikalikan 627,5095: minus 10,38 kilokalori per mol; minus 43,4 kilojoule per mol; minus 0,450 elektron volt. Pada 298,15 K konstanta kesetimbangan sekitar 4,1 kali 10 pangkat 7."

- **Lakukan:** masukkan angka itu di kalkulator; ubah suhu ke 400 K: K berubah.
- **Tanyakan:** "Berapa ketidakpastian realistis ΔG dari DFT?" **Jawaban:** biasanya beberapa kcal/mol; K bergantung eksponensial: 1,4 kcal/mol ≈ faktor 10.
- *Cadangan:* tanya apa yang terjadi jika ΔG positif.

### 55–65 Bobot Boltzmann (D5.3)

> **Ucapkan:** "Molekul fleksibel punya banyak konformer. Sifat yang diamati adalah rata-rata berbobot Boltzmann. Dengan energi relatif 0; 0,5; 1,2; dan 2,8 kcal per mol pada 298 K, bobotnya 63,7; 27,4; 8,4; dan 0,6 persen."

- **Lakukan:** ubah suhu ke 400 K dan amati bobot meratakan; hapus konformer dominan dan lihat perubahan.
- **Tanyakan:** "Mengapa mencari hanya satu konformer minimum bisa menyesatkan?" **Jawaban:** konformer dalam beberapa kcal/mol ikut berkontribusi pada spektrum.

### 65–85 Troubleshooting (D5.4)

- **Skenario 1: SCF tidak konvergen.** Penyebab: geometri tak wajar, spin salah, tebakan buruk. Tindakan: periksa geometri dan multiplisitas; ORCA SlowConv atau Gaussian scf=xqc; mulai dari basis kecil dan baca orbitalnya.
- **Skenario 2: optimasi tak konvergen.** PES datar, grid kasar: perbanyak siklus, grid halus (ultrafine), mulai dari struktur pra-optimasi.
- **Skenario 3: frekuensi imajiner kecil (< 50 cm⁻¹).** Biasanya rotasi metil/grid kasar: optimasi ketat dengan grid halus.
- **Skenario 4: imajiner besar.** Titik pelana: ikuti mode, optimasi ulang.
- **Skenario 5: spektrum TD-DFT tak cocok.** Coba CAM-B3LYP, sertakan pelarut, bandingkan pola.
- **Lakukan:** bagikan tiga output "rusak" yang Anda siapkan; tiap kelompok mendiagnosis dalam 3 menit lalu presentasi.

**Tugas.** Hitung ΔG reaksi dari energi Gibbs yang diberikan (soal baru), dan nyatakan dalam kcal/mol, kJ/mol, dan K pada 298 K.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Pertemuan D6 · TD-DFT dan Spektrum UV-Vis

**Durasi:** 90 menit. **Halaman:** D6, Results Analyzer. **Capaian belajar:** (1) menjelaskan dasar TD-DFT dan kekuatan osilator; (2) mengubah garis eksitasi menjadi spektrum; (3) memilih fungsional dan menghindari jebakan; (4) menghitung LHE.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik |
| 10–30 | D6.1 Teori singkat |
| 30–60 | D6.2 Dari garis ke kurva |
| 60–75 | D6.3 Jebakan dan praktik |
| 75–90 | Alur lengkap dan tugas akhir |

### 0–10 Pemantik

> **Ucapkan:** "Kita ingin tahu warna sebuah molekul, atau seberapa baik dye menangkap cahaya matahari. Dari DFT keadaan dasar, kita hanya memperoleh orbital. Untuk eksitasi kita butuh teori respons: TD-DFT."

### 10–30 Teori singkat (D6.1)

> **Ucapkan:** "TD-DFT memberi energi eksitasi sebagai pole respons linear kerapatan, melalui persamaan Casida. Pendekatan Tamm–Dancoff menetapkan matriks B sama dengan nol. Intensitas ditentukan kekuatan osilator f, sebanding dengan energi eksitasi kali kuadrat momen dipol transisi. Panjang gelombang dalam nanometer sama dengan 1239,84 dibagi energi dalam elektron volt."

- **Tanyakan:** "Eksitasi 2,95 eV berada di panjang gelombang berapa?" **Jawaban:** 1239,84/2,95 = 420,3 nm.
- **Tanyakan:** "Apa arti f mendekati nol?" **Jawaban:** transisi terlarang (intensitas rendah).

### 30–60 Dari garis ke kurva (D6.2)

> **Ucapkan:** "Hasil TD-DFT berupa garis: energi dan f. Spektrum diperoleh dengan melebarkan tiap garis menjadi Gaussian. Masukkan tiga garis: 2,95 eV dengan f 0,02; 3,75 eV dengan f 0,85; 4,60 eV dengan f 0,30. Panjang gelombangnya 420,3; 330,6; dan 269,5 nm. Perhatikan: tinggi puncak bergantung pada σ yang Anda pilih, sedangkan f tidak."

- **Lakukan:** biarkan animasi σ berjalan; matikan; geser σ ke 0,1 dan 0,6; geser pergeseran ke +0,3 eV (pergeseran biru) dan −0,3 eV.
- **Tanyakan:** "Apa arti pergeseran koreksi?" **Jawaban:** meniru galat sistematis fungsional; membandingkan dengan eksperimen.
- **LHE:** 1 − 10^(−f): untuk f = 0,85 → 0,859; f = 0,30 → 0,499; f = 0,02 → 0,045.
- **Tanyakan:** "Mengapa LHE satu transisi bisa menyesatkan?" **Jawaban:** pita eksperimen lebar dan overlap; ini ukuran relatif.

### 60–75 Jebakan dan praktik (D6.3)

> **Ucapkan:** "Pertama, gunakan geometri keadaan dasar hasil optimasi tanpa frekuensi imajiner. Kedua, sertakan pelarut jika eksperimen dalam larutan. Ketiga, jumlah state harus cukup menutup rentang spektrum, misalnya 20 sampai 40. Keempat, fungsional hibrida murni meremehkan energi eksitasi transfer muatan; gunakan range-separated dan bandingkan. Kelima, transisi diberi label orbital: koefisien kuadrat kira-kira kontribusinya."

- **Lakukan:** buka Results Analyzer; unggah satu output TD-DFT; tunjuk tabel state: λ, E, f, LHE, transisi.
- **Tanyakan:** "Dye Anda dalam toluena; apa yang Anda atur?" **Jawaban:** pelarut SMD toluena, CAM-B3LYP/def2-TZVP, 20–30 state.

### 75–90 Alur lengkap dan tugas akhir

> **Ucapkan:** "Mari rangkum seluruh alur: bangun struktur di Molecular Builder, susun input di Input Builder, jalankan di komputer atau cluster, periksa output dengan daftar periksa D5, lalu analisis di Results Analyzer: geometri, frekuensi, HOMO dan LUMO, spektrum, dan LHE. Simpan semuanya dalam laporan."

**Cek pemahaman.** (1) Hubungan E dan λ. (2) Fungsi σ pelebaran. (3) Kapan CAM-B3LYP dipilih?

**Tugas akhir.** Laporan singkat: geometri, frekuensi, HOMO/LUMO, spektrum, dan perbandingan dengan eksperimen atau literatur untuk satu molekul pilihan. **Rubrik:** kelengkapan metode (20%), pemeriksaan kesehatan (20%), analisis dan perbandingan (40%), kejelasan (20%).

