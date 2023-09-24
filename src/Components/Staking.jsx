import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo2.png'
import welcome from '../assets/images/welcome.svg'
import { Divider, Image, Input } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { format, addYears, addMonths, differenceInDays } from 'date-fns'

function Staking({ setShowModal }) {

    const [duration, setDuration] = useState('4Y')
    const selectedDuration = 'py-2 px-4 text-base text-white flex justify-center items-center bg-[#353943] cursor-pointer'
    const notSelectedDuration = 'py-2 px-4 text-base text-white flex justify-center items-center bg-[#1C1E22] cursor-pointer'

    // eslint-disable-next-line
    const [todayDate, setTodayDate] = useState(new Date());
    const [dates, setDates] = useState({
        fourYearsLater: '',
        twoYearsLater: '',
        oneYearLater: '',
        sixMonthsLater: '',
        threeMonthsLater: '',
    });

    useEffect(() => {
        const fourYearsLaterDate = addYears(todayDate, 4);
        const twoYearsLaterDate = addYears(todayDate, 2);
        const oneYearLaterDate = addYears(todayDate, 1);
        const sixMonthsLaterDate = addMonths(todayDate, 6);
        const threeMonthsLaterDate = addMonths(todayDate, 3);

        setDates({
            fourYearsLater: {
                date: format(fourYearsLaterDate, 'yyyy-MM-dd'),
                daysDiff: differenceInDays(fourYearsLaterDate, todayDate),
            },
            twoYearsLater: {
                date: format(twoYearsLaterDate, 'yyyy-MM-dd'),
                daysDiff: differenceInDays(twoYearsLaterDate, todayDate),
            },
            oneYearLater: {
                date: format(oneYearLaterDate, 'yyyy-MM-dd'),
                daysDiff: differenceInDays(oneYearLaterDate, todayDate),
            },
            sixMonthsLater: {
                date: format(sixMonthsLaterDate, 'yyyy-MM-dd'),
                daysDiff: differenceInDays(sixMonthsLaterDate, todayDate),
            },
            threeMonthsLater: {
                date: format(threeMonthsLaterDate, 'yyyy-MM-dd'),
                daysDiff: differenceInDays(threeMonthsLaterDate, todayDate),
            },
        });
    }, [todayDate]);

    const getTimeLeft = () => {
        switch (duration) {
            case '4Y':
                return `${dates.fourYearsLater.date} (${dates.fourYearsLater.daysDiff} days)`
            case '2Y':
                return `${dates.twoYearsLater.date} (${dates.twoYearsLater.daysDiff} days)`
            case '1Y':
                return `${dates.oneYearLater.date} (${dates.oneYearLater.daysDiff} days)`
            case '6M':
                return `${dates.sixMonthsLater.date} (${dates.sixMonthsLater.daysDiff} days)`
            case '3M':
                return `${dates.threeMonthsLater.date} (${dates.threeMonthsLater.daysDiff} days)`
            default:
                return `${dates.fourYearsLater.date} (${dates.fourYearsLater.daysDiff} days)`
        }
    }


    return (
        <div>
            <div style={{ background: '#15161980', backdropFilter: 'blur(16px)' }} className='py-8 px-10'>
                <div className='text-2xl font-semibold text-[#4CD4C4]'>
                    Staking
                </div>
                <div className='text-base text-white mt-2 flex items-center justify-between'>
                    <p>
                        Use sCYCL to participate governance and boosting
                    </p>
                    <div className='flex justify-start items-start gap-4'>
                        <div className='flex items-center gap-2 cursor-not-allowed text-[#ebf0ffbf]'>
                            <p>Watch Tutorial</p>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 10.6667H2C1.63333 10.6667 1.33333 10.3667 1.33333 10V2C1.33333 1.63333 1.63333 1.33333 2 1.33333H5.33333C5.7 1.33333 6 1.03333 6 0.666667C6 0.3 5.7 0 5.33333 0H1.33333C0.593333 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V6.66667C12 6.3 11.7 6 11.3333 6C10.9667 6 10.6667 6.3 10.6667 6.66667V10C10.6667 10.3667 10.3667 10.6667 10 10.6667ZM7.33333 0.666667C7.33333 1.03333 7.63333 1.33333 8 1.33333H9.72667L3.64 7.42C3.38 7.68 3.38 8.1 3.64 8.36C3.9 8.62 4.32 8.62 4.58 8.36L10.6667 2.27333V4C10.6667 4.36667 10.9667 4.66667 11.3333 4.66667C11.7 4.66667 12 4.36667 12 4V0.666667C12 0.3 11.7 0 11.3333 0H8C7.63333 0 7.33333 0.3 7.33333 0.666667Z" fill="currentColor" fillOpacity="0.6"></path></svg>
                        </div>
                        <div className='flex items-center gap-4 cursor-not-allowed text-[#ebf0ffbf]'>
                            <p>Learn More</p>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 10.6667H2C1.63333 10.6667 1.33333 10.3667 1.33333 10V2C1.33333 1.63333 1.63333 1.33333 2 1.33333H5.33333C5.7 1.33333 6 1.03333 6 0.666667C6 0.3 5.7 0 5.33333 0H1.33333C0.593333 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V6.66667C12 6.3 11.7 6 11.3333 6C10.9667 6 10.6667 6.3 10.6667 6.66667V10C10.6667 10.3667 10.3667 10.6667 10 10.6667ZM7.33333 0.666667C7.33333 1.03333 7.63333 1.33333 8 1.33333H9.72667L3.64 7.42C3.38 7.68 3.38 8.1 3.64 8.36C3.9 8.62 4.32 8.62 4.58 8.36L10.6667 2.27333V4C10.6667 4.36667 10.9667 4.66667 11.3333 4.66667C11.7 4.66667 12 4.36667 12 4V0.666667C12 0.3 11.7 0 11.3333 0H8C7.63333 0 7.33333 0.3 7.33333 0.666667Z" fill="currentColor" fillOpacity="0.6"></path></svg>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-6'>

                </div>
            </div>
            <div className='bg-[#08080A] p-10'>
                <div className='bg-[#151619] rounded-lg h-24 flex items-center justify-start' style={{ maxWidth: '1120px' }}>
                    <div className='p-6'>
                        <div className='flex items-center justify-start gap-2 mb-1'>
                            <Image src={logo} alt='logo' height={16} />
                            <p className='text-sm text-[#D6E1FF99]'>Your CYCL Stacked</p>
                        </div>
                        <p className='text-xl text-white'>0 CYCL</p>
                    </div>
                    <div style={{ height: '48px' }}>
                        <Divider orientation="vertical" style={{ opacity: '0.6', borderStyle: 'solid', borderColor: '#c2d2ff26', borderWidth: '0px 0px 0px 1px', borderImage: 'inherit' }} />
                    </div>
                    <div className='p-6'>
                        <div className='flex items-center justify-start gap-2 mb-1'>
                            <Image src={logo} alt='logo' height={16} />
                            <p className='text-sm text-[#D6E1FF99]'>sCYCL Balance in Wallet</p>
                        </div>
                        <p className='text-xl text-white'>0 sCYCL</p>
                    </div>
                    <div style={{ height: '48px' }}>
                        <Divider orientation="vertical" style={{ opacity: '0.6', borderStyle: 'solid', borderColor: '#c2d2ff26', borderWidth: '0px 0px 0px 1px', borderImage: 'inherit' }} />
                    </div>
                    <div className='p-6'>
                        <div className='flex items-center justify-start gap-2 mb-1'>
                            <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="css-3o0h5k"
                            >
                                <rect width={16} height={16} rx={8} fill="url(#paint0_linear_4948_26269)" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.52 3.36V7.36396C12.0656 7.48594 12.4 7.63406 12.4 7.79089C12.4 8.19169 10.4288 8.52278 7.99998 8.52278C5.57118 8.52278 3.59998 8.19169 3.59998 7.79089C3.59998 7.63406 3.93438 7.48594 4.47998 7.37268V3.36C4.47998 3.00654 4.76651 2.72 5.11998 2.72H10.88C11.2334 2.72 11.52 3.00654 11.52 3.36ZM8.35197 6.7802L9.91838 4.50614C10.1296 4.2099 10.0504 3.8004 9.75118 3.60871C9.44318 3.40832 9.03838 3.48673 8.82717 3.78297L7.64798 5.49941L7.01438 5.03763C6.71518 4.8198 6.31038 4.88951 6.09038 5.17703C5.87918 5.46456 5.94078 5.86535 6.23118 6.08317L7.41038 6.94574C7.52478 7.03287 7.66558 7.07644 7.80638 7.07644C7.84158 7.07644 7.87678 7.07644 7.91198 7.05901C8.08798 7.03287 8.24638 6.92832 8.35197 6.7802Z"
                                    fill="#08080A"
                                />
                                <path
                                    d="M12.4 12.64V8.92356C12.4 9.32435 10.4288 9.64673 7.99998 9.64673C5.57118 9.64673 3.59998 9.32435 3.59998 8.92356V12.64C3.59998 12.9935 3.88651 13.28 4.23998 13.28H11.76C12.1134 13.28 12.4 12.9935 12.4 12.64Z"
                                    fill="#08080A"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_4948_26269"
                                        x1="-2.98023e-8"
                                        y1={8}
                                        x2={16}
                                        y2={8}
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#08BD9F" />
                                        <stop offset={1} stopColor="#2DA2E5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className='text-sm text-[#D6E1FF99]'>Your Voting Power</p>
                        </div>
                        <p className='text-xl text-white'>0 CYCL</p>
                    </div>
                </div>

                <div className='mt-6 px-4 pt-4 pb-6 bg-[#151619] rounded-lg flex gap-4' style={{ maxWidth: '1120px' }}>
                    <div className='w-80'>
                        <div>
                            <p className='ml-2 mb-3 text-base text-[#D6E1FF99] font-bold'>Staking Amount</p>
                            <div className='p-4 rounded-lg bg-[#1c1e22] w-full'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2 w-full'>
                                        <Image src={logo} alt='logo' height={'24px'} />
                                        <Input placeholder='0.0' type='number' variant={'unstyled'} bg={'inherit'} border={'none'} outline={'none'} className=' w-full text-2xl font-semibold' _placeholder={{ color: 'gray.500' }} color={'#D6E1FF99'} />
                                    </div>
                                    <p className='text-xl text-[#D6E1FF99] font-bold'>CYCL</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm text-[#D6E1FF99]'>~$0</p>
                                    <p className='text-sm text-[#D6E1FF99] hover:text-white cursor-pointer'>Balance: 0</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='mt-8 mb-3 text-base text-[#D6E1FF99] font-bold'>Lock Duration</p>

                            <div className='flex bg-[#1C1E22] w-fit mb-4' style={{ borderRadius: '18px' }}>
                                <div className={duration === '4Y' ? selectedDuration : notSelectedDuration} style={{ borderRadius: '18px', height: '38px', width: '51.5px' }} onClick={() => setDuration('4Y')}>
                                    4Y
                                </div>
                                <div className={duration === '2Y' ? selectedDuration : notSelectedDuration} style={{ borderRadius: '18px', height: '38px', width: '51.5px' }} onClick={() => setDuration('2Y')}>
                                    2Y
                                </div>
                                <div className={duration === '1Y' ? selectedDuration : notSelectedDuration} style={{ borderRadius: '18px', height: '38px', width: '51.5px' }} onClick={() => setDuration('1Y')}>
                                    1Y
                                </div>
                                <div className={duration === '6M' ? selectedDuration : notSelectedDuration} style={{ borderRadius: '18px', height: '38px', width: '51.5px' }} onClick={() => setDuration('6M')}>
                                    6M
                                </div>
                                <div className={duration === '3M' ? selectedDuration : notSelectedDuration} style={{ borderRadius: '18px', height: '38px', width: '51.5px' }} onClick={() => setDuration('3M')}>
                                    3M
                                </div>
                            </div>
                            <p className='text-white text-base'>Until <span className='font-bold'>{getTimeLeft()}</span></p>
                        </div>
                        <div className='mt-8 mb-12 flex flex-col gap-5'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm text-[#D6E1FF99] font-bold'>Obtain</p>
                                <div className='flex items-center gap-2'>
                                    <Image src={logo} alt='logo' height={'24px'} />
                                    <p className='text-xl text-white'>0 sCYCL</p>
                                    <div className='flex items-center px-1 py-3 cursor-pointer opacity-60 bg-[#1c1e22] text-[#d6e1ff99] w-12 h-3 rounded-lg'>
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 8.66665H8.66668V12C8.66668 12.3666 8.36668 12.6666 8.00001 12.6666C7.63334 12.6666 7.33334 12.3666 7.33334 12V8.66665H4.00001C3.63334 8.66665 3.33334 8.36665 3.33334 7.99998C3.33334 7.63331 3.63334 7.33331 4.00001 7.33331H7.33334V3.99998C7.33334 3.63331 7.63334 3.33331 8.00001 3.33331C8.36668 3.33331 8.66668 3.63331 8.66668 3.99998V7.33331H12C12.3667 7.33331 12.6667 7.63331 12.6667 7.99998C12.6667 8.36665 12.3667 8.66665 12 8.66665Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2 4.33331C2 3.22874 2.89543 2.33331 4 2.33331H10.6667C11.403 2.33331 12 2.93027 12 3.66665H4.66667C4.29848 3.66665 4 3.96512 4 4.33331V4.99998H12.3333C13.0697 4.99998 13.6667 5.59693 13.6667 6.33331V12.3333C13.6667 13.0697 13.0697 13.6666 12.3333 13.6666H3.33333C2.59695 13.6666 2 13.0697 2 12.3333V4.33331ZM8.33333 9.33331C8.33333 8.59693 8.93029 7.99998 9.66667 7.99998H12.3333V10.6666H9.66667C8.93029 10.6666 8.33333 10.0697 8.33333 9.33331Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className='mt-8 text-sm text-[#D6E1FF99] font-bold flex gap-2'>
                                <span>Voting Power 0</span>
                                <span><ArrowForwardIcon width={20} height={20} /></span>
                                <span className='text-white'>0</span>
                            </p>
                        </div>
                        <button className='text-base text-white py-4 px-8 font-bold bg-[#C2D2FF26] rounded-lg hover:bg-[#eef3ff26]' onClick={() => setShowModal(true)}>Connect Wallet</button>
                    </div>
                    <div style={{ height: '535px' }}>
                        <Divider orientation="vertical" style={{ opacity: '0.6', borderStyle: 'solid', borderColor: '#c2d2ff26', borderWidth: '0px 0px 0px 1px', borderImage: 'inherit' }} />
                    </div>
                    <div className='my-auto w-2/3 flex flex-col justify-center items-center'>
                        <Image src={welcome} alt='welcome' height={'120'} width={120} className='mb-6' />
                        <p className='text-lg text-white font-semibold'>Welcome! Connect to continue</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staking