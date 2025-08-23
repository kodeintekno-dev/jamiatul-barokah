import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3A8564] grid place-items-center pb-8">
      <section className="flex justify-between w-full max-w-[1200px] py-16 border-b-2 border-solid border-white flex-wrap md:flex-row flex-col md:gap-0 gap-8 md:items-start items-center">
        <div className="flex flex-col items-center w-fit gap-10">
          <img src="/img/logo-footer.png" alt="" className="max-w-[185px]" />
          <div className="flex gap-4">
            <div className="w-[60px] h-[60px] bg-white rounded-full grid place-items-center">
              <img src="/img/facebook.svg" alt="" />
            </div>
            <div className="w-[60px] h-[60px] bg-white rounded-full grid place-items-center">
              <img src="/img/instagram.svg" alt="" />
            </div>
            <div className="w-[60px] h-[60px] bg-white rounded-full grid place-items-center">
              <img src="/img/twitter.svg" alt="" />
            </div>
            <div className="w-[60px] h-[60px] bg-white rounded-full grid place-items-center">
              <img src="/img/linkedin.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-white text-[2rem] font-bold">Contact Us</p>
          <div className="flex flex-col text-white font-bold max-w-[437px] gap-6">
            <p className="flex items-start gap-1">
              <img src="/img/location.svg" alt="" />
              <span>
                Sukasari III RT. 03/01 No. 26B Kel. Sukasari, Kec. Bogor Timur
                16142, Jawa Barat
              </span>
            </p>
            <p className="flex items-start gap-1">
              <img src="/img/call.svg" alt="" />
              <span>
                +42 812 3456 7890
              </span>
            </p>
            <p className="flex items-start gap-1">
              <img src="/img/web.svg" alt="" />
              <span>
                www.jamiatulbarokah.sch.id
              </span>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
