const SambutanSection = () => {
  return (
    <section className="w-full bg-[#3A8564] grid place-items-center">
      <div className="max-w-[1200px] flex w-full md:justify-between py-8 flex-wrap md:gap-4 gap-8 md:px-6 px-4 items-center justify-center">
        <img
          src="/img/kepala-sekolah.jpg"
          alt=""
          className="md:max-w-[346px] rounded-full max-w-[250px]"
        />
        <div className="flex flex-col text-white font-bold max-w-[759px] w-full">
          <p className="text-[#F3F2A7] md:text-[2rem] text-[1.5rem]">SAMBUTAN KETUA PKBM</p>
          <p className="md:text-[3rem] text-[2.5rem]">JAMIATUL BAROKAH</p>
          <img src="/img/sambutanLine.svg" alt="" className="max-w-[759px] w-full"/>
          <p className="text-[15px] max-w-[437px] md:mt-0 mt-4 w-full">
            SAMBUTAN KETUA PKBM <br />
            Selamat datang di situs PKBM Jamiatul Barokah! Kami berkomitmen
            menyediakan pendidikan berkualitas yang inklusif dan memberdayakan.
            Temukan berbagai program dan kegiatan yang dirancang untuk
            mengembangkan potensi Anda di sini. Terima kasih telah bergabung,
            dan selamat belajar!
          </p>
          <p className="text-[15px] mt-8 w-full">
            Salam, <br />
            Ketua PKBM Jamiatul Barokah <br />
            Abdullah Mahdi Husni, S.Pd.I
          </p>
        </div>
      </div>
    </section>
  );
};

export default SambutanSection;
