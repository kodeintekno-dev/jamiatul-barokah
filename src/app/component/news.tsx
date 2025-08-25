import React from "react";

export default function News() {
  return (
    <div className="w-full flex justify-center">
      <section className="max-w-[1300px] w-full flex flex-col items-center py-15 px-5 gap-10">
        <h2 className="text-[#3A8564] font-bold text-2xl">
          BERITA KEGIATAN SEKOLAH
        </h2>
        <h1 className="font-bold text-4xl">News & Event</h1>
        <div className="lg:w-[60%] md:w-[80%] w-full flex justify-center items-center gap-10">
          <div className="w-full h-[2px] bg-[#3A8564]"></div>
          <img src="/img/collegeHat.png" alt="" />
          <div className="w-full h-[2px] bg-[#3A8564]"></div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <ul className="w-full flex flex-col gap-10">
            <li className="bg-[#3A8564] rounded-[50px] text-white px-5 lg:px-20 py-5 justify-between gap-10 flex flex-col lg:flex-row">
              <div className="w-[200px] h-[200px] bg-white rounded-[50px] bg-[url('/img/futsal.jpg')] bg-cover bg-center"></div>
              <section className="flex flex-col lg:flex-row items-center w-fit gap-[20px]">
                <div className="lg:max-w-[600px] flex flex-col gap-5 w-full">
                  <h1 className="text-2xl font-bold">Futsal</h1>
                  <p className="w-fit">
                    Ekstrakurikuler futsal bertujuan mengembangkan keterampilan
                    siswa dalam bermain futsal serta menanamkan sportivitas,
                    disiplin, dan kerja sama tim. Kegiatan dilaksanakan secara
                    rutin dengan latihan teknik dasar hingga simulasi
                    pertandingan, serta kesempatan mengikuti turnamen antar
                    sekolah.
                  </p>
                </div>
                <a
                  className="flex lg:self-end self-start items-center font-bold gap-4 w-max"
                  href=""
                >
                  <p className="text-[#F3F2A7]">Read More</p>
                  <img className="h-fit" src="./img/rightArrow.png" alt="" />
                </a>
              </section>
            </li>
            <li className="bg-[#3A8564] rounded-[50px] text-white px-5 lg:px-20 py-5 justify-between gap-10 flex flex-col lg:flex-row">
              <div className="w-[200px] h-[200px] bg-white rounded-[50px] bg-[url('/img/badminton.jpg')] bg-cover bg-center"></div>
              <section className="flex flex-col lg:flex-row items-center w-fit gap-[20px]">
                <div className="lg:max-w-[600px] flex flex-col gap-5 w-full">
                  <h1 className="text-2xl font-bold">Badminton</h1>
                  <p className="w-fit">
                    Ekstrakurikuler badminton melatih keterampilan siswa dalam
                    bermain bulu tangkis, mulai dari teknik dasar hingga
                    strategi permainan. Kegiatan ini juga menanamkan nilai
                    sportivitas, fokus, dan ketekunan. Siswa berkesempatan
                    mengikuti latihan rutin dan turnamen antar sekolah.
                  </p>
                </div>
                <a
                  className="flex lg:self-end self-start items-center font-bold gap-4 w-max"
                  href=""
                >
                  <p className="text-[#F3F2A7]">Read More</p>
                  <img className="h-fit" src="./img/rightArrow.png" alt="" />
                </a>
              </section>
            </li>
            <li className="bg-[#3A8564] rounded-[50px] text-white px-5 lg:px-20 py-5 justify-between gap-10 flex flex-col lg:flex-row">
              <div className="w-[200px] h-[200px] bg-white rounded-[50px] bg-[url('/img/kbm.jpg')] bg-cover bg-center"></div>
              <section className="flex flex-col lg:flex-row items-center w-fit gap-[20px]">
                <div className="lg:max-w-[600px] flex flex-col gap-5 w-full">
                  <h1 className="text-2xl font-bold">
                    Kegiatan Belajar Mengajar
                  </h1>
                  <p className="w-fit">
                    Kegiatan belajar mengajar dilaksanakan secara aktif,
                    interaktif, dan menyenangkan, dengan pendekatan yang
                    menyesuaikan kebutuhan siswa. Proses pembelajaran melibatkan
                    diskusi, praktik, dan pemanfaatan teknologi untuk mendukung
                    pemahaman materi secara optimal.
                  </p>
                </div>
                <a
                  className="flex lg:self-end self-start items-center font-bold gap-4 w-max"
                  href=""
                >
                  <p className="text-[#F3F2A7]">Read More</p>
                  <img className="h-fit" src="./img/rightArrow.png" alt="" />
                </a>
              </section>
            </li>
          </ul>
          <ul className="flex gap-5 self-end font-bold">
            <li className="cursor-pointer">1</li>
            <li className="opacity-50 cursor-pointer">2</li>
            <li className="opacity-50 cursor-pointer">3</li>
            <li className="opacity-50 cursor-pointer">4</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
