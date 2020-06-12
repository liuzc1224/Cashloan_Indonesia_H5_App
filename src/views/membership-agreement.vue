<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('membershipAgreement')"
                left-arrow
                @click-left="onClickLeft"
        >
        </van-nav-bar>
        <van-row  class="main">
            <div class="main-text">
                <h2 class="agreement_title">
                    FORMULIR KEANGGOTAAN KOPERASI Koperasi SIMPAN PINJAM JALAN GEMILANG NUSANTARA ("KOPERASI")
                </h2>
                <h3>
                    FORMULIR INI CUKUP DIISI SATU KALI SAJA
                </h3>
                <h2>DATA PERORANGAN/PERSONAL</h2>
                <h2>DETAILS </h2>
                <van-row class="main-table">
                    <table>
                        <tr>
                            <td colspan="2">
                                Nama Lengkap sesuai Kartu Identitas
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nama Lengkap:
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Tempat & TanggalLahir:
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Nama IbuKandung：
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                JenisKelamin：
                            </td>
                            <td>
                            <span>
                                <van-icon class="iconfont" class-prefix="my-icon" name="changfangxing"></van-icon>Pria；
                            </span>
                                <span>
                                <van-icon class="iconfont" class-prefix="my-icon" name="changfangxing"></van-icon>Wanita
                            </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Identitas：
                            </td>
                            <td>
                            <span>
                                <van-icon class="iconfont" class-prefix="my-icon" name="changfangxing"></van-icon>e-KTP/SIM
                            </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nomor KTP：
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Alamat：
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Pekerjaan：
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                PenghasilanPerbulan：
                            </td>
                            <td>
                                <p>
                                    <van-icon class="iconfont" class-prefix="my-icon" name="changfangxing"></van-icon>< Rp. 5.000.000；
                                </p>
                                <p>
                                    <van-icon class="iconfont" class-prefix="my-icon" name="changfangxing"></van-icon>>Rp. 5.000.000 – Rp. 10.000.000；
                                </p>
                                <p>
                                    <van-icon class="iconfont" class-prefix="my-icon" name="changfangxing"></van-icon>> Rp. 10.000.000；
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                JumlahPinjamanyang Diajukan
                            </td>
                            <td>
                                Rp (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                TujuanPinjaman：
                            </td>
                            <td>
                                Modal Usaha；<br/>
                                Lainnya, sebutkan     _____________________；
                            </td>
                        </tr>
                        <tr>
                            <td>
                                JangkaWaktuPinjaman：
                            </td>
                            <td>
                                1.(Satu)Minggu；<br/>
                                2.(Dua)Minggu；<br/>
                                3.Lainnya, sebutkan_________________ ；
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Bunga：
                            </td>
                            <td>
                                [ * ]% / Bulan/ Tahun
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PencairanPinjamanditransfer ke:
                            </td>
                            <td>
                                Bank:<br/>
                                No Rekening:<br/>
                                Atas Nama:
                            </td>
                        </tr>
                    </table>
                    <br/>
                    Saya setuju untuk memberikan setiap data, informasidan salinan dari dokumen pendukung yang diperlukankepada Koperasi untuk proses menjadi anggota dariKoperasi dan memberikan hak penuh kepada Koperasiuntuk memberikan data, informasi dan dokumenpendukung lainnya tersebut kepada pihak ketiga yang bekerjasama dengan Koperasi sehubungan dengankegiatan pemberian pinjaman dari Koperasi.
                    <br/>
                    <br/>
                    Saya sepakat bahwa permohonan saya untuk menjadianggota Koperasi tunduk pada keputusan RapatPengurus Koperasi dengan syarat dan ketentuan yang ada, termasuk namun tidak terbatas pada, persyaratandalam Anggaran Rumah Tangga Koperasi danketetapan lain yang dibuat oleh Pengurus Koperasi.
                    <br/>
                    <br/>
                    Saya telah memahami sepenuhnya isi formulir ini dantelah menandatangani formulir ini pada tanggal___________________ dalam keadaan sadar tanpapaksaan/tekanan dari pihak manapun secaraelektronik sesuai ketentuan peraturan perundang-undangan yang berlaku sehingga tidak diperlukan lagiadanya tanda tangan basah.
                    <br/>
                </van-row>
            </div>

        </van-row>
    </div>
</template>

<script>
    export default {
        name: "membership-agreement",
        methods:{
            onClickLeft(){
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
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
    .agreement_title{
        word-break: normal;
        word-wrap: normal;
    }
    .iconfont{
        padding-right: 10px;
    }
    .main-table{

    }
    .main-text{
        padding: 0 10px;
    }
    table{
        font-size: 12px;
        width: 100%;
        border-collapse: collapse;
        tr{
            td{
                border: 1px #000000 solid;
                padding: 10px 0 10px 5px;
            }
        }
        tr:nth-child(even){
            background-color: #cccccc;
        }
    }
    h2:first-child,h3{
        text-align: center;
    }
</style>