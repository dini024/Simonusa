# Simonusa · Skrip Perkuliahan: Computational Chemistry dan DFT

Format: 1 bab = 1 pertemuan (90 menit). Gunakan halaman bab sebagai slide hidup (proyektor), jalankan animasinya saat narasi.

## Rencana 16 pertemuan
| # | Topik | Capaian belajar | Status halaman |
|---|---|---|---|
| 1 | Pengantar, peta metode | Menjelaskan peran simulasi dan memilih metode berdasar ukuran sistem dan waktu | ada |
| 2 | Schrödinger | Menafsirkan ψ, nilai eigen, \|ψ\|² | ada |
| 3 | Atom hidrogen | Menghubungkan n, l, m dengan energi, bentuk, node | ada |
| 4 | Hartree–Fock dan SCF | Menjelaskan siklus SCF dan batas HF | ada |
| 5 | Korelasi (MP2, CI, CC) | Membedakan metode post-HF dan biayanya | ada |
| 6 | Basis set | Memilih basis untuk tujuan tertentu | ada |
| 7 | Force field, MD, MC | Memilih metode klasik vs kuantum | ada |
| 8 | PES, optimasi, frekuensi | Menafsirkan minimum, TS, ZPE | ada |
| D1–D6 | DFT, fungsional, ORCA, Gaussian, output, TD-DFT | Menjalankan dan menganalisis DFT | ada |

## Pertemuan 1 · Pengantar Computational Chemistry (90 menit)
**Tujuan:** mahasiswa dapat menyebut fungsi simulasi (menjelaskan, memprediksi, memandu eksperimen), memilih kelas metode, dan menilai kualitas prediksi dengan membandingkannya dengan eksperimen.

- 0–10 mnt · **Pemantik.** "Jika ada 1,6 juta kandidat molekul dan satu bulan, bagaimana memilih?" Diskusi berpasangan 2 menit.
- 10–25 mnt · **Bagian 1.1.** Bacakan definisi, lalu minta mahasiswa memilih satu kartu bidang (obat, baterai, H₂, dst.) dan menyebut data apa yang dibutuhkan dari simulasi.
- 25–40 mnt · **Peta metode (1.2).** Klik tiap metode. Tanya: "Mengapa kotak DFT sempit dan MD lebar?" Jawab: elektron dihitung eksplisit sehingga biaya naik cepat.
- 40–60 mnt · **H₂ dari prinsip pertama (1.3a).** Minta prediksi sebelum menampilkan angka. Tunjukkan R~e~ dan ω hasil hitung vs eksperimen (galat frekuensi ≈ 25%). Geser ke jarak jauh: energi RHF di atas dua atom H, yaitu kegagalan RHF → jembatan ke Bab 5.
- 60–70 mnt · **Hückel (1.3b).** Geser N dan amati celah menyempit. "Mengapa panjang konjugasi menggeser warna?" Tegaskan model hanya menangkap tren.
- 70–85 mnt · **Pedoman eksperimen (1.4).** Corong penyaringan; isoterm GCMC (jendela θ 0,2–0,9); Eyring (ubah ΔG‡ dan T); Sabatier; K~d~.
- 85–90 mnt · Rangkuman dan kuis lisan.

**Pertanyaan diskusi:** Kapan simulasi menyesatkan? Apa yang harus dilaporkan agar hasil dapat direproduksi?
**Tugas:** ringkas satu paper (1 halaman): masalah, metode, validasi eksperimen.

## Pertemuan 2 · Schrödinger (90 menit)
**Tujuan:** menjelaskan makna ψ, mengapa energi terkuantisasi, dan aturan Born.

- 0–15 · Linimasa 1900–1933: tunjukkan bahwa tiap tahap menjawab satu kegagalan fisika klasik.
- 15–30 · Persamaan berwarna: tunjuk kinetik (kelengkungan), potensial, nilai eigen.
- 30–50 · **Paket gelombang.** "Perhatikan: bergerak dan melebar. Mengapa partikel bebas tidak tetap terlokalisasi?"
- 50–75 · **Kotak.** Mulai dari n₁=n₂ (diam), lalu campur. Tanyakan: "Mengapa kerapatan berayun hanya pada campuran?" Jawab: beda fase \(e^{-i(E_2-E_1)t}\).
- 75–90 · **Pengukuran** menyusun \|ψ\|². Rangkum.

**Latihan:** hitung E₁ elektron dalam kotak 1 nm (hasil ≈ 0,376 eV) dan panjang gelombang transisi 1→2.

## Pertemuan 3 · Hidrogen (90 menit)

- 0–20 · Persamaan dan bilangan kuantum. 20–45 · Animasi garis spektral: minta prediksi λ Balmer sebelum ditampilkan. 45–65 · Peluang radial: hitung node n−l−1. 65–85 · Awan orbital: diskusikan tanda fase sebagai dasar ikatan. 85–90 · Rangkuman.

**Latihan:** hitung λ transisi 4→2 (≈ 486 nm) dan jelaskan warnanya.

## Pertemuan 4 · Hartree–Fock dan SCF (90 menit)
**Tujuan:** menjelaskan masalah banyak-elektron dan menjalankan SCF.

- 0–15 · Hamiltonian molekul; tekankan suku tolakan. 15–30 · Slater determinan: tukar dua baris, tanda berbalik. 30–45 · Persamaan Roothaan dan arti J dan K.
- 45–75 · **SCF H₂ nyata.** Mulai dari tebakan "elektron di atom A": narasi "kerapatan mengalir ke simetris". Ubah α menjadi kecil: konvergen lebih lambat. Bandingkan dengan tebakan simetris.
- 75–90 · Batas HF dan jembatan ke korelasi/DFT.

**Latihan:** gunakan tabel iterasi untuk menentukan iterasi saat |ΔE|<10⁻⁶ untuk α=1 dan α=0,5.
**Penilaian (contoh):** kuis 20%, tugas paper 20%, praktik ORCA/Gaussian 30%, ujian 30%.

## Pertemuan 5 · Korelasi elektron (90 menit)
**Tujuan:** menjelaskan energi korelasi dan memilih MP2/CC berdasarkan biaya.

- 0–15 · Pemantik: "HF sudah 99% energi. Mengapa tetap tidak cukup?" Jawab: 1% sebanding energi ikatan.
- 15–40 · **Lubang korelasi.** Tampilkan mode tanpa korelasi lalu berkorelasi; minta mahasiswa menjelaskan perbedaan histogram.
- 40–65 · Persamaan MP2, CI, CC: tunjuk penyebut selisih energi orbital (MP2) dan eksponensial T (CC, size-extensive).
- 65–85 · **Skala biaya.** "Jika sistem 2× lebih besar, CCSD(T) berapa kali lebih mahal?" (2⁷=128). 85–90 · Rangkuman.

**Latihan:** perkirakan waktu CCSD(T) jika DFT GGA butuh 1 jam pada sistem 3× lebih besar.

## Pertemuan 6 · Basis set (90 menit)

- 0–15 · LCAO dan alasan Gaussian dipakai. 15–35 · STO-nG: tambah n, aktifkan skala log; bahas cusp dan ekor. 35–55 · Polarisasi dan difus: tanyakan basis untuk anion. 55–75 · **Ekstrapolasi CBS:** ubah B dan amati galat. 75–90 · Tabel pemilihan basis dan biaya relatif.

**Latihan:** pilih basis untuk (a) optimasi 80 atom organik, (b) afinitas elektron, (c) TD-DFT dye; alasannya.

## Pertemuan 7 · Force field, MD, Monte Carlo (90 menit)

- 0–15 · Persamaan force field. 15–30 · Kurva Lennard-Jones: ubah ε dan σ. 30–55 · **MD hidup:** naikkan T dari 0,3 ke 1,5 dan amati pelelehan; diskusikan energi total. 55–80 · **GCMC:** J=0 cocokkan Langmuir (catat titik); J>0 amati kondensasi. 80–90 · Pemilihan metode.

**Latihan:** untuk H₂ pada zeolit, tentukan variabel input GCMC (T, P, medan gaya, μ).

## Pertemuan 8 · PES, optimasi, frekuensi (90 menit)

- 0–20 · PES dan titik stasioner. 20–45 · Optimasi pada permukaan Morse dan penghalang: mulai tepat di x=0 pada penghalang ("gradien nol, tetapi bukan minimum"). 45–70 · Frekuensi: ubah k dan μ; hitung CO. 70–90 · ZPE dan energi bebas; kriteria imajiner.

**Latihan:** hitung ν̃ untuk k=500 N/m dan μ=1 amu (≈2913 cm⁻¹).

## Course 2 · DFT dengan ORCA dan Gaussian (6 pertemuan)
**D1 · HK dan KS.** 0–20 dimensi Ψ vs ρ (ulang Bab 2/4); 20–45 teorema HK dan persamaan KS: tunjuk v_H, v_xc; 45–75 animasi SCF kerapatan H₂: minta prediksi "di mana Δρ positif?"; 75–90 konsekuensi praktis. Latihan: sebut dua beda KS dan HF.
**D2 · Fungsional.** 0–20 tangga Jacob; 20–45 F_x(s): geser κ hingga melanggar Lieb–Oxford; 45–65 dispersi D3BJ; 65–85 tabel pemilihan. Latihan: pilih fungsional untuk (a) geometri dye, (b) eksitasi CT, (c) celah pita padatan.
**D3 · ORCA.** 0–20 anatomi input; 20–50 praktik: tulis input Opt+Freq dari molekul di Molecular Builder; 50–75 skrip SLURM dan submit; 75–90 berkas hasil dan Results Analyzer. Tugas: optimasi satu molekul kecil dan laporkan kriteria selesai.
**D4 · Gaussian.** Sama dengan D3: route section, chk→fchk→cube, bandingkan format dengan ORCA. Tugas: input Gaussian untuk molekul yang sama dan bandingkan geometri.
**D5 · Output dan troubleshooting.** 0–30 daftar periksa; 30–55 kalkulator ΔG dan bobot Boltzmann (beri 4 konformer); 55–85 kasus rusak: bagikan output gagal dan minta diagnosis. Latihan: hitung ΔG reaksi dari energi Gibbs yang diberikan.
**D6 · TD-DFT.** 0–25 Casida, f, λ=1239,84/E; 25–60 garis → kurva: ubah σ dan pergeseran; 60–80 jebakan CT dan pemilihan fungsional; 80–90 rangkuman seluruh alur. Tugas akhir: laporan singkat (geometri, frekuensi, HOMO/LUMO, spektrum) memakai Results Analyzer.
