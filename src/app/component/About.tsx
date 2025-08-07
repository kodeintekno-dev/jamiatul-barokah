const headline = "font-[700] md:text-[48px] text-[32px]";
const paragraph = "font-[700] text-[15px]";

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row">
      <div className="flex flex-col flex-1/2 gap-8 py-10 lg:px-16 px-4 border-solid border-r-1 lg:border-black">
        <h1 className={headline}>TENTANG KAMI</h1>
        <img src="/img/line.svg" alt="" className="max-w-[414px] w-full" />
        <p className={paragraph}>
          PKBM Jamiatul Barokah didirikan oleh Yayasan Pendidikan Nurul Qolbu
          pada tahun 2021. Lembaga ini beroperasi di bawah pengawasan dan izin
          dari Dinas Pendidikan dan Kebudayaan Kota Bogor, dengan nomor izin
          operasional 420.0005 – IPSPN Tahun 2022.
        </p>
        <img src="/img/aboutImage.jpg" alt="" />
      </div>
      <div className="flex-1/2 py-10 lg:px-16 px-4">
        <div className="flex flex-col bg-[#ECEB9CCC] items-center gap-4 py-8 lg:px-24 px-8 rounded-[50px]">
          <h1 className={headline}>VISI</h1>
          <img src="/img/line.svg" alt="" className="max-w-[414px] w-full" />
          <p className={paragraph}>
            TERWUJUDNYA INSAN BERPRESTASI BERDASARKAN IMTAK DAN IPTEKS
          </p>
          <h1 className={headline}>MISI</h1>
          <img src="/img/line.svg" alt="" className="max-w-[414px] w-full" />
          <ul className="list-disc">
            <li className={paragraph}>
              Menerapkan pembelajaran yang aktif, kreatif, efektif, dan
              menyenangkan (PAKEM).
            </li>
            <li className={paragraph}>
              Menumbuhkan penghayatan nilai-nilai agama sebagai dasar perilaku.
            </li>
            <li className={paragraph}>
              Mengembangkan potensi peserta didik secara optimal.
            </li>
            <li className={paragraph}>
              Menciptakan lingkungan sekolah yang bersih, indah, nyaman, dan
              asri.
            </li>
            <li className={paragraph}>
              Membangun kerja sama yang transparan dan kekeluargaan dengan semua
              unsur sekolah.
            </li>
            <li className={paragraph}>
              Mendorong partisipasi orang tua, masyarakat, dan komite sekolah
              dalam mendukung pendidikan.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
