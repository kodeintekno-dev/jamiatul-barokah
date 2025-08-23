import React from "react";

export default function Program() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(243, 242, 167, 0.8), rgba(243, 242, 167, 0.8)), url('/img/bg2.jpg')",
      }}
      className="py-20 flex flex-col gap-10 items-center"
    >
      <div className="max-w-[1400px] w-full px-5 flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-bold text-4xl text-[#48AE3C]">
            KENAPA PILIH KAMI
          </h1>
          <h2 className="font-bold text-4xl">Program</h2>
        </div>
        <div className="lg:max-w-[60%] md:max-w-[90%] w-full flex gap-15 items-center">
          <div className="bg-black h-[1px] w-full"></div>
          <img src="/img/collegehat.png" alt="" />
          <div className="bg-black h-[1px] w-full"></div>
        </div>
        <section className="flex lg:flex-row flex-col gap-15">
          <div className="w-full px-13 outline-black outline-2 flex flex-col p-15 relative">
            <img className="w-fit" src="/img/people.png" alt="" />
            <h2 className="font-bold text-2xl mb-5">Keterampilan Hidup</h2>
            <p className="font-bold">
              Program ini membekali siswa dengan keterampilan praktis seperti
              kewirausahaan, komunikasi, teknologi, dan pengelolaan diri.
              Tujuannya adalah membantu siswa siap menghadapi tantangan
              kehidupan sehari-hari dan dunia kerja secara mandiri dan percaya
              diri.
            </p>
            <div className="w-full h-full outline-[#6CB531] outline-2 top-2 left-2 absolute"></div>
          </div>
          <div className="w-full px-13 outline-black outline-2 flex flex-col p-15 gap-3 relative">
            <img className="w-fit" src="/img/education.png" alt="" />
            <h2 className="font-bold text-2xl mb-5">Pendidikan Kesetaraan</h2>
            <p className="font-bold">
              Paket A (setara SD) <br /> Paket B (setara SMP) <br /> Paket C
              (setara SMA) <br /> Satuan PAUD Sejenis (SPS/PAUD)
            </p>
            <div className="w-full h-full outline-[#6CB531] outline-2 top-2 left-2 absolute"></div>
          </div>
          <div className="w-full px-13 outline-black outline-2 flex flex-col p-15 gap-3 relative">
            <img className="w-fit" src="/img/book.png" alt="" />
            <h2 className="font-bold text-2xl mb-5">Taman Bacaan Masyarakat</h2>
            <p className="font-bold">
              Fasilitas belajar terbuka yang menyediakan berbagai buku dan bahan
              bacaan untuk siswa dan masyarakat. TBM mendukung budaya literasi,
              belajar mandiri, dan menjadi ruang edukatif yang ramah bagi semua
              usia.
            </p>
            <div className="w-full h-full outline-[#6CB531] outline-2 top-2 left-2 absolute"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
