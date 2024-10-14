import React from 'react';
import donut from '../assets/Donut.png';

const Token = () => {
  return (
    <div className="token mt-[216px] mx-[50px] mb-[200px]">
      <h1 className="text-[40px] text-white text-center">Tokenomics</h1>
      <div className="mt-[80px] flex  xs:flex-col">
        <img src={donut} alt="donut" className="w-[671px] h-[522px] xs:max-w-[192px] xs:m-auto xs:h-[192px] xs:items-center xs:justify-center" />
        <div className="flex flex-col items-center justify-center w-[538px] h-[324px]  text-white xs:max-w-[250px] xs:m-auto">
          {/* First Section */}
          <div className="  bg-[#143740] w-[500px] p-8 rounded-lg shadow-lg mb-6 mt-[200px]">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Name</span>
              <span>: EthAi</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Token Name</span>
              <span>: $EthAi</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Token standard</span>
              <span>: ERC20</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Blockchain</span>
              <span>: Ethereum</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total Supply</span>
              <span>: 100 Million</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Tax</span>
              <span>: 5%/5%</span>
            </div>
          </div>

          {/* Second Section */}
          <div className=" bg-[#143740] w-[500px] p-8 rounded-lg shadow-lg mb-6 ">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Team</span>
              <span>: 35%</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Marketing</span>
              <span>: 5%</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Liquidity Pool</span>
              <span>: 90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
