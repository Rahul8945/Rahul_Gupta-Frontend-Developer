import React from 'react';
import circuit from '../assets/circuit.png';

const GridSection = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-6 p-10  text-[17px]"
      style={{ color: 'var(--color-cyan-8570, #B0FAFFB2)' }}
    >
      {/* Trade Optimizer */}
      <div className="relative col-span-1 md:col-span-1 row-span-2 p-6 rounded-[16px] md:rounded-ss-[56px] shadow-lg flex flex-col justify-between xs:max-h-auto min-h-[504px] border border-[#0F373C] bg-[#0C2B2FB2]">
        <div className='flex justify-center items-center'>
          <div className="box_border w-[100px] h-[100px] mt-12 bg-[#15B6C9] rounded-[16px] flex justify-center items-center">
            <div className=" w-[60px] h-[60px] rounded-[8px] border border-white  "></div>
          </div>
        </div>
        <h3 className="text-white mt-[91px] xs:mt-[40px] text-[22px] text-center font-bold">
          Trade Optimizer
        </h3>
        <p className="max-w-[232px] mt-4 m-auto text-center">
          Find the right moments to buy or sell, with personalized trade
          suggestions designed to help you make the most of every opportunity.
        </p>
      </div>

      {/* Market Insight */}
      <div className="bg-[#0C2B2FB2] col-span-1 md:col-span-2 p-6 rounded-[16px] shadow-lg flex flex-col justify-between min-h-[198px] border border-[#0F373C]">
        <h3 className="text-white mb-2 ml-6 text-[22px] font-bold">
          Market Insight
        </h3>
        <p className="w-[360px] xs:w-auto ml-6">
          Stay ahead of the market. Get real-time updates on market trends,
          track top traders' movements, and spot signals from key influencers.
        </p>
      </div>

      {/* Risk Guard */}
      <div className="bg-[#0C2B2FB2] col-span-1 md:col-span-1 row-span-2 p-6 rounded-[16px] md:rounded-se-[56px] shadow-lg flex flex-col justify-between items-center min-h-[504px] border border-[#0F373C]">
        <img src={circuit} alt="" className='xs:w-[236px] xs:order-last' />
        <h3 className="text-white mb-4 text-[22px] font-bold text-center" >Risk Guard</h3>
        <p>
          Get alerts on market swings and potential risks before they impact
          your portfolio. This agent helps you navigate volatility and stay
          prepared for anything.
        </p>
      </div>

      {/* Portfolio Sync */}
      <div
        className="bg-[#0C2B2FB2] col-span-1 md:col-span-2 p-6 rounded-[16px] shadow-lg flex flex-col justify-between min-h-[290px] border border-[#0F373C] xs:hidden"
        style={{ boxShadow: 'inset 0px 1px 25px 0px #1DCEF240' }}
      ></div>

      {/* Last Two Boxes with Ratio 1.5:2.5 */}
      {/* Box 1 - 1.5 ratio */}
      <div className="bg-[#0C2B2FB2] col-span-1 md:col-start-1 md:col-end-3 md:row-start-3  rounded-[16px] md:rounded-es-[56px] shadow-lg flex flex-col justify-start gap-[30px] flex-grow max-w-[500px] min-h-[240px] border border-[#0F373C]">
        <h3 className="text-white mt-8 ml-10 text-[22px] font-bold">
          Portfolio Sync
        </h3>
        <p className="w-[254px]  ml-10">
          Easily manage your portfolio. You'll always know what you own, how
          it's performing, and where it's headed.
        </p>
      </div>

      {/* Box 2 - 2.5 ratio */}
      <div className="bg-[#0C2B2FB2] col-span-1 md:col-start-2 md:col-end-5 md:row-start-3 md:ml-[160px] p-6 rounded-[16px] md:rounded-ee-[56px] shadow-lg flex flex-col justify-between flex-grow max-w-[920px] min-h-[240px] border border-[#0F373C]">
        <h3 className="text-white mb-2 ml-6 text-[22px] font-bold">
          Opportunity Scout
        </h3>
        <p className="w-[299px] xs:w-auto  ml-6 " style={{ color: 'var(--color-cyan-8570, #B0FAFFB2)' }}>
          Find exciting new projects, events, and tokens that others might be
          missing. Identifying promising opportunities early, so you never miss
          out on the next big thing.
        </p>
      </div>
    </div>
  );
};

export default GridSection;
