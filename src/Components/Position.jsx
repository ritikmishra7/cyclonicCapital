import React, { useState } from 'react'
import { Image } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import welcome from '../assets/images/welcome.svg'

function Position({ setShowModal }) {

    const [all, setAll] = useState(true)
    const [currentPos, setCurrentPos] = useState(true)
    return (
        <div className='pt-6' style={{ background: 'linear-gradient(156.94deg, rgba(8, 9, 10, 0.7) 0%, rgb(8, 8, 10) 25%, rgb(8, 8, 10) 90%, rgba(8, 8, 10, 0.85) 100%)' }}>
            <div className='mx-10 flex items-center justify-start gap-8'>
                {currentPos ?
                    <>
                        <p className='text-2xl text-white font-semibold'>Current Positions</p>
                        <p className='text-base text-[#EBF0FFBF] hover:text-white flex items-center gap-1 cursor-pointer font-semibold' onClick={() => setCurrentPos(false)}>
                            <span>History</span>
                            <ArrowForwardIcon />
                        </p></> :
                    <div className='flex flex-col gap-4'>
                        <p className='text-base text-[#EBF0FFBF] hover:text-white flex items-center gap-1 cursor-pointer font-semibold' onClick={() => setCurrentPos(true)}>
                            <ArrowBackIcon />
                            <span>Current Positions</span>
                        </p>
                        <p className='text-2xl text-white font-semibold'>History</p>
                    </div>
                }

            </div>
            <div className='p-12'>
                {
                    currentPos &&
                    <div className='text-sm text-white flex items-center gap-2'>
                        <button className={all ? 'py-2 px-4 bg-[#272930] rounded-2xl' : 'py-2 px-4 bg-[#151619] hover:bg-[#1c1e22] rounded-2xl text-[#D6E1FF99] hover:text-white'} onClick={() => setAll(true)}>All</button>
                        <button className={!all ? 'py-2 px-4 bg-[#272930] rounded-2xl' : 'py-2 px-4 bg-[#151619] hover:bg-[#1c1e22] hover:text-white rounded-2xl text-[#D6E1FF99]'} onClick={() => setAll(false)}>Redeemable Only</button>
                    </div>
                }
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <Image src={welcome} alt='welcome' className='mt-8' width={108} height={108} />
                        <p className='mt-2.5 text-base text-white'>Welcome! Connect to continue</p>
                        <button className='text-base text-white py-4 px-8 mt-6 font-bold bg-[#C2D2FF26] rounded-lg hover:bg-[#eef3ff26]' onClick={() => setShowModal(true)}>Connect Wallet</button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Position