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
