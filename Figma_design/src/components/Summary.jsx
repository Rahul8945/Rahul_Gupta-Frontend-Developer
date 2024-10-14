import React from 'react';
import plus from '../assets/Container (2).png';

const Summary = () => {
  return (
    <div className="summary flex justify-center  xs:flex-col xs:items-center xs:w-[auto]">
      <h1 className="text-[40px] w-[385px] text-white xs:ml-[100px]">
        Frequently Asked Questions
      </h1>
      <div className="text-white text-[17px] list-none h-[320px] leading-[80px] ">
        <li>
          <img src={plus} alt="" className="inline mr-[40px]" />
          What is EthAi?
        </li>
        <li>
          <img src={plus} alt="" className="inline mr-[40px]" />
          How can EthAi can help me as a Trader?
        </li>
        <li>
          <img src={plus} alt="" className="inline mr-[40px]" />
          Who can use EthAi?
        </li>
        <li>
          <img src={plus} alt="" className="inline mr-[40px]" />
          How does EthAi track smart money flow?
        </li>
        <li>
          <img src={plus} alt="" className="inline mr-[40px]" />
          How does ensure data security?
        </li>
        
      </div>
    </div>
  );
};

export default Summary;
