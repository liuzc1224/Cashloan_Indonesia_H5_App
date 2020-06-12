export default {
    borrowingStrategy: {
        title: "strategi pinjaman",
        one: "Klik 'Beli Sekarang' untuk memasuki proses aplikasi pinjaman.",
        two: "Langkah pertama dalam proses aplikasi pinjaman, menyempurnakan informasi sertifikasi pribadi.",
        three: "Langkah kedua dari proses aplikasi pinjaman, pilih akun penarikan, kirim ulasan.",
        for: "Tetap diam untuk persetujuan, dan uang akan dibayarkan dalam waktu 2 jam setelah persetujuan.",
    },
    repaymentNotice:{
        title: "Pembayaran",
        one: "Anda dapat memasukkan detail pesanan dari halaman beranda dan perintah historis untuk melihat rincian pinjaman saat ini.",
        two: "Sebelum tanggal pembayaran, klik\" Pembayaran Sekarang \", cari tombol pembayaran, pilih metode pembayaran yang sesuai dengan Anda, dan ikuti petunjuk untuk menyelesaikan operasi pembayaran.",
        three: "Jika pembayaran telah dilakukan, status pesanan belum diperbarui dalam 24 jam, silakan hubungi layanan pelanggan dalam waktu.",
    },
    borrowMoreMoney:{
        title:"Bagaimana cara meminjam lebih banyak uang?",
        one:"Semakin Anda menyelesaikan pinjaman, semakin tinggi jumlah yang dapat Anda pinjam.",
        two:"Pelunasan tepat waktu, tanpa lewat waktu, akan mendapatkan nilai kredit yang lebih tinggi. Semakin tinggi nilai kredit, semakin tinggi jumlah pinjaman."
    },
    feedback: {
        title: "Umpan balik online",
        tip: "Pendapat Anda adalah tujuan peningkatan kami!",
        theme: "Tema umpan balik - wajib",
        enterTheme: "Silakan masukkan subjek ...",
        themeTip: "Tema umpan balik tidak boleh kosong",
        enterContent: "Silakan masukkan komentar yang relevan ...",
        content: "Konten komentar - wajib",
        contentTip: "Umpan balik tidak boleh kosong",
        image: "Tambahkan gambar (berikan tangkapan layar masalah) - opsional",
        submit: "Kirim",
        failure: "Pengiriman gagal",
        success: "Kirim berhasil",
        add:"Upload"
    },
    coupon:{
        title:"Kupon saya",
        toBeUsed:"to be use",
        used:"digunakan",
        notActive:"tidak berlaku",
        expired:"dinonaktifkan",
        noCoupons:"Tidak ada kupon",
        time:"Validitas:",
        loan: "penuh",
        interest:"Kupon bunga kurang",
        interestRate:"Kupon diskon",
        interestFree:"Kupon bebas bunga",
        noThreshold: "Tanpa ambang batas",
        interestReduction: "pengurangan bunga",
        interestRateReduction: "pengurangan suku bunga",
        success:"Terima kesuksesan",
        failure:"Terima kegagalan",
        limit:"Batas maksimum telah tercapai",
        offer: {
            offerType: "Jenis penawaran",
            interestReduction: "bunga dikurangi",
            interestRateReduction: "minus suku bunga",
            dayFree1: "bebas bunga",
            dayFree2: "hari"
        },
        state:[
            {
                desc:"untuk digunakan",
                value:1
            },
            {
                desc:"sudah digunakan",
                value:2
            },
            {
                desc:"Kedaluwarsa",
                value:3
            }
        ],
        type:[
            {
                desc:"kurangi bunga",
                value:1
            },
            {
                desc:"Penurunan suku bunga",
                value:2
            },
            {
                desc:"hari bebas",
                value:3
            }
        ]
    },
    couponCenter:{
        title:"Pusat Kupon",
        receive:"Dapatkan sekarang",
        success:"Terima kesuksesan",
        description:"deskripsi kupon",
        receiveRear:"setelah menerima",
        effective:"efektif",
        unit:[
            {
                desc:"Hari",
                value:0
            },
            {
                desc:"minggu",
                value:1
            },
            {
                desc:"bulan",
                value:2
            },
            {
                desc:"tahun",
                value:3
            }
        ]
    },
    couponDescription:{
        title:"Keterangan Kupon",
        limit:"Validitas:",
        account:"Kupon terbatas pada akun",
        use:"Gunakan",
        tip:"Gunakan lebih banyak kupon!",
        type:[
            {
                desc:"Mengurangi minat",
                value:1
            },
            {
                desc:"Mengurangi suku bunga",
                value:2
            },
            {
                desc:"Hari Kebebasan",
                value:3
            }
        ]
    },
    couponSelect:{
        title:"Pilih Kupon",
        noSelect:"Jangan gunakan amplop merah untuk saat ini",
        cancel:"Batalkan",
        ok:"Bagus"
    },
    helpCenter:{
        title:"Pusat Bantuan",
        phone:"Kontak telepon",
        feedback:"Umpan balik online",
        itWorks:"berguna",
        useless:"Tidak berguna",
        editSuccess:"Edit berhasil"
    },
    historicalOrder:{
        title:"Urutan Historis",
        createTime:"Waktu pembuatan pesanan:",
        loanType:"Jenis pinjaman",
        loanMoney:"Jumlah pinjaman",
        loanLimit:"Jangka waktu pinjaman",
        unit:"Hari",
        no:"Tidak ada urutan sejarah",
        status:[
            {
                desc:"Ulasan tertunda",
                value:1
            },
            {
                desc:"Audit lulus",
                value:2
            },
            {
                desc:"proses pencairan dana",
                value:3
            },
            {
                desc:"Menunggu pembayaran",
                value:4
            },
            {
                desc:"selesai",
                value:6
            },
            {
                desc:"Tutup / batalkan secara manual",
                value:8
            },
            {
                desc:"penolakan persetujuan",
                value:9
            },
            {
                desc:"Pematian sistem",
                value:11
            },
            {
                desc:"Mesin menolak",
                value:12
            },
            {
                desc:"Kegagalan peminjaman",
                value:13
            },
            {
                desc:"Perpanjangan pameran",
                value:14
            }
        ]
    },
    productTypes: [
        {
            desc: "Pembayaran bunga satu kali - termasuk biaya layanan",
            value: 1
        },
        {
            desc: "Pembayaran bunga satu kali - memotong biaya layanan",
            value: 2
        },
        {
            desc: "Jadwal - biaya layanan per periode",
            value: 3
        },
        {
            desc: "Jadwalkan - memotong biaya layanan",
            value: 4
        }
    ],
    inviteFriends:{
        title:"Undang teman",
        btn:"Bagikan ke teman"
    },
    msgCenter: {
        title:"Pusat Pesan",
        no:"Tidak ada pesan sejarah",
        loading:"Memuat ...",
        pulling:"Tarik ke bawah untuk menyegarkan ...",
        loosing:"Lepaskan untuk menyegarkan ...",
        finished:"Tidak ada lagi",
    },
    orderDetails:{
        title:"detail debit",
        repaymentRecord:"Record pembayaran",
        repaymentAmount:"jumlah pembayaran aktual (RP)",
        orderNo:"nomor pesanan",
        createTime:"pesanan waktu pembuatan",
        loanAmount:"jumlah pinjaman",
        loanLimit:"periode pinjaman (hari)",
        dayRate:"suku bunga hari pinjaman",
        reviewRate:"Setiap tingkat layanan ulasan",
        technologyRate:"Tingkat layanan teknis",
        amount:"jumlah debit (RP)",
        amountDue:"harus membayar jumlah (RP)",
        coupon:"kupon (RP)",
        loanDate:"Tanggal Pencairan dana",
        dateDue:"harus mengembalikan tanggal",
        overdueFee:"biaya jatuh tempo",
        actualAmountDue:"jatuh tempo jumlah aktual (RP)",
        actualRepaymentAmount:"jumlah pembayaran aktual (RP)",
        closingDate:"tanggal kliring",
        view:"Lihat",
        contract:"《Kontrak Pinjaman》",
        none:"Tidak ada",
        offline:"Pembayaran toko online",
        failure:"Pengurangan gagal, pembayaran langsung",
        remind:"Dibayar, ingatkan kami!",
        caveat:"Jangan ulangi operasi dalam deduksi",
        viewRecord:"Lihat riwayat pembayaran",
        go:"Pergi ke pelunasan"
    },
    repaymentDetail:{
        title:'Rincian pembayaran',
        period:"periode",
        dateDue:"harus mengembalikan tanggal",
        view:"Lihat Detail Pesanan >>",
        principal:"pokok pinjaman",
        inAdvance:"Pembayaran di muka",
        shouldStill:"Sisa Total Pembayaran (RP)",
        interest:"bunga",
        serviceCharge:"biaya layanan",
        overdueFee:"biaya jatuh tempo",
        getCode:"Dapatkan kode pembayaran",
        va:"Pembayaran VA",
        ft:"Pembayaran FT (Ritel)",
        toRepay:"Untuk membayar",
        online:"Pembayaran online",
        tip:"Silakan pilih pesanan untuk membayar",
        status:[
            {
                desc: "Belum",
                value: 1
            },
            {
                desc: "Utang buruk",
                value: 2
            },
            {
                desc: "Belum dibersihkan",
                value: 3
            },
            {
                desc: "Sudah terbayar",
                value: 4
            },
            {
                desc: "Telah lewat jatuh tempo",
                value: 5
            },
            {
                desc: "penyelesaian jatuh tempo",
                value: 6
            },
            {
                desc: "Pengembalian Uang",
                value: 7
            },
            {
                desc: "Tidak efektif",
                value: 8
            },
            {
                desc: "Penyelesaian Perpanjangan",
                value: 9
            },
            {
                desc: "penyelesaian jatuh tempo",
                value: 10
            },
            {
                desc: "Terlambat",
                value: 11
            },
            {
                desc: "penyelesaian keuangan",
                value: 12
            },
            {
                desc: "Penyelesaian otomatis dalam proporsi",
                value: 13
            },
            {
                desc: "Setuju terlebih dahulu",
                value: 14
            }
        ]
    },
    repaymentRecord:{
        title:"Catatan pembayaran",
        orderNo:"nomor pesanan",
        repayment: "pelunasan",
        noRecord:"Tidak ada catatan pembayaran",
        repayType:[
            {
                name: "DK-VA",
                value: 1
            },
            {
                name: "DK-FT",
                value: 2
            }
        ]
    },
    onlineRepayment:{
        title:"Pembayaran online",
        dateShould:"harus mengembalikan tanggal",
        amount:"termasuk jumlah pinjaman",
        interest:"bunga",
        repaymentAmount:"jumlah pembayaran (RP)",
        repaymentAccount:"Akun pembayaran",
        prompt:{
            repaymentAmount:"Silakan masukkan jumlah pembayaran",
            repaymentAccount:"Silakan pilih akun pembayaran",
        }
    },
    prepayment:{
        title:"Pembayaran di muka",
        total:"jumlah total",
        dateDue:"harus mengembalikan tanggal",
        account:"akun",
        name:"nama",
        copySuccess:"Salin kesuksesan",
        copyFail:"salin gagal",
        tip1:"Kejutan: Anda telah diselamatkan sisanya Minat untuk ",
        tip2:" masalah."
    },
    common:{
        determine:"OK",
        cancel:"Batalkan"
    },
    repaymentCertificate:{
        title:"Bukti pembayaran",
        orderNo:"nomor pesanan",
        type:"jenis pembayaran",
        repayType:[
            "Semua pembayaran",
            "Pembayaran sebagian"
        ],
        repayMoney: "Jumlah pembayaran",
        tip1:"Silakan satu halaman penuh",
        tip2:"Pesanan Transfer Bank / Pesanan Transfer Elektronik",
        submit:"Kirim",
        success:"Kirim berhasil",
        failure:"Pengiriman gagal",
        prompt:{
            orderNo:"Silakan masukkan nomor pesanan",
            repayType:"Silakan pilih jenis pembayaran",
            repayMoney: "Silakan masukkan jumlah pembayaran",
            title:"Harap unggah bukti pembayaran"
        }
    },
    firstEdition:{
        registered:"Daftarkan nomor telepon",
        phone:"nomor ponsel",
        prompt:"Nomor ponsel tidak boleh kosong",
        tip:"Silakan masukkan nomor ponsel yang benar",
        error:"Nomor telepon sudah terdaftar",
        btn:"Daftar dan unduh aplikasi",
        text:`Informasi lebih aman! - Layanan privasi sempurna<br/>Tinjau lebih cepat! ——Setelah mengajukan aplikasi pinjaman, itu akan ditinjau dalam 3 menit tercepat.<br/>Layanan lebih intim! ——Jangan meminjam uang`
    },
    privacyAgreement:"Perjanjian Privasi",
    membershipAgreement:"Perjanjian Staf Sosial Koperasi",
    loanContract:"Kontrak pinjaman",
    orderState:[
        {
            desc: "tinjauan menunggu",
            value: 1
        },
        {
            desc: "Audit lulus",
            value: 2
        },
        {
            desc: "Penarikan / menggambar",
            value: 3
        },
        {
            desc: "Menunggu pembayaran",
            value: 4
        },
        {
            desc: "Lebih dari harapan pembayaran",
            value: 5
        },
        {
            desc: "selesai",
            value: 6
        },
        {
            desc: "tutup / batalkan secara manual",
            value: 8
        },
        {
            desc: "penolakan persetujuan",
            value: 9
        },
        {
            desc: "Pematian sistem",
            value: 11
        },
        {
            desc: "penolakan persetujuan",
            value: 12
        },
        {
            desc: "proses pencairan dana",
            value: 13
        },
        {
            desc: "Dalam perjalanan",
            value: 14
        },
        {
            desc:"Sudah diselesaikan",
            value:15
        },
        {
            desc:"Telah lewat jatuh tempo",
            value:16
        },
        {
            desc:"Pameran ditutup",
            value:17
        },
        {
            desc: "Tanggal jatuh tempo tidak diselesaikan",
            value: 18
        },
        {
            desc:"Neraca keuangan diselesaikan",
            value:19
        },
        {
            desc:"Secara otomatis diselesaikan secara proporsional",
            value:20
        },
        {
            desc:"Setuju terlebih dahulu",
            value:21
        },
        {
            desc:"Kegagalan peminjaman",
            value:22
        },
        {
            desc:"Kegagalan peminjaman",
            value:23
        },
        {
            desc:"Kegagalan peminjaman",
            value:24
        },
        {
            desc: "Jeda uang",
            value: 25
        },
        {
            desc: "Ini belum diselesaikan",
            value: 26
        },
        {
            desc: "Kegagalan peminjaman",
            value: 27
        }
    ],
    repaymentCode:{
        title:"Kode pembayaran",
        total:"Jumlah total",
        account:"Akun",
        name:"Nama",
        click:"Klik menyegarkan",
        time:"2019/08/12 24:00前有效",
        tip:"Pelunasan mendesak, silakan hubungi layanan pelanggan!",
        sendText:"Kotak surat",
        email:"Silakan masukkan email Anda",
        copySuccess:"Salin berhasil",
        copyFail:"Penyalinan gagal"
    }
}
