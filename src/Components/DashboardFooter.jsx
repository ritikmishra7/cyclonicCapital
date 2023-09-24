import React from 'react'
import logo from '../assets/images/logo.jpg'

function DashboardFooter() {
    return (
        <div style={{ background: '#15161980', backdropFilter: 'blur(16px)', borderTop: '1px solid #C2D2FF26a' }} className='pt-10 pr-20 pl-11 pb-16 flex flex-col justify-center items-center '>
            <div className='flex items-center text-white'>
                <img src={logo} alt="logo" className="logo" />
                <p className="logo-text">CYCLONIC CAPITAL</p>
            </div>
            <div className="flex items-center text-white gap-2">
                <a href="#socialss" className='hover:text-slate-300'>
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 1200 1227"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
                <a href="#socialss" className='hover:text-slate-300'>
                    <svg
                        width="45px"
                        height="45px"
                        viewBox="-20 0 190 190"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="telegram-logo"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M76.33 132.14L62.5 143.73L58.59 144.26L49.84 114.11L19.06 104L113.82 67.8799L118.29 67.9799L103.36 149.19L76.33 132.14ZM100.03 83.1399L56.61 109.17L61.61 130.5L62.98 130.19L68.2 113.73L102.9 83.4799L100.03 83.1399Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
                <a href="#socialss" className='hover:text-slate-300'>
                    <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="medium-logo"
                    >
                        <path
                            d="M13 12C13 15.3137 10.3137 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C10.3137 6 13 8.68629 13 12Z"
                            fill="currentColor"
                        />
                        <path
                            d="M23 12C23 14.7614 22.5523 17 22 17C21.4477 17 21 14.7614 21 12C21 9.23858 21.4477 7 22 7C22.5523 7 23 9.23858 23 12Z"
                            fill="currentColor"
                        />
                        <path
                            d="M17 18C18.6569 18 20 15.3137 20 12C20 8.68629 18.6569 6 17 6C15.3431 6 14 8.68629 14 12C14 15.3137 15.3431 18 17 18Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default DashboardFooter