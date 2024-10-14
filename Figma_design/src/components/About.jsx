import React from 'react';
import GridSection from './GridSection';
import graph from '../assets/graph.png';
import wallet from '../assets/wallet.png';
import tool from '../assets/Tools.png';
import future from '../assets/Future Technology.png';
import Token from './Token';
import Roadmap from './Roadmap';

const About = () => {
  return (
    <div className="about relative w-screen h-auto overflow-hidden mt- ">
      <GridSection />
      <div className="mt-[200px]">
        <h1 className="text-white text-[40px] text-center font-bold">
          About EthAi
        </h1>
        <p className="max-w-[703px] m-auto text-center font-[400] text-[16px] mt-[20px] xs:mx-[30px] text-[#B0FAFFB2]">
          At EthAi, we're all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders' movements.
        </p>
        <button
          id="whitepaper"
          className="relative w-[131px] h-[44px] py-2 px-4 rounded-[12px] mt-[32.75px] block mx-auto text-black"
        >
          Read more
        </button>
        <div className="mt-[48px] max-w-[744px] xs:max-w-[350px] m-auto grid grid-cols-1 md:grid-cols-2 bg-[#0C2B2FB2] rounded-[20px]">
          <div className="p-6  rounded-lg text-white text-start ml-8">
            <img src={graph} alt="Stay Ahead" className=" mb-4" />
            <h3 className="text-xl font-semibold mb-2">Stay Ahead</h3>
            <p style={{ color: 'var(--color-cyan-8570, #B0FAFFB2)' }}>
              No more guesswork—get clear, trustable insights.
            </p>
          </div>
          <div className="p-6  rounded-lg text-white text-start ml-8">
            <img src={wallet} alt="Know Your Assets" className=" mb-4" />
            <h3 className="text-xl font-semibold mb-2">Know Your Assets</h3>
            <p style={{ color: 'var(--color-cyan-8570, #B0FAFFB2)' }}>
              Always stay on top of how your investments are performing.
            </p>
          </div>
          <div className="p-6  rounded-lg text-white text-start ml-8">
            <img src={tool} alt="Simple, Not Overwhelming" className=" mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Simple, Not Overwhelming
            </h3>
            <p style={{ color: 'var(--color-cyan-8570, #B0FAFFB2)' }}>
              Our tools are designed to make complex market analysis easy to
              understand and act on.
            </p>
          </div>
          <div className="p-6  rounded-lg text-white text-start ml-8">
            <img src={future} alt="Future-Proof" className=" mb-4" />
            <h3 className="text-xl font-semibold mb-2">Future-Proof</h3>
            <p style={{ color: 'var(--color-cyan-8570, #B0FAFFB2)' }}>
              We're constantly improving, adding new features to help you make
              the most informed decisions possible.
            </p>
          </div>
        </div>
      </div>
      <Token/>
      <Roadmap/>
    </div>
  );
};

export default About;
