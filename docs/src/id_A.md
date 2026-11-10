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

# Pertemuan 2 · Persamaan Schrödinger

**Durasi:** 90 menit. **Halaman:** Bab 2. **Capaian belajar:** (1) menjelaskan mengapa fisika klasik gagal dan bagaimana mekanika kuantum muncul; (2) membaca tiap suku persamaan Schrödinger; (3) menafsirkan ψ, energi terkuantisasi, dan aturan Born.

| Menit | Kegiatan |
|---|---|
| 0–10 | Pemantik dan konteks |
| 10–25 | 2.1 Sejarah |
| 25–40 | 2.2 Persamaan dan artinya |
| 40–55 | 2.3 Paket gelombang |
| 55–75 | 2.4 Partikel dalam kotak |
| 75–85 | 2.5 Pengukuran dan |ψ|² |
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

### 75–85 Pengukuran dan |ψ|² (2.5)

> **Ucapkan:** "Tiap titik di sini satu hasil pengukuran posisi. Satu pengukuran acak, tetapi ribuan pengukuran menyusun pola kuadrat fungsi gelombang, garis merah. Inilah tafsir Born: fungsi gelombang tidak mengatakan di mana partikel berada, tetapi seberapa mungkin."

- **Lakukan:** tunggu sampai histogram meniru kurva; pilih n₁ = 3 dan ulangi.

### 85–90 Rangkuman dan tugas

**Cek pemahaman.** (1) Apa arti kuantisasi energi? *Hanya nilai eigen tertentu yang diperbolehkan oleh syarat batas.* (2) Apa |Ψ|²? *Rapat peluang.* (3) Mengapa paket gelombang melebar? *Dispersi.*

**Tugas.** Hitung E₁ untuk elektron dalam kotak 1 nm (jawaban: 0,376 eV) dan panjang gelombang transisi 1→2 (jawaban: sekitar 1100 nm). Jelaskan dalam tiga kalimat mengapa elektron dalam kotak yang lebih sempit bergerak lebih "energik".

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
