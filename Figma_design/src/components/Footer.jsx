import React from 'react';
import logo from '../assets/logo.png';
import telegram from '../assets/telegram.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/discord (1).png';
import facebook from '../assets/f.png';
import discord from '../assets/discord.png';

const Footer = () => {
  return (
    <div className="footer bg-black mt-[346px] ">
      <div className="max-w-[1308px] m-auto h-auto flex justify-center items-center gap-[500px] py-[100px]">
        <div className="flex-col items-center ">
          <img src={logo} alt="" />
          <div className="flex items-center gap-[30px] mt-[40px]">
            <img src={telegram} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={discord} alt="" />
          </div>
        </div>
        <div className="xs:hidden relative">
          <h1 className="text-white text-[35px]">
            “Designed for traders of today, just like you."
          </h1>
          <input
            type="search"
            placeholder="What's your work email?"
            className="w-[480px] m-auto h-[54px] bg-black border border-white rounded-[20px] pl-[10px] text-[16px]"
          />
          <button
            id="open"
            className='text-white absolute top-[78px] right-[100px]
          className="relative w-[131px] h-[44px] py-2 px-4 rounded-[10px] mt-[32.75px] text-white block mx-auto "'
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
