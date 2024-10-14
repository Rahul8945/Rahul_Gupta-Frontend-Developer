import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import mobilelogo from "../assets/mobilelogo.png";
import gradientColor from "../assets/gradient.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 770);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="header relative w-screen h-screen overflow-hidden h-[700px] xxs:h-[700px] ">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-[700px] w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 z-0 object-cover"
        >
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ClUd5f4zdna33~4ZVbPonPB9~8CtIEinsoLYa1fh4v-SigdD6Rm~sJa1SC6r7xbl5-Fr2VaFS0BVWni2vwwn-mKUfs1HGVbQ7DCGVqVb1H-mZntY6Q2QMs-ZE7m9VAAl2cSGA4~mip1BDlGpMSbRGknsvFf0hjL7NhNiMAG76dr6IZOitZVa-8D-UUKoMO-iDdb4oDVNrOgALkBwUH7J0eiDBL7oyJg4IB3ZxjO-Ef7pvbVgkWw9JGm0AItcRPJ7G17VkbWMW~Bb~nWLdkGkPoTpuBzhyLozoDyTciop1pyDvOUjZ5DzTGvoEMUyhYBIMqLQ~mhrNJjRMW2hlh7upQ__"
            type="video/mp4"
          />
          {/* Fallback message for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Content to overlay on the video */}
        <div className="h-[24px] bg-[linear-gradient(180deg,#00161D_0%,rgba(0,22,28,0.2)_100%)] relative z-10"></div>

        <div className="relative xs:fixed z-10 flex justify-between items-center h-auto text-white  font-space-grotesk px-6 xs:bg-[#0C2B2FB2] sx:text-[#B0FAFFB2] xs:backdrop-blur-[10px] xs:inset-0 xs:bg-opacity-30 xs:h-[64px] xs:mx-[9.75px] xs:rounded-[48px] xs:border xs:border-[#0F373C] ">
          {/* Logo */}
          <img
            src={isMobile ? mobilelogo : logo}
            alt="logo"
            className="w-[150px] h-[30px] md:w-[202px] md:h-[36px] ml-[62.5px] xs:ml-[10px] xs:w-[24px] xs:h-[24px]"
          />

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center gap-[45.2px] items-center w-[655px] h-[64px]  rounded-[48px] list-none bg-[#0C2B2FB2] text-[#B0FAFFB2]  inset-0 bg-opacity-30 font-medium text-[16px] leading-[1.5] tracking-[0.016em] border border-[#0F373C] ">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Why Us</li>
            <li className="hover:text-white cursor-pointer">Tokenomics</li>
            <li className="hover:text-white cursor-pointer">Roadmap</li>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex gap-[24px] mr-[69.8px]">
            <button className="border-none outline-none w-[47px]">
              Log in
            </button>
            <button
              id="whitepaper"
              className="whitepaper bg-[#CDFCFF] text-black py-2 px-4 rounded-[48px] border-none outline-none"
            >
              Whitepaper
            </button>
          </div>
        </div>
        <div className="mt-[98px] xxs:mt-[72px] font-[500] xxs:font-[300] relative z-10 text-center xxs:text-center leading-[99px] xxs:leading-[50px] xxs:text-[35.9px] text-[72px]  tracking-[-1.044px]  xxs:max-w-[203px] xxs:m-auto flex justify-center flex-col items-center  ">
          <h1 className=" text-white ">When Innovation </h1>
          <h1 className=" text-white">
            Meets{" "}
            <span className="bg-[#B0F9FF] px-[20px] py-[4px] rounded-[56px] text-black">
              {" "}
              Investment
            </span>{" "}
          </h1>
        </div>
        <h2 className="relative font-space-grotesk text-[20px] font-[400] text-center text-[#B0FAFFB2] mt-[24.25px] ">
          Empowering Trading Through Advanced Technology{" "}
        </h2>
        <button
          id="open"
          className="relative w-[131px] h-[44px] py-2 px-4 rounded-[12px] mt-[32.75px] text-white block mx-auto xs:text-black"
        >
          Open dApp
        </button>
        <img src={gradientColor} alt="" className="absolute bottom-0 z-10 w-full h-auto bottom-[-1px] " />

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-[#0C2B2FB2] text-[#B0FAFFB2] backdrop-blur-[10px] bg-opacity-30 p-6 flex flex-col items-center md:hidden">
            <ul className="flex flex-col items-center space-y-4">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Why Us</li>
              <li className="hover:text-white cursor-pointer">Tokenomics</li>
              <li className="hover:text-white cursor-pointer">Roadmap</li>
            </ul>
            <div className="mt-6 flex flex-col gap-4 items-center">
              <button className="border-none outline-none">Log in</button>
              <button
                id="whitepaper"
                className="whitepaper bg-[#CDFCFF] text-black py-2 px-4 rounded-[48px] font-space-grotesk"
              >
                Whitepaper
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
