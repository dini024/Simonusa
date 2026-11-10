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
