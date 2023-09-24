import React from 'react'
import logo from '../assets/images/logo.jpg';
import arrowDown from '../assets/images/downarrow.svg'
import { useNavigate } from 'react-router-dom';


function DashboardNavbar({ setShowModal }) {

    const navigate = useNavigate()
    return (
        <div className='border-navborder1'>
            <div className='flex justify-between items-center h-12 px-5 bg-[#151619D9] text-white border-b-2 border-navborder2 py-2'>
                <div className='flex items-center cursor-pointer' onClick={() => navigate('/')}>
                    <img src={logo} alt="logo" width={40} />
                    <p>Cyclonic Capital</p>
                </div>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <img src={logo} alt="logo" width={40} />
                        <p>CYLC 0</p>
                        <img src={arrowDown} alt="arrow" />
                    </div>
                    <button className='rounded-lg text-sm px-4 py-2 mr-2 bg-[#C2D2FF26] font-semibold hover:bg-[#eef3ff26]' onClick={() => setShowModal(true)}>
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardNavbar