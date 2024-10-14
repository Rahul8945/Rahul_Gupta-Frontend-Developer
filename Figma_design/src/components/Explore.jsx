import React from 'react'

const Explore = () => {
  return (
    <div className='explore mt-[150px]'>
        <div className='max-w-[960px] h-auto m-auto border border-white bg-[#0C2B2FB2] rounded-[20px] xxs:ml-[50px]' style={{ boxShadow: 'inset 0px 1px 25px 0px #1DCEF240' }}>
            <h1 className='text-center text-[40px] text-white'>Explore Our <span className='text-[#62F0FE]'>dApp</span> </h1>
            <p className='max-w-[703px] m-auto text-[17px] text-[ #B0FAFFB2] mt-[20px]' style={{ color: 'var(--color-cyan-8570, #B0FAFFB2)' }}>EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
        <button id='whitepaper' className='whitepaper w-[131px] h-[44px] py-2 px-4 rounded-[16px] my-[20px]  block mx-auto text-black'>Open dApp</button>
        </div>
    </div>
  )
}

export default Explore