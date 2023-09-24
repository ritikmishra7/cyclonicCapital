import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Image,
    Divider,
} from '@chakra-ui/react'
import {
    ChevronUpIcon,
    ChevronDownIcon,
} from '@chakra-ui/icons'
import React, { useState } from 'react'
import logo from '../assets/images/logo2.png'
import eth from '../assets/images/eth.svg'
import usdt from '../assets/images/usdt.svg'
import wbtc from '../assets/images/wbtc.svg'
import BoostingCard from './BoostingCard'


function Boosting() {
    const options = [
        {
            name: 'CYCL',
            icon: logo,
        },
        {
            name: 'ETH',
            icon: eth,
        },
        {
            name: 'WBTC',
            icon: wbtc,
        },
        {
            name: 'USDT',
            icon: usdt,
        }
    ];

    const orderedBy = [
        "Weight",
        "Your Votes",
        "Airdrop APR"
    ]

    const boostingCardData = [
        {
            rank: '1',
            logo1: logo,
            name1: 'CYCL',
            logo2: usdt,
            name2: 'USDT',
            weight: '45.69%',
        },
        {
            rank: '2',
            logo1: eth,
            name1: 'ETH',
            logo2: usdt,
            name2: 'USDT',
            weight: '35.51%'
        },
        {
            rank: '3',
            logo1: wbtc,
            name1: 'WBTC',
            logo2: usdt,
            name2: 'USDT',
            weight: '18.80%'
        }
    ]

    const [selectedCoin, setSelectedCoin] = useState(options[0]);
    const [ordered, setOrdered] = useState(orderedBy[0]);
    return (
        <div>
            <div style={{ background: '#15161980', backdropFilter: 'blur(16px)' }} className='py-8 px-10'>
                <div className='text-2xl font-semibold text-[#4CD4C4]'>
                    Boosting
                </div>
                <div className='text-base text-white mt-2 flex items-center justify-between'>
                    <p>
                        Boost dual investment rewards by voting sCYCL
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
                <div className='mb-9'>
                    <div className='flex justify-center'>
                        <p className='py-2 px-8 text-white text-lg font-bold cursor-pointer' style={{ borderBottom: '4px solid #4CD4C4' }}>Boost</p>
                        <p className='py-2 px-8 text-[#D6E1FF99] text-lg font-bold cursor-pointer'>Bonus</p>
                    </div>
                    <div className='w-full h-1 -translate-y-1' style={{ background: 'linear-gradient(90deg, rgba(73, 214, 190, 0.25) 0%, rgba(100, 195, 250, 0.25) 100%)' }}>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex gap-6 items-end'>
                        <p className='text-xl text-white font-bold'>Portfolio</p>
                        <p className='text-sm text-[#D6E1FF99]'>Your sCYCL status</p>
                    </div>
                    <div className='mt-6 bg-[#151619] rounded-lg py-4 px-5 flex'>
                        <div style={{ width: '100px', height: '100px' }} className='bg-[#272930] rounded-full flex justify-center items-center'>
                            <div className='bg-[#151619] rounded-full' style={{ width: '50px', height: '50px' }}></div>
                        </div>
                        <div className='flex flex-col items-start p-3'>
                            <p className='text-base text-[#D6E1FF99] font-bold mb-3.5'>Total Owned</p>
                            <p className='text-base text-[#D6E1FF99] font-bold'>0</p>
                            <p className='text-sm text-[#D6E1FF99]'>sCYCL</p>
                        </div>
                        <div className='flex items-center gap-4' style={{ flexGrow: '2' }}>
                            <div className='p-3 bg-[#1C1E22] rounded-lg w-full'>
                                <div className='flex justify-between items-center mb-3.5'>
                                    <p className='text-base text-[#D6E1FF99]'>Balance</p>
                                    <p className='py-1 px-2.5 text-[#08080A] bg-[#49D6BE] text-xs rounded-xl'>-%</p>
                                </div>
                                <p className='text-base text-white font-semibold'>0</p>
                                <p className='text-sm text-[#D6E1FF99]'>sCYCL</p>
                            </div>
                            <div className='p-3 bg-[#1C1E22] rounded-lg w-full'>
                                <div className='flex justify-between items-center mb-3.5'>
                                    <p className='text-base text-[#D6E1FF99]'>Boosted</p>
                                    <p className='py-1 px-2.5 text-[#08080A] bg-[#C2F07D] text-xs rounded-xl'>-%</p>
                                </div>
                                <p className='text-base text-white font-semibold'>0</p>
                                <p className='text-sm text-[#D6E1FF99]'>sCYCL</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 flex flex-col gap-4'>
                        <p className='text-xl text-white font-bold'>Pools</p>
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <div className='text-base text-white bg-[#272930] w-fit py-2 px-4' style={{ borderRadius: '18px' }}>
                                    All
                                </div>
                                <div className='text-base text-[#D6E1FF99] cursor-pointer hover:text-white   bg-[#272930] w-fit py-2 px-4 flex items-center' style={{ borderRadius: '18px' }}>
                                    <span>Boosted</span>
                                    <svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            d="M6.84401 14.6668C6.54083 14.6668 6.30695 14.4372 6.35026 14.1779L7.12987 9.48164H4.09808C3.33581 9.48164 3.81223 8.92609 3.82955 8.90387C4.92099 7.25202 6.55816 4.80757 8.72372 1.54831C8.81034 1.41498 8.98358 1.3335 9.15683 1.3335C9.46001 1.3335 9.69389 1.56313 9.65058 1.82239L8.87098 6.51868H11.9114C12.2579 6.51868 12.4485 6.65942 12.2579 7.00757C9.40803 11.2594 7.75355 13.7409 7.27712 14.452C7.1905 14.5853 7.02592 14.6668 6.84401 14.6668Z"
                                            fill="currentColor"
                                        />
                                    </svg>

                                </div>
                                <div className='text-base text-[#D6E1FF99] cursor-pointer hover:text-white bg-[#272930] w-fit py-2 px-4 flex items-center gap-1' style={{ borderRadius: '18px' }}>
                                    <span>Claimable</span>
                                    <svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.47066 2.77083C3.97198 1.77347 4.69722 0.600006 5.8123 0.600006H10.1877C11.3028 0.600006 12.0281 1.77347 11.5294 2.77083L10.8602 4.1092C10.7424 4.34469 10.582 4.55004 10.3909 4.71774C12.1664 5.37158 13.6347 6.73983 14.3897 8.55179L14.6516 9.18048C15.878 12.1237 13.7155 15.3675 10.527 15.3675H5.47301C2.28448 15.3675 0.122007 12.1237 1.34837 9.18048L1.61032 8.55179C2.36531 6.73982 3.8336 5.37156 5.60913 4.71774C5.41806 4.55003 5.25759 4.34469 5.13984 4.1092L4.47066 2.77083ZM8.0003 6.13786V6.92753C6.21628 6.92753 4.76996 8.34163 4.76996 10.0861C4.76996 11.8304 6.21628 13.2446 8.0003 13.2446V12.455C9.78439 12.455 11.2306 11.0409 11.2306 9.29647C11.2307 7.55203 9.78446 6.13786 8.0003 6.13786ZM8.0003 12.1898C6.58902 12.1898 5.44489 11.0712 5.44489 9.6912C5.44489 8.31122 6.58902 7.19265 8.0003 7.19265C9.41158 7.19265 10.5557 8.31129 10.5557 9.69127C10.5557 11.0713 9.41165 12.1898 8.0003 12.1898ZM8.0003 10.8219C8.62472 10.8219 9.13092 10.3157 9.13092 9.69124C9.13092 9.06681 8.62472 8.56062 8.0003 8.56062C7.37588 8.56062 6.86968 9.06681 6.86968 9.69124C6.86968 10.3157 7.37588 10.8219 8.0003 10.8219Z"
                                            fill="currentColor"
                                            fillOpacity="0.6"
                                        />
                                    </svg>

                                </div>
                                <div style={{ height: '40px' }}>
                                    <Divider orientation="vertical" style={{ opacity: '0.6', borderStyle: 'solid', borderColor: '#c2d2ff26', borderWidth: '0px 0px 0px 1px', borderImage: 'inherit' }} />
                                </div>
                                <Menu boundary={'scrollParent'}>
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} color={'white'} backgroundColor={'#1C1E22'} padding={'16'} borderRadius={'8px'} width={'240px'}>
                                                {
                                                    <div className='flex items-center gap-2'>
                                                        <Image src={selectedCoin.icon} height={20} />
                                                        <p>{selectedCoin.name}</p>
                                                    </div>
                                                }
                                            </MenuButton>
                                            <MenuList color={'white'} backgroundColor={'#1C1E22'} borderRadius={'8px'} width={'240px'} paddingX={'8px'} paddingY={'8px'}>
                                                {
                                                    options.map((option, index) => {
                                                        return (
                                                            <MenuItem paddingBlock={'8px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => setSelectedCoin(option)} key={index}>
                                                                <Image src={option.icon} height={20} />
                                                                <span className='ml-2 text-base'>{option.name}</span>
                                                            </MenuItem>
                                                        )
                                                    })
                                                }
                                            </MenuList>
                                        </>
                                    )}
                                </Menu>
                            </div>
                            <div className='flex items-center'>
                                <p>Ordered By</p>
                                <Menu boundary={'scrollParent'}>
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} color={'white'} backgroundColor={'#1C1E22'} paddingBlock={'8px'} paddingInline={'16px'} borderRadius={'8px'} width={'160px'}>
                                                {
                                                    <div className='flex items-center mr'>
                                                        <p>{ordered}</p>
                                                    </div>
                                                }
                                            </MenuButton>
                                            <MenuList color={'white'} backgroundColor={'#1C1E22'} borderRadius={'8px'} width={'240px'} paddingX={'8px'} paddingY={'8px'}>
                                                {
                                                    orderedBy.map((option, index) => {
                                                        return (
                                                            <MenuItem paddingBlock={'8px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => setOrdered(option)} key={index}>
                                                                <span className='ml-2 text-base'>{option}</span>
                                                            </MenuItem>
                                                        )
                                                    })
                                                }
                                            </MenuList>
                                        </>
                                    )}
                                </Menu>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 flex-wrap lg:flex-nowrap'>
                            {
                                boostingCardData.map((data, index) => {
                                    return (
                                        <BoostingCard key={index} rank={data.rank} logo1={data.logo1} name1={data.name1} logo2={data.logo2} name2={data.name2} weight={data.weight} />
                                    )
                                })
                            }
                        </div>
                        <div className='pt-20'>
                            <p className='text-xl text-white mb-8 font-bold'>FAQS</p>
                            <ol className='list-decimal' style={{ maxWidth: '880px' }}>
                                <li className='pb-8 text-sm text-[#EBF0FFBF]'>
                                    How can I utilize sCYCL to enhance my bonus rewards?
                                    <p className='pt-2 text-[#D6E1FF99]'>
                                        By voting with sCYCL, you can enhance the yield boost multiplier in the pool, reaching up to a 2.5x maximum.</p>
                                </li>
                                <li className='pb-8 text-sm text-[#EBF0FFBF]'>
                                    How does gauge weight function, and in what manner does it impact the yields?
                                    <p className='pt-2 text-[#D6E1FF99]'>The gauge weight of a pool is influenced by its aggregate votes and multiplier, and it determines the total yield of SP generated.</p>
                                </li>
                                <li className='pb-8 text-sm text-[#EBF0FFBF]'>
                                    What do the terms balance, boosted, and pending signify in my voting portfolio?
                                    <p className='pt-2 text-[#D6E1FF99]'>As you cast your votes, you'll observe the balance and boosted categories. Upon withdrawing your votes, sCYCL won't be immediately credited to you, this is indicated under the pending section.</p>
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Boosting