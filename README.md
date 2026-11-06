# Simonusa

Situs statis (GitHub Pages) + backend opsional untuk menjalankan ORCA.

```
index.html  course.html (+ course/ bab 1-8, D1-D6; ID/EN)  molecular-builder.html  input-builder.html
results-analyzer.html  orca-docker.html  literatur.html  skrip-perkuliahan.md
assets/{css,js}      backend/ (FastAPI)      local-agent/ (Docker Desktop MacBook)
```

## 1. Deploy situs (GitHub Pages)
1. Salin seluruh isi folder ini (kecuali `backend/` dan `local-agent/` jika tak ingin dipublikasikan) ke repository.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Halaman 1-4 berjalan penuh di browser (tanpa backend). Hanya `orca-docker.html` memerlukan backend untuk mengirim job.

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
- Logo: `assets/img/simonusa-logo.svg`; tema: `assets/css/style.css`; header dan tombol bahasa: `assets/js/shell.js`.
- Skrip perkuliahan Word: folder `docs/` (ID dan EN); sumber Markdown: `skrip-perkuliahan*.md`.
