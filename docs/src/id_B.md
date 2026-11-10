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
