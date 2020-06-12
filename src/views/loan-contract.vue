<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('loanContract')"
                left-arrow
                @click-left="onClickLeft"
        >
        </van-nav-bar>
        <van-row  class="main">
            <p class="contract-detail">
            AyoPinjam Pinjaman no 1.0 (berikut semua lampiran, addendum dan setiap perubahan daripadanya, yang mana semuanya akan disebut sebagai "Perjanjian") dibuat pada dan dilaksanakan oleh dan antara:
            <br/>
            <br/>
            (1) Bapak/Ibu dengan nomer pendaftaran; ("Peminjam") dengan
            <br/>
            (2) Pemberi Pinjaman dengan nomer pendaftaran; ("Pemberi Pinjaman") Pemberi Pinjaman dan Peminjam secara bersama disebut sebagai "Para Pihak" dan secara masing-masing sebagai "Pihak".
            <br/>
            <br/>
            Bagian 1. Definisi dan Interpretasi
            <br/>
            <br/>
            1. Definisi: Untuk tujuan Perjanjian ini dan sebagai tambahan setiap definisi lainnya yang ditetapkan dalam Perjanjian ini, istilah berikut memiliki arti sebagaimana ditetapkan bagi istilah tersebut, kecuali konteksnya secara jelas menentukan lain: "Rekening Bank Peminjam" berarti rekening bank tertentu yang ditunjuk oleh Peminjam untuk tujuan menerima pencairan Pinjaman. "Data Peminjam" berarti data dan informasi pribadi yang disampaikan oleh Peminjam pada Platform untuk diverifikasi oleh Perusahaan atas nama Pemberi Pinjaman. "ID Platform Peminjam" berarti username dan / atau nomor registrasi Peminjam pada Platform yang melekat, mewakili dan terkait dengan Data Peminjam yang telah disampaikan dan terdaftar pada Platform. "Perusahaan" berarti Perusahaan kami. "Layanan Perusahaan" berarti layanan yang diberikan oleh Perusahaan kepada Peminjam sesuai dengan CSA. "CSA" berarti perjanjian layanan yang akan dilaksanakan antara Perusahaan dan Peminjam sehubungan dengan pemberian Layanan Perusahaan. "Jumlah Utang Penuh" berarti jumlah agregat dari jumlah pokok Pinjaman, biaya administrasi (biaya pemeliharaan, biaya resiko, biaya manajemen dan biaya transfer) daripadanya dan biaya lainya yang terakumulasi. Sebelum pinjaman diterbitkan beberapa bagian dari pinjaman tersebut terlebih dahulu akan dipotong dengan beberapa biaya ini "Rekening Bank" berarti rekening bank Perusahaan yang ditetapkan untuk tujuan pencairan Pinjaman untuk Peminjam dan penerimaan pembayaran jumlah pokok dari Pinjaman, dan / atau biaya atau jumlah terutang lain dari Peminjam kepada Pemberi Pinjaman maupun kepada Perusahaan. "Data Pemberi Pinjaman" berarti informasi identifikasi pribadi Pemberi Pinjaman yang diberikan oleh Pemberi Pinjaman kepada Perusahaan dan / atau Platform. "ID Platform Pemberi Pinjaman" berarti username dan / atau nomor registrasi Pemberi Pinjaman pada Platform yang melekat, mewakili dan terkait dengan Data Pemberi Pinjaman yang telah disampaikan dan terdaftar pada Platform. "Pinjaman" berarti layanan pembiayaan dalam bentuk pinjaman yang diberikan oleh Pemberi Pinjaman ke Peminjam, yang hanya akan digunakan untuk keperluan pribadi, seperti pendidikan, kesehatan dll. "Permohonan Pinjaman" berarti permohonan yang diajukan secara elektronik oleh Peminjam melalui Platform untuk memperoleh Pinjaman, termasuk dokumen pendukung dan informasi yang diwajibkan oleh Platform. "Tanggal Pencairan Pinjaman" berarti tanggal ketika Pemberi Pinjaman atau pihak ketiga atas nama Pemberi Pinjaman, termasuk Perusahaan, melakukan wire transfer Pinjaman ke Rekening Bank Peminjam. "Rincian Pembiayaan Pinjaman" berarti syarat dan ketentuan material Pinjaman sebagaimana diatur dalam Rincian Pembiayaan Pinjaman yang terlampir. "Platform" berarti platform pinjaman peer-to-peer berbasis internet yang dimiliki dan dioperasikan oleh Perusahaan, termasuk application " MyKlik " "Syarat dan Ketentuan" berarti syarat dan ketentuan sebagaimana ditetapkan dalam Bagian 3.
            <br/>
            2. Interpretasi: Dalam Perjanjian ini kecuali konteksnya menentukan lain:
            <br/>
            <br/>
            a. Setiap Memesan dan lampiran akan merupakan bagian dari Perjanjian ini dan referensi kepada Perjanjian ini akan mencakup resital dan lampiran;
            <br/>
            b. Referensi kepada Perjanjian ini atau dokumen lain adalah kepada Perjanjian ini atau dokumen lain tersebut yang berlaku untuk saat ini dan sebagaimana diubah dari waktu ke waktu sesuai dengan Perjanjian ini atau dokumen tersebut (sebagaimana keadaan);
            <br/>
            c. Kata yang menggunakan jenis kelamin mencakup setiap jenis kelamin, referensi kepada bentuk tunggal mencakup bentuk jamak dan sebaliknya dan kata yang menunjukkan orang termasuk individu dan badan hukum, kemitraan, asosiasi tanpa badan hukum dan badan-badan lain (dalam setiap kasus, di mana pun berada dan untuk tujuan apa pun) dan sebaliknya ;
            <br/>
            d. Judul dan isi tabel dalam Perjanjian ini hanyalah untuk kemudahan dan tidak mempengaruhi interpretasi;
            <br/>
            e. Jika terjadi konflik atau ketidaksesuaian antara klausul, dan setiap lampiran dalam Perjanjian ini maka klausul yang akan berlaku. Untuk tujuan ini, kelalaian (baik disengaja atau tidak disengaja) tidaklah, dengan sendirinya, dapat dianggap sebagai menimbulkan konflik atau ketidaksesuaian;
            <br/>
            dan f. Dalam Perjanjian ini kata-kata "lain", "termasuk" dan "khususnya" tidak membatasi keumuman kata sebelumnya dan kata-kata yang mengikutinya tidak akan ditafsirkan sebagai terbatas pada lingkup untuk kelas yang sama seperti kata-kata sebelumnya dimana dimungkinkan susunan yang lebih luas.
            <br/>
            Bagian 2. Permohonan Pinjaman
            <br/>
            <br/>
            1. Peminjam telah melakukan permohonan Pinjaman dengan mengajukan Permohonan Pinjaman kepada Perusahaan melalui Platform. <br/>
            <br/>
            2. Peminjam setuju bahwa:
            <br/>
            <br/>
            1. Pemberi Pinjaman akan memiliki hak untuk membebankan biaya terhadap Pinjaman sebagaimana yang tertera dalam Rincian Pembiayaan Pinjaman dan Perusahaan akan berhak untuk membebankan biaya kepada Peminjam atas Layanan Perusahaan sesuai dengan CSA dan bahwa Peminjam harus membayar semua jumlah tersebut pada saat jatuh tempo berdasarkan Perjanjian ini dan berdasarkan CSA, sebagaimana berlaku, <br/>
            dan 2. Peminjam wajib membayar utang sesuai dengan Rincian Pembiayaan Pinjaman dan harus membayar Hutang Jumlah Penuh pada saat jatuh tempo berdasarkan Perjanjian ini dan tanpa penundaan ke Rekening Bank sebagaimana tercantum dalam Rincian Pembiayaan Pinjaman.
            <br/>
            <br/>
            3. Peminjam setuju dan memahami bahwa:
            <br/>
            <br/>
            1. Pemberi Pinjaman telah menunjuk Perusahaan sebagai pihak untuk:
            <br/>
            I. mengelola dan memproses Permohonan Pinjaman dari Peminjam, termasuk namun tidak terbatas untuk melakukan verifikasi dan / atau validasi data Peminjam yang terdapat dalam Permohonan Pinjaman atau yang diserahkan kepada Pemberi Pinjaman melalui Perusahaan atau Platform; <br/>
            II. mengawasipenagihan Utang Jumlah Penuh pada saat jatuh tempo serta biaya yang terkait dengan hal tersebut termasuk namun tidak terbatas pada penerbitan surat peringatan dan pesan teks ke, dan panggilan telepon ke Peminjam; <br/>
            dan III. mencairkan Pinjaman ke Rekening Bank Peminjam dan menerima semua pembayaran dari Pinjaman dan sehubungan dengan Layanan Perusahaan di Rekening Bank; atas nama Pemberi Pinjaman.
            <br/>
            <br/>
            2. Permohonan Pinjaman akan diproses sesuai dengan pemenuhan kriteria yang ditentukan oleh Pemberi Pinjaman dalam Bagian 4 dan verifikasi daripadanya oleh Perusahaan, dan merupakan dasar mana Perusahaan akan mencairkan Pinjaman kepada Peminjam, atas nama Pemberi Pinjaman. <br/>
            <br/>
            3. Persetujuan Permohonan Pinjaman akan sepenuhnya didasarkan pada evaluasi mutlak Pemberi Pinjaman dan tergantung pada pelaksanaan Peminjam terhadap dokumen hukum dan formalitas lainnyayang diperlukan sebagaimana diwajibkan oleh Pemberi Pinjaman.
            <br/>
            <br/>
            4. Peminjam dengan ini memberikan kuasa dan wewenang penuh kepada Pemberi Pinjaman dan Perusahaan melalui Platform, masing-masing karyawan, agen dan perusahaan atau pihak ketiga yang diberi kuasa oleh Perusahaan, untuk menyalin, membagikan dan menggunakan Data Peminjam untuk setiap tindakan yang diambil terkait Permohonan Pinjaman dan Pinjaman sebagaimana salah satu orang-orang yang berwenang tersebut anggap perlu.
            <br/>
            <br/>
            5. Peminjam memahami bahwa Perusahaan bukan merupakan pihak dalam Perjanjian ini meskipun Perusahaan memiliki wewenang untuk bertindak atas nama Pemberi Pinjaman berdasarkan Perjanjian ini. Ketentuan dan kewajiban yang terkandung di dalam Perjanjian ini dan / atau timbul dari Perjanjian ini tidak akan dengan cara apapun mengikat Perusahaan atau Platform dan setiap permasalahan hukum yang ditimbulkannya akan menjadi permasalahan antara Peminjam dan Pemberi Pinjaman saja. Masing-masing Pemberi Pinjaman dan Peminjam dengan ini membebaskan Perusahaan dari kewajiban apapun yang berkaitan dengan atau yang timbul dari proses Permohonan Pinjaman atau Pinjaman dan akan secara tanggung renteng mengganti rugi Perusahaan atas setiap klaim, kerugian, biaya, pengeluaran, kerusakan atau kewajiban yang timbul atau yang dialami oleh Perusahaan yang berkaitan dengan pelaksanaan kegiatan yang dilimpahkan kepada Perusahaan berdasarkan Perjanjian ini atau pelaksanaan kewajiban masing-masing Peminjam dan Pemberi Pinjaman berdasarkan Perjanjian ini. Kewajiban pembebasan dan ganti rugi ini akan bertahan meskipun berakhirnya atau diakhirinya Perjanjian ini dan berlaku dan mengikat terhadap Pemberi Pinjaman dan Peminjam bahkan jika Permohonan Pinjaman ditolak dan Pinjaman tidak diberikan kepada Peminjam.
            <br/>
            <br/>
            6. Peminjam menyatakan dan menjamin dan menyepakati dengan Pemberi Pinjaman bahwa:
            <br/>
            I. Peminjam telah memenuhi kriteria minimum sebagaimana ditentukan dalam Bagian 4.1; <br/>
            II. Data Peminjam dan semua informasi lain yang diberikan kepada Perusahaan dan / atau Platform merupakan data dan informasi lengkap dan benar dari Peminjam dan tidak menyesatkan dalam hal apapun; <br/>
            III. Peminjam akan bertanggung jawab secara hukum untuk setiap pemalsuan, dan penggunaan yang tidak sah dari, Data Peminjam yang diberikan oleh atau atas nama Peminjam kepada Perusahaan atau Platform; <br/>
            IV. Peminjam menandatangani Perjanjian ini dengan itikad baik dan tanpa niat untuk melakukan pelanggaran terhadap aturan dan peraturan yang berlaku termasuk namun tidak terbatas pada pencucian uang, penghindaran pajak dan peraturan anti terorisme;<br/>
            V. Peminjam menandatangani Perjanjian ini untuk dan atas namanya sendiri, bebas dan atas keinginannya sendiri tanpa paksaan atau intimidasi dari pihak manapun dan mengetahui dan memahami isi dan konsekuensi daripadanya; <br/>
            VI. tanda tangan elektronik Peminjam dalam Perjanjian adalah sah dan Perjanjian ini merupakan kewajiban yang sah, legal dan mengikat terhadap Peminjam, dan dapat dilaksanakan terhadapnya sesuai dengan hukum yang berlaku; <br/>
            VII. Peminjam tidak diwajibkan untuk memotong pajak atau jumlah lain dari setiap pembayaran Pinjaman, baik untuk pokok, biaya atau jumlah lain; <br/>
            dan VIII. hasil dari Pinjaman akan digunakan semata-mata untuk keperluan pribadi, bukan untuk tujuan komersial atau bisnis.
            <br/>
            <br/>
            7. Pemberi Pinjaman menyatakan dan menjamin kepada Peminjam bahwa:
            <br/>
            <br/>
            I. tanda tangan elektronik Pemberi Pinjaman dalam Perjanjian ini adalah sah dan Perjanjian ini merupakan kewajiban yang sah, legal dan mengikat terhadap Pemberi Pinjaman, yang dapat dilaksanakan terhadapnya sesuai dengan hukum yang berlaku; <br/>
            II. Pemberi Pinjaman menandatangani Perjanjian ini dengan itikad baik dan tanpa niat untuk melakukan pelanggaran terhadap aturan dan peraturan yang berlaku termasuk namun tidak terbatas pada pencucian uang, penghindaran pajak dan peraturan anti terorisme; <br/>
            III. Pemberi Pinjaman menandatangani Perjanjian ini untuk dan atas namanya sendiri, bebas dan atas keinginannya sendiri tanpa paksaan atau intimidasi dari pihak manapun dan mengetahui dan memahami isi dan konsekuensi daripadanya;
            <br/>
            <br/>
            8. Peminjam setuju dan memahami bahwa Data Peminjam yang disampaikan kepada Perusahaan dan / atau Platform akan diungkapkan kepada Pemberi Pinjaman dan digunakan oleh Perusahaan dan Pemberi Pinjaman untuk memproses Permohonan Pinjaman dan oleh Perusahaan untuk mengelola Pinjaman serta sehubungan dengan pemberian layanan oleh Perusahaan kepada Pemberi Pinjaman dan Peminjam sesuai dengan CSA.
            <br/>
            <br/>
            9. Pemberi Pinjaman setuju dan memahami bahwa Data Peminjam yang disampaikan kepada Perusahaan dan / atau Platform akan digunakan oleh Perusahaan untuk memproses Permohonan Pinjaman dan mengelola Pinjaman serta sehubungan dengan pemberian layanan Perusahaan kepada Pemberi Pinjaman.
            <br/>
            <br/>
            10. Para Pihak mengakui dan setuju bahwa pelaksanaan Perjanjian ini bersama dengan Rincian Pembiayaan Pinjaman dan lampiran-lampiran lain daripadanya dapat dilaksanakan dengan menggunakan tanda tangan digital atau elektronik yang mana akan dianggap sebagai tanda tangan sah dari masing-masing Pihak. Masing-masing Pihak harus memberikan tanda tangan fisik untuk Perjanjian ini jika diminta oleh Perusahaan.
            <br/>
            <br/>
            11. Masing-masing Pihak telah membaca dan memahami isi, dan karena itu sepenuhnya memahami hak dan kewajiban yang timbul dari Perjanjian ini dan CSA.
            <br/>
            <br/>
            12. Peminjam setuju dan mengakui bahwa setelah menerima Pinjaman, Peminjam akan berhutang kepada Pemberi Pinjaman atas sejumlah dana yang dicairkan ke Rekening Bank milik Peminjam sesuai dengan Perjanjian ini dan syarat dan ketentuan yang tercantum dalam Rincian Pembiayaan Pinjaman Perjanjian ini ditambah biaya lainnya yang harus dibayar oleh Peminjam kepada Pemberi Pinjaman berdasarkan Perjanjian ini.
            <br/>
            <br/>
            13. Pemberi Pinjaman dengan ini memberi kuasa kepada Perusahaan untuk mencairkan Pinjaman ke Rekening Bank milik Peminjam setelah memenuhi ketentuan berikut:
            <br/>
            <br/>
            I. Pelaksanaan Perjanjian ini oleh Peminjam dan pelaksanaan CSA oleh Peminjam dan Perusahaan; <br/>
            II. Perusahaan telah memverifikasi informasi yang diberikan oleh Peminjam sebagaimana tercantum dalam Permohonan Pinjaman, termasuk Data Peminjam; <br/>
            dan III. Peminjam telah memenuhi kriteria minimum yang ditentukan oleh Pemberi Pinjaman, berdasarkan kebijakan tunggal dan mutlaknya.
            <br/>
            <br/>
            14. Peminjam sepenuhnya memahami bahwa Permohonan Pinjamannya dapat ditolak oleh Pemberi Pinjaman tanpa adanya kewajiban bagi Pemberi Pinjaman, Perusahaan dan / atau Platform untuk mengungkapkan alasan penolakan tersebut. Peminjam tidak berhak untuk meminta peninjauan kembali, evaluasi ulang, atau permintaan dalam bentuk lainnya untuk menilai kembali Permohonan Pinjaman yang ditolak.
            <br/>
            <br/>
            15. Para Pihak tidak akan berkomunikasi, berinteraksi atau terhubung, baik secara langsung maupun tidak langsung, dengan satu sama lain, selain dengan cara yang disediakan pada Platform.
            <br/>
            <br/>
            16. Dengan melengkapi Permohonan Pinjaman, Peminjam akan dianggap telah menandatangani Perjanjian ini secara elektronik dan Perjanjian ini adalah sah dan mengikat terhadap Peminjam ketika Permintaan Pinjaman disetujui oleh Pemberi Pinjaman.
            <br/>
            <br/>
            17. Pemberi Pinjaman dengan ini memberi kuasa kepada Perusahaan untuk melaksanakan hak-hak Pemberi Pinjaman berdasarkan Perjanjian ini dan Peminjam mengakui bahwa Perusahaan telah diizinkan untuk melaksanakan hak-hak Pemberi Pinjaman berdasarkan Perjanjian ini tanpa diperlukan pemberian otorisasi tambahan atau terpisah oleh Pemberi Pinjaman
            <br/>
            <br/>
            Bagian 3. Penggunaan Platform
            <br/>
            <br/>
            1. Peminjam wajib mendaftarkan dirinya sendiri pada Platform dengan memenuhi persyaratan dan prosedur berikut:
            <br/>
            <br/>
            I. Pemberian Data Peminjam dengan mengisi formulir elektronik yang disediakan pada Platform; <br/>
            dan II. Melengkapi Permohonan Pinjaman dengan mengisi formulir elektronik yang disediakan pada Platform.
            <br/>
            <br/>
            2. Setelah menyelesaikan proses pendaftaran sebagaimana dimaksud dalam Pasal 3.1 dan diatur di sini, Peminjam akan dianggap telah menyetujui ketentuan penggunaan Platform, yang mana kemudian Platform akan menerbitkan ID Platform Peminjam.
            3. Pemberi Pinjaman dengan ini memberi kuasa kepada Perusahaan dan / atau Platform untuk mengingatkan Peminjam mengenai tanggal pembayaran Pinjaman dan dalam hal terjadi kelalaian.
            4. Peminjam setuju untuk memberikan hard copy dokumen yang diserahkan dalam bentuk elektronik sesuai dengan Bagian 3.1 atau yang dibutuhkan oleh Perusahaan untuk mengesahkan Data Peminjam.
            <br/>
            <br/>
            Bagian 4. Verifikasi Data Peminjam
            <br/>
            <br/>
            1. Peminjam setuju dan memahami bahwa Pinjaman hanya akan diberikan kepada pemohon pinjaman yang memenuhi kriteria minimum berikut dan Peminjam dengan ini menyatakan dan menjamin kepada Pemberi Pinjaman bahwa Peminjam memenuhi atau akan memenuhi kriteria minimum tersebut:
            <br/>
            <br/>
            I. Usia pemohon pinjaman adalah 18-45 tahun saat mengajukan permohonan pinjaman; <br/>
            II. Pendapatan bulanan Pemohon Pinjaman harus sama dengan atau lebih dari Rp. 2.000.000 (dua juta Rupiah) <br/>
            III. Alamat tempat tinggal pemohon pinjaman harus berada di dalam wilayah DKI Jakarta. <br/>
            IV. Pemohon Pinjaman menerima kode konfirmasi satu kalinya dalam waktu 60 second sejak dikirim oleh Platform; <br/>
            V. Jumlah pokok pinjaman yang diberikan kepada pemohon yaitu Rp 1.000.000 (batas waktu pinjaman adalah 7hari) <br/>
            VI. Pemohon Pinjaman menjawab panggilan telepon yang dilakukan oleh Perusahaan dan memverifikasi identitasnya sesuai ketentuan Perusahaan;<br/>
            VII. referensi Pemohon Pinjaman akan memverifikasi informasi yang diberikan oleh Pemohon Pinjaman.
            <br/>
            <br/>
            2. Peminjam setuju dan memahami bahwa Perusahaan telah melakukan dan / atau akan melakukan verifikasi data atas nama Pemberi Pinjaman, yang akan termasuk namun tidak terbatas pada:
            <br/>
            <br/>
            I. Verifikasi melalui panggilan telepon ke Peminjam dan referensi yang diberikan oleh Peminjam serta Karyawan Peminjam jika dianggap perlu oleh Perusahaan;
            <br/>
            II. Verifikasi Ponsel yang menggunakan password satu kali; <br/>
            dan III. Pemrosesan data dari profil jaringan sosial yang diberikan oleh Peminjam selama proses permohonan pinjaman.
            <br/>
            <br/>
            3. Peminjam setuju bahwa Perusahaan telah menghubungi atau dapat menghubungi Peminjam atau pihak ketiga atas nama Pemberi Pinjaman melalui berbagai cara, termasuk namun tidak terbatas pada:
            <br/>
            <br/>
            I. pesan teks telepon;
            <br/>
            II. email; <br/>
            III. panggilan suara; <br/>
            dan IV. panggilan suara otomatis
            <br/>
            <br/>
            4. Peminjam akan bertanggung jawab atas ketepatan informasi yang diberikan oleh pihak ketiga kepada Perusahaan dalam proses verifikasi.
            <br/>
            <br/>
            Bagian 5. Perlindungan Data Peminjam
            <br/>
            <br/>
            1. Peminjam dengan ini memberikan kuasa dan kewenangan penuh kepada Pemberi Pinjaman dan perwakilan resminya dan / atau pihak ketiga yang ditunjuk oleh Pemberi Pinjaman termasuk Perusahaan dan Platform untuk, setiap saat, tanpa pemberitahuan lebih lanjut kepada Peminjam, melakukan semua atau salah satu tindakan dan fungsi berikut sesuai dengan semua hukum dan peraturan yang berlaku:
            <br/>
            <br/>
            i. pengumpulan, penyimpanan, penggunaan, pemeliharaan, analisis, dan penyebaran Data Peminjam;
            <br/>
            ii. melakukan pemeriksaan data, pemeriksaan referensi, mengajukan pertanyaan dan verifikasi berdasarkan data dan informasi yang diberikan kepada, atau diperoleh oleh, Perusahaan atau Platform jika dan ketika hal tersebut dianggap perlu oleh Perusahaan sehubungan dengan Data Peminjam;
            <br/>
            dan iii. membagi, memperoleh dan / atau mengungkapkan Data Peminjam ke otoritas pemerintah atau pihak ketiga lainnya yang berwenang yang ditunjuk atau diberi kuasa oleh Pemberi Pinjaman untuk keperluan verifikasi dan penilaian yang tepat atas informasi dan data Peminjam.
            <br/>
            <br/>
            2. Peminjam setuju dan memahami bahwa Pemberi Pinjaman dapat memberikan Data Peminjam kepada konsultan dan penyedia jasanya, termasuk namun tidak terbatas pada, penasihat hukum, penasehat keuangan dan perpajakan, serta otoritas pemerintah, lembaga pengawas dan pengadilan, untuk tujuan berikut:
            <br/>
            <br/>
            I. melaksanakan Perjanjian ini;
            <br/>
            II. menegakkan pelaksanaan Perjanjian ini;
            <br/>
            III. melaksanakan tujuan kegiatan usaha Pemberi Pinjaman;
            <br/>
            IV. melaksanakan kewajiban yang diwajibkan oleh hukum yang berlaku terhadap Pinjaman;
            <br/>
            dan V. menanggapi setiap permintaan yang diminta oleh otoritas pemerintah, badan pengawas atau pengadilan.
            <br/>
            <br/>
            3. Peminjam setuju, memahami dan dengan ini memberikan kuasa dan kewenangan penuh kepada Pemberi Pinjaman untuk menginstruksikan Perusahaan dan / atau Platform untuk membuat dan menyimpan salinan Data Peminjam. Peminjam juga setuju bahwa Perusahaan dan / atau Platform dapat menggunakan Data Peminjam untuk tujuan melindungi hak dan kepentingan Pemberi Pinjaman. Peminjam mengakui bahwa Perusahaan dan Pemberi Pinjaman dapat mempertahankan Data Peminjam jika Permohonan Pinjaman tidak disetujui atau setelah berakhirnya atau pemutusan Perjanjian ini.
            <br/>
            <br/>
            4. Peminjam setuju, dan dengan ini memberikan kuasa dan kewenangan penuh kepada Pemberi Pinjaman, karyawan, agen dan perusahaan afiliasinya, untuk membagikan dan menggunakan Data Peminjam untuk berbagai skema pembiayaan, skema penawaran atau promosi, skema pembiayaan atau promosi lainnya, yang dapat ditawarkan dan diberikan oleh atau atas nama Pemberi Pinjaman.
            <br/>
            <br/>
            Bagian 6. Syarat dan Ketentuan Pinjaman
            <br/>
            <br/>
            1. Syarat dan ketentuan Pinjaman sebagaimana disepakati oleh para Pihak yang akan berlaku setelah persetujuan Pemberi Pinjaman terhadap Permohonan Pinjaman ditetapkan dalam Rincian Pembiayaan Pinjaman yang meliputi ketentuan dan syarat berikut:
            <br/>
            <br/>
            I. Jumlah Pinjaman akan dinyatakan dalam Rupiah; II. Tenor Pinjaman akan dinyatakan dalam hari kalender; III. Terhadap Tanggal Pencairan Pinjaman: akan berlaku yang berikut:
            <br/>
            i. Wire transfer Pinjaman harus dilakukan dengan cara transfer uang bank ke Rekening Bank milik Peminjam; dan ii. Peminjam akan dianggap telah mengkonfirmasi persetujuannya atas syarat Pinjaman sebagaimana diatur dalam Perjanjian ini dan Rincian Pembiayaan Pinjaman, jika Peminjam tidak melunasi jumlah pokok Pinjaman satu hari setelah Tanggal Pencairan Pinjaman.
            <br/>
            <br/>
            IV. Tanggal Pelunasan Pinjaman yang merupakan tanggal Pelunasan Jumlah harus diterima pada Rekening Bank, yang mana ketentuan berikut akan berlaku:
            <br/>
            <br/>
            i. Pelunasan lebih awal diperbolehkan; ii. Keterlambatan pembayaran akan dikenakan biaya keterlambatan sebesar 4 persen per hari dari hari keterlambatan awal dari jumlah pinjaman. iii. Pembayaran sebagian dari biaya keterlambatan pembayaran tidak diperbolehkan; dan iv. Pelunasan akan dianggap lengkap bila dana yang dilunasi telah masuk dalam Rekening Bank yang tercantum dalam Rincian Pembiayaan Pinjaman Perjanjian ini.
            <br/>
            <br/>
            V. Jenis Pinjaman adalah pinjaman pribadi tanpa jaminan; VI. Biaya Peminjaman yang harus dibayarkan kepada Peminjam (Biaya Peminjam) adalah sebesar.
            <br/>
            Bagian 7. Persetujuan untuk Membayar
            <br/>
            <br/>
            1. Peminjam dengan ini setuju bahwa Peminjam benar-benar dan secara sah berhutang kepada Pemberi Pinjaman atas Utang Jumlah Penuh setelah menerimanya dan setuju untuk membayar Hutang Jumlah Penuh pada saat jatuh tempo sesuai dengan ketentuan Perjanjian ini dan Rincian Pembiayaan Pinjaman tanpa tuntutan balik, set off, atau pengurangan dalam bentuk apapun.
            <br/>
            <br/>
            2. Tanpa mengabaikan apapun yang bertentangan yang terkandung dalam Perjanjian ini, semua pembayaran yang dilakukan atau ditagih oleh Pemberi Pinjaman berdasarkan Perjanjian ini harus diterapkan oleh Pemberi Pinjaman untuk kepentingan sendiri dalam urutan prioritas berikut,
            <br/>
            (1) untuk setiap jumlah yang kemudian jatuh tempo dan terutang kepada Pemberi Pinjaman berdasarkan Perjanjian yang tidak tercantum dalam Bagian ini,
            <br/>
            (2) untuk setiap biaya yang kemudian jatuh tempo dan terutang,
            <br/>
            (3) untuk setiap cidera janji yang masih harus dibayar atau biaya keterlambatan yang kemudian jatuh tempo dan terutang,
            <br/>
            (4) untuk biaya yang kemudian jatuh tempo dan terutang,
            <br/>
            dan (5) untuk pokok yang kemudian jatuh tempo dan terutang.
            <br/>
            <br/>
            3. Pemberi Pinjaman, melalui Perusahaan, akan membuka dan memelihara buku dan catatan yang menunjukkan Pinjaman, pelunasan, pra pembayaran, perhitungan dan pembayaran biaya dan jumlah lain yang harus dibayarkan dan jumlah yang telah dibayarkan berdasarkan Perjanjian ini. Buku dan catatan tersebut harus bersifat final dan mengikat Peminjam terkait jumlah yang setiap saat terutang dari Peminjam, dengan tidak adanya kesalahan nyata dalam perhitungan.
            <br/>
            <br/>
            4. Peminjam harus sepenuhnya mengganti Pemberi Pinjaman dengan segera pada saat diminta atas semua biaya dan pengeluaran, termasuk, namun tak terbatas pada, biaya penasehat hukum dan biaya out-of-pocket, yang dikeluarkan atau akan dikeluarkan oleh Pemberi Pinjaman sehubungan dengan pelaksanaan setiap hak dan kuasaoleh Pemberi Pinjaman berdasarkan Perjanjian ini.
            <br/>
            <br/>
            Bagian 8. Pelanggaran Perjanjian
            <br/>
            <br/>
            1. Peminjam akan dianggap Melanggar Janji jika terjadi salah satu peristiwa berikut:
            <br/>
            <br/>
            I. Peminjam gagal untuk membayar jumlah saat jatuh tempo berdasarkan Perjanjian ini (tanggal jatuh tempo mana harus memperhitungkan hak perpanjangan Peminjam berdasarkan Perjanjian ini) atau gagal untuk memenuhi salah satu atau lebih kewajiban-kewajiban lainnya sebagaimana diatur dalam Perjanjian ini ;
            <br/>
            <br/>
            atau II. Peminjam telah dinyatakan bangkrut berdasarkan keputusan pengadilan yang berwenang;
            <br/>
            <br/>
            atau III. Peminjam terbukti bersalah oleh keputusan pengadilan yang bersifat final dan mengikat dari yurisdiksi manapun atau terkait dengan kegiatan kriminal termasuk namun tidak terbatas pada pencucian uang dan / atau kegiatan terorisme;
            <br/>
            <br/>
            atau IV. Peminjam telah mengajukan data yang dipalsukan, salah dan atau misrepresentasi sebagai Data Peminjam. Pemberi Pinjaman berhak penuh untuk menentukan apakah pengajuan tersebut telah dilakukan.
            <br/>
            <br/>
            2. Setelah terjadinya Pelanggaran Perjanjian, Pemberi Pinjaman kemudian berhak untuk mempercepat dan menuntut pembayaran semua jumlah terutang berdasarkan Perjanjian ini, segera dan secara penuh, termasuk, namun tidak terbatas pada, jumlah saldo pokok beserta biaya keterlambatan pembayaran dan setiap biaya lainnya. Selain itu, Pemberi Pinjaman akan berhak untuk mengakhiri Perjanjian ini dan melaksanakan setiap dan semua hak lainnya dan upaya perbaikan yang sah atas terjadinya cidera janji.
            <br/>
            <br/>
            3. Pemutusan Perjanjian ini tidak akan mempengaruhi hakdari salah satu Pihak yang timbul sebelum dan termasuk tanggal pemutusan berdasarkan Perjanjian ini.
            <br/>
            <br/>
            4. Pemberi Pinjaman dan Peminjam mengabaikan, yang tidak dapat dibatalkan, penerapan Pasal 1266 dan 1267 KUH Perdata Indonesia sejauh Pasal-pasal tersebut dapat ditafsirkan bahwa dibutuhkannya persetujuan pengadilan sebagai prasyarat untuk pemutusan Perjanjian
            <br/>
            <br/>
            Bagian 9. Penyelesaian Sengketa
            <br/>
            Dalam setiap kasus atau setiap sengketa yang timbul dari atau sehubungan dengan Perjanjian ini, para Pihak sepakat untuk memilih domisili hukum di Kepaniteraan Pengadilan Negeri Jakarta Pusat. Tanpa mengabaikan yang tersebut, Peminjam mengakui dan setuju bahwa Pemberi Pinjaman dapat mengajukan gugatan pada setiap pengadilan lainnya.
            <br/>
            <br/>
            Bagian 10. Hukum yang Mengatur Perjanjian ini diatur oleh hukum Republik Indonesia.
            <br/>
            <br/>
            Bagian 11. Lain-lain
            <br/>
            1. Perjanjian ini hanya dapat diubah oleh Pemberi Pinjaman dan Peminjam yang menandatangani amandemen tertulis, tanda tangan mana dapat dalam bentuk elektronik. 2. Peminjam harus memberitahukan kepada Pemberi Pinjaman secara tertulis setiap terjadi perubahan terhadap Data Peminjam, termasuk, namun tidak terbatas pada, setiap perubahan terhadap alamat tempat tinggal Peminjam. 3. Peminjam setuju bahwa, tanpa pemberitahuan terlebih dahulu, Pemberi Pinjaman berhak untuk mengalihkan atau mentransfer semua atau sebagian hak dan kewajibannya berdasarkan Perjanjian ini kepada pihak ketiga. Peminjam tidak berhak untuk mengalihkan atau melimpahkan sebagian hak atau kewajibannya berdasarkan Perjanjian ini kepada pihak manapun.
            <br/><br/>
            Informasi Peminjam <br/>

            Nama pemberi pinjaman： {{info.userName}}<br/>
            Nomor HP Pendaftaran Pada Platform： {{info.phoneNumber }}<br/>
            Nomor KTP (NIK) : {{info['idNo']}}<br/>
            <br/>
            Informasi Rekening Bank <br/>
            A.	Informasi Rekening Bank ( Penerima Dana Pinjaman )<br/>
            1. Nama Bank: {{info['bankName']}}<br/>
            2. Nomor Rekening: {{info['bankNumber']}}<br/>
            <br/>
            Informasi pesanan pinjaman <br/>
                <span v-if="info.orderNo">Nomor Perjanjian Pinjaman:  {{info.orderNo ? info.orderNo : ""}} <br/></span>
            Jumlah Pinjaman: {{replaceStr(info['loanMoney'])}} （RP）<br/>

            Periode pinjaman：{{info['loanMonths']!=null ? info['loanDays']*info['loanMonths'] : info['loanDays']}} （Hari ）<br/>

            Jumlah Pencairan Dana：{{replaceStr(info['payMoney'])}} （RP）<br/>

            Jumlah Hutang：{{replaceStr(info['repaymentMoneyTotal'])}} （RP）<br/>

            Jumlah Potongan Pembayaran:{{replaceStr(info['couponMoney'])}} （RP）<br/>

            Hutang yang harus dibayarkan：{{replaceStr(info['realRepayMoney'])}} （RP）<br/>

            Keterlambatan pembayaran akan dikenakan biaya keterlambatan sebesar {{ Math.signFigures(info['graceDayRate']*100)}}%  persen per hari selama {{info['gracePeriod']}} hari keterlambatan awal dari jumlah pinjaman yang terhutang dan akan meningkat sebesar {{ Math.signFigures(info['overdueDayRate']*100)- Math.signFigures(info['graceDayRate']*100)}} persen apabila keterlambatan memasuki pada hari ke-{{info['gracePeriod']+1}} dan seterusnya.
            Jenis Pinjaman: Pinjaman Pribadi Tanpa Jaminan yang hanya akan digunakan untuk keperluan pribadi Peminjam juga bertanggung jawab untuk mematuhi kewajibannya berdasarkan setiap perjanjian yang dapat dilaksanakan dengan Perusahaan sehubungan dengan Pinjaman.
            <br/>
            <br/>
            Perjanjian Layanan Platform Web ini (berikut semua lampiran, addendum dan setiap perubahan daripadanya, yang mana semuanya akan disebut sebagai "Perjanjian") dibuat dan dilaksanakan oleh dan antara:
                <br/>(1) Peminjam dan Perusahaan akan secara bersama disebut sebagai "Para Pihak" dan secara masing-masing sebagai "Pihak".
                <br/>
                <br/>
                Bagian 1. Definisi dan Interpretasi 1. Definisi:
                Untuk tujuan Perjanjian ini dan sebagai tambahan setiap definisi lainnya yang ditetapkan dalam Perjanjian ini, istilah berikut memiliki arti sebagaimana ditetapkan bagi istilah tersebut, kecuali konteksnya secara jelas menentukan lain: "Biaya Layanan Tambahan" adalah biaya layanan yang harus dibayar oleh Peminjam kepada Perusahaan untuk penyediaan Layanan selama perpanjangan Pinjaman, yang dihitung sesuai dengan Pasal 7.1.2. "Kriteria Peminjam yang Disetujui" berarti kriteria yang ditetapkan oleh Pemberi Pinjaman yang harus dipenuhi oleh Pemohon Pinjaman agar dapat dipertimbangkan sebagai calon Peminjam. "Syarat Pinjaman yang Disetujui" berarti syarat materi Pinjaman yang telah disetujui oleh Pemberi Pinjaman. "Rekening Bank" berarti rekening bank yang harus dibuka oleh Perusahaan untuk memegang dana milik Pemberi Pinjaman dan pemberi pinjaman lainnya yang menggunakan Platform dan layanan Perusahaan untuk tujuan pencairan Pinjaman kepada Peminjam dan pengelolaan pelunasan pinjaman oleh Peminjam. "Data Peminjam" berarti informasi identifikasi pribadi dan data lainnya dari Peminjam yang diperoleh dan diverifikasi oleh Perusahaan atas nama Pemberi Pinjaman. "ID Platform Peminjam" berarti username dan / atau nomor registrasi Peminjam pada Platform yang melekat, mewakili dan terkait dengan Data Peminjam yang telah disampaikan dan terdaftar pada Platform. "Peminjam" berarti Peminjam dan setiap peminjam lainnya yang memperoleh pendanaan dengan mengajukan Permohonan melalui Platform. "Pemberi Pinjaman" berarti seorang individu yang menyediakan semua atau sebagian Pinjaman kepada Peminjam berdasarkan Perjanjian Pinjaman yang akan ditandatangani oleh Peminjam dan Pemberi Pinjaman melalui layanan Platform. "Para Pemberi Pinjaman" berarti Pemberi Pinjaman yang akan memberikan Pinjaman kepada satu atau lebih Peminjam dan perseorangan lain yang menyediakan pembiayaan kepada Peminjam melalui Platform. "Pinjaman" berarti pinjaman yang diberikan oleh Pemberi Pinjaman kepada Peminjam sesuai dengan persyaratan dari Perjanjian Pinjaman. "Permohonan Pinjaman" berarti perjanjian pinjaman yang ditandatangani antara Pemberi Pinjaman dengan Peminjam, baik secara elektronik atau fisik, yang menjelaskan syarat dan ketentuan dari Pinjaman, termasuk semua lampiran-lampirannya, adendum dan setiap perubahan daripadanya. "Perjanjian-perjanjian Pinjaman" berarti Perjanjian Pinjaman dan semua perjanjian serupa lainnya antara salah satu Peminjam dengan salah satu Pemberi Pinjaman. "Pemohon Pinjaman" berarti perorangan warga negara Indonesia yang telah melakukan permohonan Pinjaman melalui Platform. "Permohonan Pinjaman" berarti permohonan yang diajukan secara elektronik oleh Pemohon Pinjaman melalui Platform untuk memperoleh Pinjaman, termasuk dokumen pendukung dan informasi yang diwajibkan oleh Platform. "Platform" berarti platform pinjaman peer-to-peer berbasis internet yang dimiliki dan dioperasikan oleh Perusahaan, sebagaimana ditentukan dalam Perjanjian ini. "Biaya Layanan" adalah biaya layanan yang harus dibayar oleh Peminjam kepada Perusahaan atas penyediaan Layanan selama tenor awal setiap Perjanjian Pinjaman, yang dihitung sesuai dengan Pasal 7.1.1.\ 2. Interpretasi: Dalam Perjanjian ini kecuali konteksnya menentukan lain:
                <br/>a. Setiap Memesan dan lampiran akan merupakan bagian dari Perjanjian ini dan referensi kepada Perjanjian ini akan mencakup resital dan lampiran;
                <br/>b. Referensi kepada Perjanjian ini atau dokumen lain adalah kepada Perjanjian ini atau dokumen lain tersebut yang berlaku untuk saat ini dan sebagaimana diubah dari waktu ke waktu sesuai dengan Perjanjian ini atau dokumen tersebut (sebagaimana keadaan);
                <br/>c. Kata yang menggunakan jenis kelamin mencakup setiap jenis kelamin, referensi kepada bentuk tunggal mencakup bentuk jamak dan sebaliknya dan kata yang menunjukkan orang termasuk individu dan badan hukum, kemitraan, asosiasi tanpa badan hukum dan badan-badan lain (dalam setiap kasus, di mana pun berada dan untuk tujuan apa pun) dan sebaliknya ;
                <br/>d. Judul dan isi tabel dalam Perjanjian ini hanyalah untuk kemudahan dan tidak mempengaruhi interpretasi;
                <br/>e. Jika terjadi konflik atau ketidaksesuaian antara klausul, dan setiap lampiran dalam Perjanjian ini maka klausul yang akan berlaku. Untuk tujuan ini, kelalaian (baik disengaja atau tidak disengaja) tidaklah, dengan sendirinya, dapat dianggap sebagai menimbulkan konflik atau ketidaksesuaian;
                <br/>dan f. Dalam Perjanjian ini kata-kata "lain", "termasuk" dan "khususnya" tidak membatasi keumuman kata sebelumnya dan kata-kata yang mengikutinya tidak akan ditafsirkan sebagai terbatas pada lingkup untuk kelas yang sama seperti kata-kata sebelumnya dimana dimungkinkan susunan yang lebih luas.
                <br/><br/>Bagian 2. Permohonan Pinjaman dan Penyediaan Layanan
                <br/>1. Perusahaan telah membuat Platform untuk memfasilitasi pemberian pinjaman oleh Pemberi Pinjaman kepada Peminjam dan telah membuat sistem kepemilikan dimana calon Pemberi Pinjaman dapat diperkenalkan kepada Pemohon Pinjaman dan Pemohon Pinjaman dapat diperkenalkan kepada calon Pemberi Pinjaman.
                <br/>2. Peminjam dapat mengajukan satu atau lebih Permohonan Pinjaman melalui Platform untuk mengajukan satu atau lebih Pinjaman dari satu atau lebih Pemberi Pinjaman.
                <br/>3. Peminjam dengan ini mempertahankan Perusahaan untuk menyediakan Layanan kepada Peminjam sesuai dengan persyaratan dan ketentuan Perjanjian ini dan Perusahaan dengan ini setuju untuk memberikan Layanan kepada Peminjam.
                <br/>4. Berdasarkan pertimbangan atas penyediaan Layanan Perusahaan, Peminjam setuju untuk membayar kepada Perusahaan Biaya Layanan, Biaya Layanan Tambahan dan Biaya Administrasi Perpanjangan sebagaimana dijabarkan lebih lanjut dalam Bagian 7 di bawah ini. Peminjam secara tegas mengakui bahwa:
                <br/>I. Pemberi Pinjaman akan memiliki hak untuk membebankan biaya terhadap Pinjaman sebagaimana dirinci dalam Rincian Pembiayaan Pinjaman dan Perusahaan akan berhak untuk membebankan biaya kepada Peminjam atas Layanan Perusahaan sesuai dengan CSA dan bahwa Peminjam harus membayar semua jumlah tersebut pada saat jatuh tempo berdasarkan Perjanjian ini dan berdasarkan CSA, sebagaimana berlaku,
                <br/>dan II. Peminjam wajib membayar utang sesuai dengan Rincian Pembiayaan Pinjaman dan harus membayar Hutang Jumlah Penuh pada saat jatuh tempo berdasarkan Perjanjian ini dan tanpa penundaan ke Rekening Bank sebagaimana tercantum dalam Rincian Pembiayaan Pinjaman.
                <br/>III. Perusahaan tidak bertanggung jawab atas setiap keputusan yang dibuat oleh Pemberi Pinjaman
                <br/>(i) sehubungan setiap Permohonan Pinjaman atau Pinjaman atau
                <br/>(ii) berdasarkan Perjanjian Pinjaman atau lainnya.
                <br/>5. Perusahaan tidak akan menjadi pihak dalam setiap Perjanjian Pinjaman. Ketentuan dan kewajiban yang terkandung di dalamnya dan / atau timbul daripadanya tidak akan mengikat Perusahaan atau Platform. Tanpa mengabaikan yang tersebut, Peminjam mengakui dan menyetujui bahwa Perusahaan bertindak atas nama Pemberi Pinjaman (namun bukan sebagai agen Pemberi Pinjaman) dengan cara yang ditentukan dalam Perjanjian Pinjaman. Secara khusus, Peminjam mengakui bahwa Perusahaan dapat melaksanakan hak Pemberi Pinjaman berdasarkan Perjanjian Pinjaman.
                <br/>6. Peminjam dengan ini menegaskan bahwa Perusahaan belum memberikan Peminjam saran terkait kelayakan dana pinjaman dari Pemberi Pinjaman atau kemampuannya untuk melunasi Pinjaman dan bahwa ia telah membuat keputusannya sendiri terkait penerimaan Pinjaman dengan syarat dan ketentuan yang ditawarkan oleh Pemberi Pinjaman. Peminjam dengan ini, sekarang dan selamanya membebaskan Perusahaan dari segala tanggung jawab dalam hal Peminjam mengalami konsekuensi yang merugikan yang timbul dari Pinjaman yang diterima oleh Peminjam berdasarkan Perjanjian Pinjaman atau Perjanjian ini.
                <br/>7. Para Pihak setuju bahwa Perusahaan akan bertindak secara independen terkait penyediaan Layanan. Tidak ada dalam Perjanjian ini yang dimaksudkan untuk menciptakan hubungan pemberi kuasa dan penerima kuasa antara Peminjam dengan Perusahaan atau mengenakan kewajiban fidusia atau kewajiban lainnya terhadap Perusahaan.
                <br/>8. Peminjam menyatakan dan menjamin kepada Perusahaan bahwa:
                <br/>I. Semua informasi yang diberikan kepada Perusahaan dan / atau Platform oleh Peminjam adalah data yang lengkap dan benar dan informasi Peminjam tidak menyesatkan dalam hal apapun;
                <br/>II. Peminjam akan bertanggung jawab secara hukum untuk setiap pemalsuan, dan penggunaan yang tidak sah dari, data yang diberikan kepada Perusahaan atau Platform;menyesatkan dalam hal apapun;
                <br/>III. Peminjam menandatangani Perjanjian ini dengan itikad baik dan tanpa niat untuk melanggar aturan dan peraturan yang berlaku termasuk namun tidak terbatas pada peraturan pencucian uang, peraturan penghindaran pajak dan peraturan anti terorisme;
                <br/>IV. Peminjam menandatangani Perjanjian ini untuk dan atas namanya sendiri, bebas dan atas keinginannya sendiri tanpa paksaan atau intimidasi dari pihak manapun dan mengetahui dan memahami isi dan konsekuensi daripadanya termasuk jumlah Biaya layanan, Biaya Layanan Tambahan dan biaya Administrasi Perpanjangan yang harus dibayarkan sesuai dengan Bagian 7.
                <br/>9. Peminjam dengan ini memberikan kuasa dan wewenang penuh kepada Perusahaan, afiliasi dan masing-masing karyawan dan agennya untuk menyalin, membagikan dan menggunakan Data Peminjam yang diperoleh oleh Perusahaan atas nama Pemberi Pinjaman untuk setiap tindakan yang diambil terkait penyediaan Layanan atau pelaksanaan kewajibannya atas nama Pemberi Pinjaman berdasarkan Perjanjian Pinjaman. Sehubungan dengan hal ini, Peminjam dengan ini menegaskan bahwa ketentuan dari Bagian 2.4 Perjanjian Pinjaman, terkait Peminjam, menjadi bagian dari Perjanjian ini melalui penyebutan.
                <br/>10. Peminjam dengan ini secara tegas mengakui dan setuju bahwa Perusahaan tidak bertanggung jawab terkait ketepatan dan keabsahan informasi atau data yang diberikan kepadanya oleh Peminjam atau Pemberi Pinjaman ataupun bertanggung jawab atas kinerja Peminjam atau Pemberi Pinjaman akan kewajibannya berdasarkan Perjanjian Pinjaman.
                <br/>11. Peminjam memahami bahwa Permohonan Pinjaman baru akan perlu diajukan untuk setiap Pinjaman yang diminta oleh Peminjam dan bahwa Data Peminjam dan informasi lainnya yang diwajibkan oleh Pemberi Pinjaman atau Perusahaan harus diserahkan dan diverifikasi untuk setiap Permohonan Pinjaman.
                <br/><br/>Bagian 3. Kewajiban Tertentu Para Pihak
                <br/>1. Peminjam wajib mendaftarkan dirinya sendiri pada Platform dengan memenuhi persyaratan dan prosedur berikut:
                <br/>I. Pemberian data Peminjam dengan mengisi formulir elektronik yang disediakan pada Platform;
                <br/>dan II. Pemberian data atau informasi yang diwajibkan oleh Otoritas Pemerintah.
                <br/>2. Setelah menyelesaikan proses pendaftaran sebagaimana dimaksud dalam Bagian 3.1 diatas, Peminjam akan dianggap telah setuju dengan I. jika Peminjam belum menandatangani Perjanjian ini sebelum pendaftaran, syarat dan ketentuan Perjanjian ini dan II. syarat penggunaan Platform, yang mana kemudian Platform akan menerbitkan ID Platform Peminjam. Peminjam harus setelahnya memberikan tanda tangan fisik untuk Perjanjian ini jika diminta oleh Perusahaan. Perjanjian ini akan berlaku dan mengikat para Pihak ketika ditandatangani, secara elektronik (melalui, dalam kasus Peminjam, proses pendaftaran yang dijelaskan diatas) atau secara fisik, oleh kedua Pihak. Perusahaan akan dianggap telah menandatangani Perjanjian ini secara elektronik jika telah membuat dan menetapkan nomer pendaftaran untuk Peminjam melalui Platform.
                <br/>3. Peminjam harus:
                <br/>I. Memberikan Data Peminjam dalam setiap Permohonan Pinjaman yang ia ajukan ke Platform.
                <br/>II. Memberikan informasi lanjutan yang diminta oleh Perusahaan sehubungan dengan setiap Permohonan Pinjaman.
                <br/>III. Jika Permohonan Pinjaman disetujui oleh Pemberi Pinjaman, menandatangani Perjanjian Pinjaman dengan Pemberi Pinjaman yang telah setuju untuk memberikan Pinjaman dengan cara yang dikoordinasikan oleh Perusahaan.
                <br/>IV. Melaksanakan kewajibannya berdasarkan Perjanjian Pinjaman dimana ia merupakan Pihak dan Perjanjian ini.
                <br/>4. Perusahaan harus memberikan Layanan kepada Peminjam, yang meliputi:
                <br/>I. Pengumpulan, validasi dan verifikasi Data Peminjam dan informasi lainnya yang harus diberikan oleh Peminjam dan meninjau Permohonan Pinjamannya atas nama Pemberi Pinjaman.
                <br/>II. Meneruskan Permohonan Pinjaman kepada calon Pemberi Pinjaman yang terdaftar pada Platform jika Peminjam memenuhi Kriteria Peminjam yang Disetujui dan Syarat Kredit yang Disetujui dari Pemberi Pinjaman.
                <br/>III. Menginformasikan Peminjam dalam hal Pemberi Pinjaman setuju untuk memberikan Pinjaman kepada Peminjam dengan syarat dan ketentuan yang ditetapkan dalam Permohonan Pinjaman dan Perjanjian Pinjaman.
                <br/>IV. Pembuatan dan pengoperasian Platform yang akan, setidaknya, berisi informasi sebagaimana dimaksud dalam Bagian 5, dan persiapan template Permohonan Pinjaman dan Perjanjian Pinjaman.
                <br/>V. Pembuatan dan pemeliharaan Rekening Bank dimana Pemberi Pinjaman akan menyetorkan dana yang di wire transfer oleh Perusahaan kepada Peminjam sesuai dengan Perjanjian Pinjaman dan dimana Peminjam akan melakukan semua pembayaran yang dilakukan berdasarkan Perjanjian Pinjaman dan Perjanjian ini. Peminjam secara tegas mengakui dan setuju bahwa Rekening Bank adalah rekening dimana semua Pemberi Pinjaman dan Peminjam yang menggunakan Platform dan layanan Perusahaan akan membayar setiap uang dan dari mana semua pinjaman akan ditransfer kepada Peminjam.
                <br/>VI. Melakukan wire transfer jumlah pokok Pinjaman kepada Peminjam setelah pemenuhan semua ketentuan yang ditetapkan dalam Bagian 4.
                <br/>VII. Menagih semua jumlah terutang dari Peminjam. Perusahaan bertanggung jawab untuk membayar kepada Pemberi Pinjaman semua jumlah terutang kepadanya dari jumlah yang Perusahaan terima dari Peminjam. Peminjam mengakui bahwa Perusahaan berhak untuk melibatkan penyedia jasa penagihan utang pihak ketiga yang berlisensi untuk tujuan penagihan.
                <br/>VIII. Pemberian layanan lainnya yang mungkin ditawarkan dan dijelaskan dari waktu ke waktu pada Platform.
                <br/>5. Peminjam tidak boleh berkomunikasi, berinteraksi atau terhubung, baik secara langsung maupun tidak langsung, dengan Pemberi Pinjaman, selain dengan cara sebagaimana yang disediakan pada Platform sesuai dengan Perjanjian ini.
                <br/><br/>Bagian 4. Fasilitasi Pencairan Pinjaman 1. Perusahaan harus melakukan wire transfer jumlah pokok Pinjaman kepada Peminjam setelah pemenuhan ketentuan berikut:
                <br/>I. Pemberi Pinjaman telah memberikan Kriteria Peminjam yang Disetujui dan Syarat Kredit yang Disetujui dan setuju untuk memberikan Pinjaman dengan ketentuan yang diminta dalam Permohonan Pinjaman.
                <br/>II. Pemberi Pinjaman harus telah memasukkan dana yang diwajibkan oleh Perusahaan dan dana yang cukup harus tersedia dalam Rekening Bank untuk Pinjaman yang akan diberikan.
                <br/>III. Peminjam dan Pemberi Pinjaman harus telah menandatangani Perjanjian Pinjaman yang, dalam kasus Pemberi Pinjaman, dapat dilakukan dengan penyertaan kode digital Pemberi Pinjaman oleh Perusahan dalam Perjanjian Pinjaman;
                <br/>IV. Perusahaan telah melakukan verifikasi sesuai ketentuannya terhadap informasi yang diberikan oleh Pemohon Pinjaman sebagaimana tercantum dalam Permohonan Pinjaman dan telah dapat menghubungi referensi Pemohon Pinjaman yang telah memverifikasi informasi yang diberikan oleh Pemohon Pinjaman;
                <br/>dan V. Pemohon Pinjaman telah memenuhi kriteria minimum yang ditentukan oleh Pemberi Pinjaman berdasarkan Platform mana yang akan diberi wewenang untuk mencairkan Pinjaman.
                <br/><br/>Bagian 5. Layanan Informasi Pinjaman 1. Perusahaan harus memastikan agar Platform berisi informasi berikut dapat diakses oleh Peminjam:
                <br/>I. Perhitungan parameter pinjaman;
                <br/> II. informasi mengenai status Pemohon Pinjaman;
                <br/>III. informasi tentang layanan dan produk baru yang disediakan oleh Platform.
                <br/>IV. Informasi mengenai jumlah utang Peminjam kepada Pemberi Pinjaman berdasarkan Perjanjian Pinjaman sehubungan dengan Layanan yang diberikan.
                <br/><br/>Bagian 6. Verifikasi Peminjam
                <br/>1. Peminjam setuju bahwa Platform akan menerima Permohonan Pinjaman yang sesuai dengan kriteria yang diberikan oleh Pemberi Pinjaman.
                <br/>2. Perusahaan berhak untuk mengambil tindakan apapun yang dianggap sesuai oleh Perusahaan untuk memvalidasi data yang diajukan oleh Peminjam dalam Permohonan Pinjaman Peminjam. Setiap dan semua tindakan untuk mengkonfirmasi dan memvalidasi data dalam Permohonan Pinjaman Peminjam akan dilakukan atas nama Pemberi Pinjaman.
                <br/>3. Perusahaan tidak melakukan penilaian risiko kredit Peminjam dan hanya akan melakukan verifikasi data atas nama Pemberi Pinjaman, yang akan termasuk namun tidak terbatas pada:
                <br/>I. Verifikasi melalui panggilan telepon;<br/>
                <br/>
                <br/>II. Verifikasi Ponsel yang menggunakan password satu kali;
                <br/>dan III. Pemrosesan data dari profil jaringan sosial yang diberikan oleh Peminjam selama proses permohonan pinjaman.
                <br/>4. Perusahaan dapat, dengan biayanya sendiri namun tanpa kewajiban untuk melakukannya, melibatkan pihak ketiga untuk melakukan penilaian risiko kredit Peminjam.
                <br/>5. Perusahaan tidak bertanggung jawab atas keaslian, ketepatan atau kebenaran data dalam Permohonan Pinjaman Peminjam sebelum dan setelah verifikasi yang dilakukan oleh Perusahaan.
                <br/>6. Perusahaan berhak untuk menghubungi Peminjam atau orang, yang dinyatakan sebagai dalam Permohonan Pinjaman Peminjam, atas nama Pemberi Pinjaman melalui berbagai cara, termasuk namun tidak terbatas pada:
            <br/>
            1. pesan teks telepon;
            <br/>
            2. email;
            <br/>
            3. panggilan suara;
            <br/>
            dan 4. panggilan suara otomatis.
            <br/>
            <br/>
            Bagian 7. <br/>
            <br/>
            Biaya 1. Sehubungan dengan pemberian Layanan kepada Peminjam oleh Perusahaan, Peminjam harus membayar biaya berikut kepada Perusahaan: Biaya admin yang harus dibayarkan oleh peminjam adalah sebesar Rp 100.000.
            <br/>
            2. Semua biaya dan jumlah terutang lainnya berdasarkan Perjanjian ini harus dibuat bebas dari tuntutan balik, set off atau pengurang lainnya, termasuk pemotongan untuk pajak. Dalam hal Peminjam dilarang secara hukum untuk melakukan pembayaran tanpa pengurangan sebagaimana ditentukan dalam Bagian 7.2 ini maka pembayaran terutang kepada Perusahaan berdasarkan Perjanjian ini akan dinaikkan menjadi jumlah sebagaimana diperlukan agar jumlah bersih yang diterima oleh Perusahaan setelah potongan atau penangguhan tersebut sama dengan jumlah yang seharusnya diterima jika potongan atau penangguhan tersebut tidak dilakukan.
            <br/>
            <br/>
            Bagian 8. Perlindungan Data Peminjam
            <br/>
            1. Perusahaan berjanji bahwa pengumpulan dan pengolahan Data Peminjam akan sesuai dengan hukum dan peraturan yang berlaku di Indonesia. Data pribadi akan mencakup namun tidak akan terbatas pada, nama lengkap, e-mail, tanggal lahir, nomor telepon, alamat rumah, nomor rekening bank.
            <br/>
            2. Perusahaan berhak dan Peminjam dengan ini memberikan hak kepada Perusahaan untuk mengungkapkan data Pemberi Pinjaman sebagian atau seluruhnya kepada pihak ketiga yang mana Perusahaan berdasarkan kebijakannya sendiri anggap perlu guna mengatur, memproses dan mengelola seluruh Permohonan Pinjaman dan Proses Pinjaman, termasuk namun tidak terbatas pada pengungkapan informasi kepada pihak ketiga yang ditetapkan untuk membantu penagihan pelunasan Pinjaman.
            <br/>
            3. Perusahaan tidak diperkenankan untuk menggunakan dan memproses lebih lanjut data Peminjam yang telah diperolehnya selain untuk tujuan menyediakan Layanan, termasuk untuk mengatur dan memproses Pinjaman.
            <br/>
            <br/>
            Bagian 9. Force Majeure
            <br/>
            1. Peminjam dan Perusahaan tidak bertanggung jawab atas kerugian atau kerusakan yang dialami oleh Pihak lainnya yang timbul karena keterlambatan pelaksanaan atau non pelaksanaan kewajiban salah satu Pihak akibat peristiwa force majeure; dengan ketentuan, namun, terjadinya suatu peristiwa force majeure tidak akan memaklumi atau menunda kewajiban pembayaran Peminjam berdasarkan Perjanjian ini.
            <br/>
            2. Kondisi yang memenuhi syarat sebagai force majeure termasuk namun tidak terbatas pada, perang, operasi seperti perang, terjadinya permusuhan, perang sipil dan keributan, pemberontakan, kerusuhan, tindakan legislatif atau tindakan secara hukum yang mengikat lainnya atau yang dikenakan oleh otoritas domestik maupun asing, pemogokan (tidak termasuk yang hanya terbatas pada karyawan Pihak atau rekanan atau perusahaan yang dikendalikan), penutupan, kesulitan penyediaan bahan baku, kekurangan berkepanjangan atau pembatasan bahan utilitas, terhalang es, kebakaran, serangan virus sistem komputer atau keadaan tidak terduga lainnya yang mencegah salah satu Pihak untuk melakukan kewajibannya berdasarkan Perjanjian ini.
            <br/>
            <br/>
            Bagian 10. Cidera Janji
            <br/>
            1. Salah satu Pihak akan dianggap cidera janji jika terjadi salah satu peristiwa berikut:
            <br/>
            a. gagal untuk memenuhi salah satu atau lebih dari kewajibannya sebagaimana diatur dalam Perjanjian ini;
            <br/>
            atau b. ia dinyatakan bangkrut berdasarkan keputusan pengadilan yang berwenang;
            <br/>
            atau c. ia terbukti bersalah oleh keputusan pengadilan yang bersifat final dan mengikat dari yurisdiksi manapun atau terkait dengan kegiatan pidana termasuk namun tidak terbatas pada pencucian uang dan / atau kegiatan terorisme;
            <br/>
            atau d. terkait Peminjam, ia telah mengajukan data yang salah, dipalsukan, dan atau misrepresentasi sebagai data Peminjam. Perusahaan memiliki kewenangan penuh untuk menentukan apakah pengajuan tersebut telah dilakukan.
            <br/>
            <br/>
            Bagian 11. Pemutusan
            <br/>
            1. Perusahaan dapat mengakhiri Perjanjian ini karena alasan apapun dengan segera setiap saat dengan memberikan pemberitahuan tertulis dan peminjam wajib menyelesaikan semua pinjaman ditambah dengan beban biaya yang telah disepakati diawal perjanjian.
            <br/>
            2. Dari dan setelah pemutusan berdasarkan Bagian 10.1 dan penerimaan pemberitahuan pemutusan berdasarkan Bagian 10.2, tidak ada Pinjaman yang akan diterima oleh Peminjam. Setelah semua Pinjaman dan biaya terutang yang beredar kepada Perusahaan telah dibayarkan pada saat tanggal efektif pemutusan, maka Perusahaan akan mengakhiri Perjanjian
            <br/>
            3. Pemutusan Perjanjian tidak akan mempengaruhi hak dari salah satu Pihak yang timbul sebelum dan termasuk tanggal pemutusan berdasarkan Perjanjian ini. Dalam hal salah satu Pihak cidera janji berdasarkan Perjanjian ini, cidera janji mana tidak diperbaiki dalam waktu sepuluh (10) hari sejak diterimanya pemberitahuan mengenai cidera janji dari Pihak lainnya, maka Pihak non cidera janji berhak untuk mengakhiri Perjanjian ini pada saat berakhirnya periode 10 (sepuluh) hari tersebut dan, di samping itu, berhak untuk melaksanakan setiap dan semua hak dan tindakan perbaikan yang sah yang tersedia bagi pihak non cidera janji berdasarkan hukum Indonesia; dengan ketentuan, namun, kewajiban maksimal Perusahaan kepada Peminjam berdasarkan Perjanjian ini adalah biaya yang telah dibayarkan oleh Peminjam kepada Perusahaan berdasarkan Perjanjian ini.
            <br/>
            4. Tanpa mengabaikan hal lain yang bertentangan dalam Perjanjian ini, tidak ada Pihak yang bertanggung jawab atas kerusakan tidak langsung atau konsekuensial yang dialami oleh Pihak lainnya, termasuk keuntungan terakhir (selain yang diperoleh atau yang akan diperoleh oleh Perusahaan berdasarkan Perjanjian ini), kehilangan peluang atau ganti rugi punitif.
            <br/>
            5. Peminjam dan Perusahaan mengabaikan, yang tidak dapat dibatalkan, penerapan Pasal 1266 dan 1267 KUH Perdata Indonesia sejauh pasal-pasal tersebut dapat ditafsirkan bahwa dibutuhkan persetujuan pengadilan sebagai prasyarat untuk pemutusan Perjanjian.
            <br/>
            <br/>
            Bagian 12. Penyelesaian Sengketa Dalam setiap kasus atau setiap sengketa yang timbul dari atau sehubungan dengan Perjanjian, para Pihak sepakat untuk memilih domisili hukum di Kepaniteraan Pengadilan Negeri Jakarta Pusat. Tanpa mengabaikan yang tersebut, Peminjam mengakui dan setuju bahwa Perusahaan dapat mengajukan gugatan pada pengadilan manapun.
            <br/>
            <br/>
            Bagian 13. Hukum yang Mengatur Perjanjian ini diatur oleh hukum Republik Indonesia.
            <br/>
            <br/>
            Bagian 14. Perubahan Perjanjian ini hanya dapat diubah oleh Peminjam dan Perusahaan yang menandatangani perjanjian tertulis, baik digital maupun fisik.
            <br/>
            <br/>
            Bagian 15. Pengalihan Tidak ada pihak yang dapat mengalihkan Perjanjian ini, secara keseluruhan atau sebagian, tanpa persetujuan tertulis dari Pihak lainnya. DEMIKIAN, para Pihak telah melaksanakan Perjanjian ini dengan tanda tangan elektronik pada tanggal yang tertera di bawah. Perjanjian ini dapat dilaksanakan dengan salinan elektronik atau fisik yang ditandatangani terpisah, yang mana masing-masing ketika dilaksanakan dan disampaikan akan dianggap asli, dan semua secara bersama akan merupakan satu dan instrumen yang sama.
        </p>
        </van-row>
    </div>

</template>

<script>
import api from '@/api/index'
    export default {
        name: "loan-contract",
        data(){
            return{
                info:{}
            }
        },
        mounted(){
            Math.signFigures = function(num, rank = 6) {
                if(!num) return(0);
                const sign = num / Math.abs(num);
                const number = num * sign;
                const temp = rank - 1 - Math.floor(Math.log10(number));
                let ans;
                if (temp > 0) {
                    ans = parseFloat(number.toFixed(temp));
                }
                else if (temp < 0) {
                    ans = Math.round(number / Math.pow(10, temp)) * temp;
                }
                else {
                    ans = Math.round(number);
                }
                return (ans * sign);
            };
            window.callBackFlutter=(data)=>{
                if(data){
                    window.sessionStorage.setItem("loginInfo", JSON.stringify(data));
                    let getData={
                        orderId:this.$route.query.orderId
                    };
                    // userName,//贷款人的名字
                    // phoneNumber,//注册手机号
                    // idNo,//身份证号
                    // bankName,//银行名称
                    // bankNumber,//银行号码
                    // orderNo,//借款订单编号
                    // loanMoney,<!--    借款金额-->
                    // loanDays,//借款期限   loanMonths//月份

                    // payMoney,//放款金额
                    // repayMoney,//应还金额
                    // couponMoney,//还款优惠金额
                    // realRepayMoney,//实际应还金额,
                    // graceDayRate:'',//宽限期日利率
                    // gracePeriod:'',//宽限期天数
                    // overdueDayRate//逾期日利率
                    api.getContractParam2(getData).then(res => {
                        if (res.data.success) {
                            this.info={
                                userName:res.data.data['userName'],
                                phoneNumber:res.data.data['userPhone'],
                                idNo:res.data.data['userIdNo'],
                                bankName:res.data.data['bankName'],
                                bankNumber:res.data.data['bankCardNum'],
                                orderNo:res.data.data['orderNo'],
                                loanMoney:res.data.data['applyMoney'],
                                loanDays:res.data.data['loanDays'],
                                loanMonths:res.data.data['loanMonths'],
                                payMoney:res.data.data['payMoney'],
                                repaymentMoneyTotal:res.data.data['currentRepay'],
                                couponMoney:res.data.data['freeAmount'],
                                realRepayMoney:res.data.data['realRepay'],
                                graceDayRate:res.data.data['graceDayRate'],
                                gracePeriod:res.data.data['gracePeriod'],
                                overdueDayRate:res.data.data['overdueDayRate']
                            };
                        } else {
                            this.$notify(res.data.message);
                        }
                    })
                }else{
                    goLogin.postMessage("goLogin");
                }

            };
            window.callBackAgreementParameter=(data)=>{
                if(data){
                    this.info=data;
                }
            };
            this.getData();
        },

        methods:{
            onClickLeft(){
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
            },
            // take(){
            //     return new Promise((resolve,reject)=>{
            //         this.$bridge.agreementParameter(null, res => {
            //             resolve(JSON.parse(res));
            //         });
            //     });
            // },
            // loginInfo(){
            //     return new Promise((resolve,reject)=>{
            //         this.$bridge["getLoginInfo"](null, res => {
            //             resolve(JSON.parse(res));
            //         });
            //     });
            // },
            replaceStr(data){
                if(data){
                    if((data+"").indexOf(",")!==-1){
                        return data
                    }else{
                        if((data+"").indexOf(".")!==-1){
                            return "Rp."+(Number(data).toFixed(2)+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                        }else{
                            return "Rp."+(Number(data).toFixed(2)+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                        }
                    }
                }else{
                    return "Rp.0.00"
                }
            },
            getData(){
                if(this.$route.query.orderId){
                    getUserLoginInfo.postMessage("callBackFlutter");
                    // this.loginInfo().then(data => {
                    //     console.log("回调", data);
                    //     if(data){
                    //         window.sessionStorage.setItem("loginInfo", JSON.stringify(data));
                    //         let getData={
                    //             orderId:this.$route.query.orderId
                    //         };
                    //         // userName,//贷款人的名字
                    //         // phoneNumber,//注册手机号
                    //         // idNo,//身份证号
                    //         // bankName,//银行名称
                    //         // bankNumber,//银行号码
                    //         // orderNo,//借款订单编号
                    //         // loanMoney,<!--    借款金额-->
                    //         // loanDays,//借款期限   loanMonths//月份
                    //
                    //         // payMoney,//放款金额
                    //         // repayMoney,//应还金额
                    //         // couponMoney,//还款优惠金额
                    //         // realRepayMoney,//实际应还金额,
                    //         // graceDayRate:'',//宽限期日利率
                    //         // gracePeriod:'',//宽限期天数
                    //         // overdueDayRate//逾期日利率
                    //         api.getContractParam2(getData).then(res => {
                    //             if (res.data.success) {
                    //                 this.info={
                    //                     userName:res.data.data['userName'],
                    //                     phoneNumber:res.data.data['userPhone'],
                    //                     idNo:res.data.data['userIdNo'],
                    //                     bankName:res.data.data['bankName'],
                    //                     bankNumber:res.data.data['bankCardNum'],
                    //                     orderNo:res.data.data['orderNo'],
                    //                     loanMoney:res.data.data['applyMoney'],
                    //                     loanDays:res.data.data['loanDays'],
                    //                     loanMonths:res.data.data['loanMonths'],
                    //                     payMoney:res.data.data['payMoney'],
                    //                     repaymentMoneyTotal:res.data.data['currentRepay'],
                    //                     couponMoney:res.data.data['freeAmount'],
                    //                     realRepayMoney:res.data.data['realRepay'],
                    //                     graceDayRate:res.data.data['graceDayRate'],
                    //                     gracePeriod:res.data.data['gracePeriod'],
                    //                     overdueDayRate:res.data.data['overdueDayRate']
                    //                 };
                    //             } else {
                    //                 this.$notify(res.data.message);
                    //             }
                    //         })
                    //     }else{
                    //         goLogin.postMessage("goLogin");
                    //         // this.$bridge.goLogin()
                    //     }
                    // });
                }else{
                    agreementParameter.postMessage("callBackAgreementParameter");
                    // this.take().then(data => {
                    //     console.log("回调-------", data);
                    //     if(data){
                    //         this.info=data;
                    //     }
                    // });
                }

            },
            watch:{
                "$route":"getData"    //后面是methods中的一个方法
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    .main{
        background-color: #ffffff;
        padding-bottom: 30px;
        word-wrap: break-word;
        word-break:break-all;
    }
    p.contract-detail{
        padding-left: 10px;
        padding-right: 10px;
        font-size: 16px;
        line-height: 20px;
    }
</style>