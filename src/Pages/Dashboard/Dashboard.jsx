import React, { useEffect } from 'react'
import DashboardNavbar from '../../Components/DashboardNavbar'
import SideBar from '../../Components/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Outlet } from 'react-router-dom'
import bg1 from '../../assets/images/dashboard-bg-1.svg'
import bg2 from '../../assets/images/dashboard-bg-2.svg'
import bg3 from '../../assets/images/dashboard-bg-3.svg'
import invbg1 from '../../assets/images/investment-bg-1.svg'
import invbg2 from '../../assets/images/investment-bg-2.svg'
import invbg3 from '../../assets/images/investment-bg-3.svg'
import stbg1 from '../../assets/images/satellite-bg-1.svg'
import stbg2 from '../../assets/images/satellite-bg-2.svg'
import stbg3 from '../../assets/images/satellite-bg-3.svg'
import './Dashboard.css'
import DashboardFooter from '../../Components/DashboardFooter'

function Dashboard({ setShowModal }) {

    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location.pathname === '/dashboard' || location.pathname === '/dashboard/') {
            navigate('/dashboard/invest')
        }
        // eslint-disable-next-line
    }, [location])

    const bgSet1 = {
        bgimg1: invbg1,
        bgimg2: invbg2,
        bgimg3: invbg3
    }

    const bgSet2 = {
        bgimg1: stbg1,
        bgimg2: stbg2,
        bgimg3: stbg3
    }

    const bgSet3 = {
        bgimg1: bg1,
        bgimg2: bg2,
        bgimg3: bg3
    }

    function getImageSet() {
        switch (location.pathname) {
            case '/dashboard':
                return bgSet1
            case '/dashboard/invest':
                return bgSet1
            case '/dashboard/position':
                return bgSet1
            case '/dashboard/swap':
                return bgSet1
            case '/dashboard/membership':
                return bgSet2
            case '/dashboard/staking':
                return bgSet3
            case '/dashboard/boosting':
                return bgSet3
            default:
                return bgSet1
        }
    }
    const thumbStyle = {
        backgroundColor: '#8890A4',
        borderRadius: '8px',
    };

    return (
        <div>
            <div className='bgWrapper'>
                <img src={getImageSet().bgimg1} alt="bg-3" className='bg-1' />
                <img src={getImageSet().bgimg2} alt="bg-2" className='bg-2' />
                <img src={getImageSet().bgimg3} alt="bg-3" className='bg-3' />
            </div>
            <DashboardNavbar setShowModal={setShowModal} />
            <SideBar />
            <div className='ml-60'>
                <div style={{ height: '93vh' }}>
                    <Scrollbars
                        renderThumbVertical={({ style }) => <div style={{ ...style, ...thumbStyle }} />}
                    >
                        <Outlet />
                        <DashboardFooter />
                    </Scrollbars>
                </div>
            </div>
        </div>
    )
}

export default Dashboard