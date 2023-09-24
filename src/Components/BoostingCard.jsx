import React from 'react'

function BoostingCard({ rank, logo1, name1, logo2, name2, weight }) {
    return (
        <div className='flex flex-col p-6 rounded-lg bg-[#151619] w-full'>
            <div className='flex items-center gap-2 mb-6'>
                <span className='text-xs text-[#C2F07D] py-0.5 px-2' style={{ borderRadius: '22px', border: '1px solid rgb(194, 240, 125)', textShadow: 'rgb(194, 240, 125) 0px 0px 4px' }}>#{rank}</span>
                <span className='text-xs text-[#EBF0FFBF]'>Weight Rank</span>
            </div>
            <div className='flex items-center gap-2 text-2xl text-white'>
                <p className='flex items-center gap-1 mr-2'>
                    <img src={logo1} alt="logo" height={20} width={30} />
                    <span>{name1}</span>
                </p>
                <span className='text-[#D6E1FF99] font-bold'>
                    /
                </span>
                <p className='flex items-center gap-1'>
                    <img src={logo2} alt="logo" height={20} width={30} />
                    <span>{name2}</span>
                </p>
            </div>
            <div className='flex justify-between items-center mt-8 pb-5' style={{ borderBottom: '1px solid #272930' }}>
                <div>
                    <p className='text-sm text-[#D6E1FF99] mb-1'>Weight</p>
                    <p className='text-xl text-white'>{weight}</p>
                </div>
                <div>
                    <p className='text-sm text-[#D6E1FF99] mb-1'>Your Votes | Yield Boost</p>
                    <p className='flex items-center text-xl text-[#D6E1FF99]'>
                        <span>0</span><span className='bg-[#d6e1ff99]' style={{ width: '1px', height: '12px', marginInline: '9px' }}></span><span>1x</span>
                    </p>
                </div>
            </div>
            <div className='mt-4 h-9'></div>
            <button className='rounded-lg text-base text-white py-4 px-8 bg-[#C2D2FF26] font-semibold hover:bg-[#eef3ff26]'>
                Boost
            </button>
        </div>
    )
}

export default BoostingCard