# Simonusa: Simulation and Modeling of Nusantara Atoms

Bahasa utama: **English** (bawaan). Bahasa Indonesia tersedia lewat tombol EN/ID di header.

Situs statis (GitHub Pages) + backend opsional untuk menjalankan ORCA.

```
index.html  course.html (+ course/ bab 1-8, D1-D6)  pretest.html  terminal.html  molecular-builder.html
input-builder.html  results-analyzer.html  orca-docker.html  literatur.html  skrip-perkuliahan*.md
assets/{css,js}      backend/ (FastAPI)      local-agent/ (Docker Desktop MacBook)
```

## 1. Deploy situs (GitHub Pages)
1. Salin seluruh isi folder ini (kecuali `backend/` dan `local-agent/` jika tak ingin dipublikasikan) ke repository.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Halaman utama, kursus, builder, dan analisis berjalan penuh di browser (tanpa backend). Hanya `orca-docker.html` memerlukan backend untuk mengirim job.

## 2. Local agent (Docker Desktop, MacBook)
```bash
./local-agent/install.sh
ORCA_IMAGE=<image-orca-anda> .venv/bin/python local-agent/agent.py
```
- Agent mencetak token. Buka Dashboard → isi URL `http://127.0.0.1:8765` dan token → Simpan & tes.
- ORCA tidak disertakan (lisensi). Anda harus menyediakan image Docker yang berisi ORCA; perintah di dalam container: `$(which orca) <input> > <nama>.out`. Sesuaikan `adapters.py` bila image Anda berbeda.
- Apple Silicon: image ORCA biasanya `linux/amd64`; set `DOCKER_PLATFORM=linux/amd64` (berjalan lewat emulasi, lambat).
- Safari memblokir akses dari halaman https ke `http://127.0.0.1`; gunakan Chrome/Firefox, atau jalankan situs lokal (`python3 -m http.server 8000`) dan ubah `ALLOWED_ORIGINS`.

## 3. Backend untuk HPC BRIN (SLURM)
```bash
pip install -r backend/requirements.txt
cp backend/.env.example backend/.env   # lalu edit, dan `export $(cat backend/.env | xargs)`
uvicorn backend.app.main:app --host 127.0.0.1 --port 8000
```
Dua mode:
- **Di login node**: kosongkan `SLURM_SSH_HOST`; backend memanggil `sbatch/squeue/sacct` langsung.
- **Dari laptop/server lain**: isi `SLURM_SSH_HOST` (alias di `~/.ssh/config`, kunci SSH tanpa password). Butuh `ssh` dan `rsync`.
Atur `SLURM_REMOTE_ROOT` (default `/mgpfs/home/dini024/ccjobs`), `SLURM_PARTITION`, dan `SLURM_SETUP` (baris `module load ...` untuk ORCA di Trembesi; nama modul harus Anda sesuaikan).

Mengekspos backend ke internet: gunakan HTTPS (reverse proxy atau tunnel), `API_TOKEN` yang panjang, dan `ALLOWED_ORIGINS` yang hanya berisi domain Pages Anda.

## 4. API
`GET /api/health`, `POST /api/jobs` (form: `name, backend, nprocs, main, files[]`), `GET /api/jobs`, `GET /api/jobs/{id}`, `/files`, `/files/{nama}`, `/log`, `POST /api/jobs/{id}/cancel`. Semua memakai `Authorization: Bearer <token>`.


## Dua bahasa (ID/EN)
- Tombol ID/EN di header; pilihan tersimpan di browser (`localStorage.cc_lang`). Seluruh halaman, bab, persamaan, blok kode, label formulir, tabel, dan grafik tersedia dalam dua bahasa.
- Teks statis ditulis berpasangan (`lang="id"` / `lang="en"`). Teks yang dibuat JavaScript (tabel, pesan, label grafik) diterjemahkan lewat kamus di bagian akhir `assets/js/shell.js` (blok "runtime translation").
- Menambah teks baru: tulis pasangan `lang` di HTML, atau tambahkan entri ID → EN pada kamus di `shell.js`.

## Skrip perkuliahan (Word)
`docs/Simonusa-Skrip-Perkuliahan-ID.docx` dan `docs/Simonusa-Lecture-Script-EN.docx`: 14 pertemuan, masing-masing 90 menit (kalimat yang diucapkan, demo, pertanyaan dan jawaban, latihan). Sumber Markdown: `docs/src/`, `skrip-perkuliahan.md`, `skrip-perkuliahan-en.md`.

## 5. Catatan penggunaan
- Jalankan lokal dulu: `python3 -m http.server 8000` di folder ini, buka `http://localhost:8000`.
- Semua halaman memuat RDKit, 3Dmol, dan MathJax dari CDN (butuh internet).
- Results Analyzer: unggah output ORCA/Gaussian, cube HOMO/LUMO, UV-Vis dan J-V eksperimen; parser diuji dengan sampel sintetis, bukan semua versi program.

## 6. Batasan yang diketahui
- Backend hanya mendukung ORCA; Gaussian belum.
- Status job lokal hilang jika agent restart saat job berjalan.
- Parser tabel docking di `parsers.js` heuristik dan belum diuji dengan output ORCA asli.
- Orbital 3D hanya dari cube/gambar; molden belum dibaca. Jsc tidak dihitung dari spektrum AM1.5G.

## Bahasa, tema, dan skrip
- Tombol ID/EN di header (pilihan tersimpan di browser). Beranda, daftar kursus, navigasi, dan Bab 1 sudah dua bahasa; bab lain masih Indonesia dan menampilkan banner.
- Logo: `assets/img/simonusa-emblem.png`, `simonusa-logo-full.png`, `favicon.png` (dari logo asli Anda; file asli: `Simonusa_logo_original.jpg`); tema: `assets/css/style.css`; header dan tombol bahasa: `assets/js/shell.js`.
- Skrip perkuliahan Word: folder `docs/` (ID dan EN); sumber Markdown: `skrip-perkuliahan*.md`.

## Pre-test Linux dan Terminal latihan
- `pretest.html`: 20 soal pilihan ganda A–D tentang perintah Linux/SLURM. Setelah tiap jawaban langsung tampil benar/salah, jawaban yang benar, penjelasan, dan skor berjalan; di akhir ada skor, level, dan daftar soal yang perlu diulang (skor terbaik disimpan di browser).
- `terminal.html`: terminal HPC tiruan (Training Mode). Semuanya dijalankan JavaScript di browser: direktori dan berkas virtual, perintah Linux (`pwd ls cd mkdir cp mv rm cat grep head tail wc find echo > >> |`), editor `nano`, `module load orca`, `orca`, `sbatch`, `squeue`, `sacct`, `scancel`, dan `download`. Tidak ada ORCA yang dijalankan dan tidak ada job yang dikirim ke BRIN. Keluaran ORCA simulasi memakai tata letak asli (energi, orbital, frekuensi, TD-DFT) dan dapat diunggah ke Results Analyzer; angkanya dibangkitkan untuk latihan.
- Bahasa utama modul adalah **Inggris**; Indonesia adalah pilihan (tombol EN/ID di header).
