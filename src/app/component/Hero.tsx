export default function Hero() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/img/bg1.png')",
      }}
      className="w-screen bg-cover font-[inter] flex items-center mt-18 relative"
    >
      <section className="text-white py-65 md:py-48 p-10 font-bold flex flex-col gap-3 md:gap-5">
        <h2 className="text-xl md:text-[2em]">
          YAYASAN PENDIDIKAN NURUL QOLBU
        </h2>
        <h1 className="text-3xl md:text-[6.7em] md:leading-[90px]">
          PKBM JAMIATUL <br /> BAROKAH
        </h1>
        <div className="text-[1.1em] md:text-[2em]">
          <h3>Nomor Ijin Oprasional : 420.0005</h3>
          <h3>IPSPN Tahun 2022</h3>
        </div>
        <h4 className="text-xl md:text-[1.6em] max-w-[800px]">
          Sukasari III RT. 03/01 No. 26B Kel. Sukasari, Kec. Bogor Timur 16142,
          Jawa Barat
        </h4>
        <button className="bg-[#6CB531] rounded-full py-3 px-10 w-fit">
          Daftar Sekarang
        </button>
      </section>
      <a href="">
        <img
          className="absolute bottom-10 right-10"
          src="/img/logos_whatsapp-icon.png"
          alt=""
        />
      </a>
    </div>
  );
}
