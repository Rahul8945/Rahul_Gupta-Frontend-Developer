import React from 'react';
import container from '../assets/Container .png';

const Roadmap = () => {
  return (
    <div className="roadmap">
      <h1 className="text-[40px] text-white text-center ">Roadmap</h1>

      {/* Phase 1 section */}
      <div className="mt-[100px] flex justify-center items-center xs:flex-col xs:ml-[50px]">
        {/* Left side: text */}
        <div className="text-white w-[534px] leading-[3em] ml-[176px] text-[#EFEFE8]">
          <span className="bg-white text-black rounded-[4px]">Phase 1</span>
          <h1 className="text-[40px]">Kicking Off</h1>
          <div className='text-[20px]'>
            <li>Launch of EthAi: Officially</li>
            <li>Development of Core AI Agents</li>
            <li>User Onboarding Campaign</li>
            <li>Community Engagement Initiatives</li>
          </div>
        </div>

        {/* Right side: image */}
        <div className="relative">
          <img src={container} alt="container" className="xs:w-[350px]" />
        </div>
      </div>

      {/* Phase 2 section */}
      <div className="mt-[40px] flex justify-center gap-[100px] items-center xs:flex-col xs:ml-[50px] xs:flex-col xs:ml-[40px]">
        {/* Left side: video */}
        <div className="relative xs:order-[1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="xs:w-[350px] opacity-90 "
            style={{ backgroundColor: 'transparent' }}
          >
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/cb86/a228/-0cff-4aa8-9d9a-c49552d1766c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTNvAIBzPrPjNmpZXye0ckBOYZnlZ11FzblBWls1xX6FpKLNUTC22YA7nIVDmEZLvgFD7iFevF6mt~ajj12GEDAQkS0yF8JTj9SYctj49p-IOV8ApKCiW0JVJVYbApwJhV1Rh-asA7Bpm2csJkmD~CERIKEZf5YwhR2jrLmPJo7Tn6mMlCCwv6vCHD5r--1sPJsg3CPD-gOVQjIgcHJIpKQqHzm9N-6BtlKY61zc1EWilZ5Z6x8XM0GjXW6PIFpcrmqtPBSoXHeq-BnSW5lzBQJ~BTrQOMkppo5GSGNh54In-LOhKscQQYrRDs0wYLhKoYsAhpo13jO-8yhfjIT92A__"
              type="video/mp4"
            />
            {/* Fallback message */}
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right side: text */}
        <div className="text-white w-[534px] leading-[3em] text-[#EFEFE8] xs:w-auto">
          <span className="bg-white text-black rounded-[4px]">Phase 2</span>
          <h1 className="text-[40px]">Bigger Insights</h1>
          <div className='text-[20px]'>
            <li>Introduction of Advanced AI Agents</li>
            <li>Strategic Partnerships</li>
            <li>User Interface Optimization</li>
            <li>Comprehensive Marketing Campaign</li>
          </div>
        </div>
      </div>
      {/* Phase 3 section */}
      <div className="mt-[100px] flex justify-center items-center xs:flex-col xs:ml-[50px]">
        {/* Left side: text */}
        <div className="text-white w-[534px] leading-[3em] ml-[176px] text-[#EFEFE8]">
          <span className="bg-white text-black rounded-[4px]">Phase 3</span>
          <h1 className="text-[40px]">Full Power</h1>
          <div className='text-[20px]'>
            <li>Introduction of Enhanced Features</li>
            <li>API Integration for Data Access</li>
            <li>Launch of Community-Driven Initiatives</li>
            <li>Continuous Improvement and Updates</li>
          </div>
        </div>

        {/* Right side: image */}
        <div className="relative">
          <img src={container} alt="container" className="xs:w-[350px]" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
