import React, { useEffect, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Image,
    Tooltip,
    Input,
    Divider
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon, QuestionIcon, SettingsIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import logo from '../assets/images/logo2.png'
import eth from '../assets/images/eth.svg'
import usdc from '../assets/images/usdc.svg'
import instantsp from '../assets/images/instant-sp.svg'

function QuickMode({ setShowModal }) {


    const [selectedcoins, setSelectedcoins] = useState('CYCL/USDC')
    const [selectedcoins2, setSelectedcoins2] = useState({
        coin1: {
            name: 'CYCL',
            logo: logo
        },
        coin2: {
            name: 'USDC',
            logo: usdc
        }
    })

    const [selectedcoins3, setSelectedcoins3] = useState({
        name: selectedcoins2.coin1.name,
        logo: selectedcoins2.coin1.logo
    });

    const [forDays, setForDays] = useState('1 Day')

    useEffect(() => {
        if (selectedcoins === 'CYCL/USDC') {
            setSelectedcoins2({
                coin1: {
                    name: 'CYCL',
                    logo: logo
                },
                coin2: {
                    name: 'USDC',
                    logo: usdc
                }
            })
        } else {
            setSelectedcoins2({
                coin1: {
                    name: 'ETH',
                    logo: eth
                },
                coin2: {
                    name: 'USDC',
                    logo: usdc
                }
            })
        }
    }, [selectedcoins])

    useEffect(() => {
        setSelectedcoins3({
            name: selectedcoins2.coin1.name,
            logo: selectedcoins2.coin1.logo
        })
    }, [selectedcoins2])


    return (
        <div className='bg-[#151619] px-6 py-8 rounded-lg flex items-start gap-6 w-fit'>
            <div>
                <Menu boundary={'scrollParent'}>
                    {({ isOpen }) => (
                        <>
                            <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} color={'white'} backgroundColor={'#1C1E22'} padding={'16'} borderRadius={'8px'} width={'480px'}>
                                {selectedcoins === 'CYCL/USDC' ?
                                    <div className='flex items-center mr'>
                                        <Image src={logo} alt='logo' width={'20px'} />
                                        <span className='ml-2 text-base'>CYCL</span>
                                        <span className='ml-2'>/</span>
                                        <Image src={usdc} alt='logo' width={'20px'} height={'20px'} className='mx-2' />
                                        <span className='text-base'> USDC </span>
                                    </div>
                                    :
                                    <div className='flex items-center'>
                                        <Image src={eth} alt='logo' width={'20px'} />
                                        <span className='ml-2 text-base'>ETH</span>
                                        <span className='ml-2'>/</span>
                                        <Image src={usdc} alt='logo' width={'20px'} height={'20px'} className='mx-2' />
                                        <span className='text-base'> USDC </span>
                                    </div>
                                }
                            </MenuButton>
                            <MenuList padding={'10'} color={'white'} backgroundColor={'#1C1E22'} borderRadius={'8px'} width={'460px'} paddingX={'8px'} paddingY={'8px'}>
                                <MenuItem paddingBlock={'16px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => setSelectedcoins('CYCL/USDC')}>
                                    <Image src={logo} alt='logo' width={'20px'} />
                                    <span className='ml-2 text-base'>CYCL</span>
                                    <span className='ml-2'>/</span>
                                    <Image src={usdc} alt='logo' width={'20px'} height={'20px'} className='mx-2' />
                                    <span className='text-base'> USDC </span>
                                </MenuItem>
                                <MenuItem paddingBlock={'16px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => setSelectedcoins('ETH/USDC')}>
                                    <Image src={eth} alt='logo' width={'20px'} />
                                    <span className='ml-2 text-base'>ETH</span>
                                    <span className='ml-2'>/</span>
                                    <Image src={usdc} alt='logo' width={'20px'} height={'20px'} className='mx-2' />
                                    <span className='text-base'> USDC </span>
                                </MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
                <div className='mt-11'>
                    <p className='text-base text-[#5DC887] font-bold mb-1'>Total APR</p>
                    <p className='text-[#5DC887]' style={{ fontSize: '40px' }}>535.12%</p>
                    <div className='flex items-center gap-1'>
                        <div className='text-[#5DC887] text-xs py-1.5 px-3 rounded-lg' style={{ lineHeight: '16px', boxShadow: 'rgba(93, 200, 135, 0.5) 0px 0px 8px inset' }} >
                            535.12% Premium APR
                        </div>
                        <div className='text-[#e2e8f0]'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 8.66665H8.66668V12C8.66668 12.3666 8.36668 12.6666 8.00001 12.6666C7.63334 12.6666 7.33334 12.3666 7.33334 12V8.66665H4.00001C3.63334 8.66665 3.33334 8.36665 3.33334 7.99998C3.33334 7.63331 3.63334 7.33331 4.00001 7.33331H7.33334V3.99998C7.33334 3.63331 7.63334 3.33331 8.00001 3.33331C8.36668 3.33331 8.66668 3.63331 8.66668 3.99998V7.33331H12C12.3667 7.33331 12.6667 7.63331 12.6667 7.99998C12.6667 8.36665 12.3667 8.66665 12 8.66665Z" fill="currentColor"></path></svg>
                        </div>
                        <p className='text-xs py-1.5 px-3 text-[#C2D2FF4D] font-semibold'>0% CYCL APR</p>
                        <Tooltip hasArrow label='Total APR is the sum of the investment return (premium APR) and member only rewards (CYCL APR)' bg='#31343b' color='white' width={200} fontSize={'12px'} padding={'10px'}>
                            <QuestionIcon color='#d6e1ff99' width={14} height={14} className='cursor-pointer' />
                        </Tooltip>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-10 mb-5'>
                    <p className='text-base text-[#EBF0FFBF] font-bold'>Invest</p>
                    <Menu boundary={'scrollParent'}>
                        {({ isOpen }) => (
                            <>
                                <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} color={'white'} backgroundColor={'#1C1E22'} padding={'16'} borderRadius={'8px'} width={'125px'}>
                                    <div className='flex items-center'>
                                        <Image src={selectedcoins3.logo} alt='logo' width={'20px'} />
                                        <span className='ml-2 text-base'>{selectedcoins3.name}</span>
                                    </div>
                                </MenuButton>
                                <MenuList padding={'10'} color={'white'} backgroundColor={'#1C1E22'} borderRadius={'8px'} width={'120px'} paddingX={'8px'} paddingY={'8px'}>
                                    <MenuItem paddingBlock={'16px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => setSelectedcoins3({
                                        name: selectedcoins2.coin1.name,
                                        logo: selectedcoins2.coin1.logo
                                    })}>
                                        <Image src={selectedcoins2.coin1.logo} alt='logo' width={'20px'} />
                                        <span className='ml-2 text-base'>{selectedcoins2.coin1.name}</span>
                                    </MenuItem>
                                    <MenuItem paddingBlock={'16px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => setSelectedcoins3({
                                        name: selectedcoins2.coin2.name,
                                        logo: selectedcoins2.coin2.logo
                                    })}>
                                        <Image src={selectedcoins2.coin2.logo} alt='logo' width={'20px'} />
                                        <span className='ml-2 text-base'>{selectedcoins2.coin2.name}</span>
                                    </MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                    <p className='text-base text-[#EBF0FFBF] font-bold'>For</p>
                    <Menu boundary={'scrollParent'}>
                        {({ isOpen }) => (
                            <>
                                <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} color={'white'} backgroundColor={'#1C1E22'} padding={'16'} borderRadius={'8px'} width={'125px'}>
                                    {forDays}
                                </MenuButton>
                                <MenuList padding={'10'} color={'white'} backgroundColor={'#1C1E22'} borderRadius={'8px'} width={'120px'} paddingX={'8px'} paddingY={'8px'}>
                                    <MenuItem paddingBlock={'16px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => setForDays('1 Day')}>
                                        <p className='text-base'>1 Day</p>
                                    </MenuItem>
                                    <MenuItem paddingBlock={'16px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => setForDays('30 Days')}>
                                        <p className='text-base'>3 Days</p>
                                    </MenuItem>
                                    <MenuItem paddingBlock={'16px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => setForDays('7 Days')}>
                                        <p className='text-base'>7 Days</p>
                                    </MenuItem>
                                    <MenuItem paddingBlock={'16px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => setForDays('30 Days')}>
                                        <p className='text-base'>30 Days</p>
                                    </MenuItem>

                                </MenuList>
                            </>
                        )}
                    </Menu>
                </div>
                <div className='flex items-center mt-6 mb-5 justify-between'>
                    <p className='text-base text-[#EBF0FFBF] font-bold'>Investment Amount</p>
                    <SettingsIcon width={14} height={14} color={'#EBF0FFBF'} className='cursor-pointer' />
                </div>
                <div className='p-4 rounded-lg bg-[#1c1e22]' style={{ boxShadow: 'rgba(224, 81, 95, 0.5) 0px 0px 8px inset' }}>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <Image src={selectedcoins3.logo} alt='logo' height={'24px'} />
                            <Input placeholder='0.0' size={'md'} type='number' variant={'unstyled'} bg={'inherit'} border={'none'} outline={'none'} className='p-4 text-2xl font-semibold' _placeholder={{ color: 'gray.500' }} color={'#D6E1FF99'} />
                        </div>
                        <p className='text-xl text-[#D6E1FF99] font-bold'>{selectedcoins3.name}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-[#D6E1FF99]'>~$0</p>
                        <p className='text-sm text-[#D6E1FF99] hover:text-white cursor-pointer'>Balance: 0</p>
                    </div>
                </div>
                <button className='rounded-lg text-sm px-8 py-4 text-white w-full mt-5 bg-[#C2D2FF26] font-semibold hover:bg-[#eef3ff26]' onClick={() => setShowModal(true)}>
                    Connect Wallet
                </button>
            </div >

            <div style={{ height: '580px' }}>
                <Divider orientation="vertical" style={{ opacity: '0.6', borderStyle: 'solid', borderColor: '#c2d2ff26', borderWidth: '0px 0px 0px 1px', borderImage: 'inherit' }} />
            </div>

            <div className='flex flex-col justify-start items-center h-full bg-[#C2D2FF26] rounded-lg'>
                <div className='flex flex-col p-8' style={{ borderBottom: '1px solid #c2d2ff26' }}>
                    <div className='mb-8'>
                        <div className='flex items-center gap-2'>
                            <p className='text-base text-white'>Est. Strike Price: <span className='font-bold'>{selectedcoins === 'CYCL/USDC' ? `4.56297 ` : `565,849.13 `}</span> <span className='text-[#D6E1FF99]'>({selectedcoins})</span></p>
                            <Tooltip hasArrow label='Strike price is the price at which you contract to buy or sell a particular token' bg='#31343b' color='white' width={300} fontSize={'12px'} padding={'10px'} placement='left-start' borderRadius={'8px'}>
                                <QuestionIcon color='#d6e1ff99' width={14} height={14} className='cursor-pointer' />
                            </Tooltip>
                        </div>
                        <p className='text-xs text-[#D6E1FF99] mt-1'>Price Impact: <span className='text-[#EBF0FFBF]'>0%</span></p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <p className='text-sm text-[#D6E1FF99] font-bold'>Est. return after the maturity date</p>
                            <Tooltip hasArrow label='You can get the premium returns after the maturity and the redeemed token is determined by the market direction' bg='#31343b' color='white' width={300} fontSize={'12px'} padding={'10px'} placement='bottom' borderRadius={'8px'}>
                                <QuestionIcon color='#d6e1ff99' width={14} height={14} className='cursor-pointer' />
                            </Tooltip>
                        </div>
                    </div>
                    <div className='my-6'>
                        <div className='flex items-center justify-start'>
                            <div style={{ width: '1px', height: '54px', backgroundImage: 'linear-gradient(to top, rgba(93, 200, 135, 0.5) 0.02%, rgb(93, 200, 135) 100%)' }} className='mr-6'></div>
                            <div>
                                <p className='text-sm text-[#D6E1FF99] mb-1'>if the fair price &gt; strike price</p>
                                <p className='flex gap-2 items-center text-base text-white'>Receive <img src={usdc} alt="usdc" width={20} height={20} /><span className='font-bold'> 0 USDC</span></p>
                            </div>
                        </div>
                        <div className='flex items-center justify-start'>
                            <div style={{ width: '1px', height: '54px', backgroundImage: 'linear-gradient(to top, rgb(224, 81, 95) 0%, rgba(224, 81, 95, 0.4) 100%)' }} className='mr-6'></div>
                            <div>
                                <p className='text-sm text-[#D6E1FF99] mb-1'>if the fair price &lt; strike price</p>
                                <p className='flex gap-2 items-center text-base text-white'>Receive <img src={selectedcoins2.coin1.logo} alt="usdc" width={20} height={20} /><span className='font-bold'> 0 {selectedcoins2.coin1.name}</span></p>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm text-white'>ROI: 1.47%</p>
                </div>
                <div className='flex flex-col py-8 px-10 justify-start w-full'>
                    <div className='flex items-center gap-2 mb-4'>
                        <p className='text-sm text-[#D6E1FF99] font-bold'>Instant Rewards</p>
                        <Tooltip hasArrow label='You can instantly earn member-only SP rewards once you invest' bg='#31343b' color='white' width={300} fontSize={'12px'} padding={'10px'} placement='bottom' borderRadius={'8px'}>
                            <QuestionIcon color='#d6e1ff99' width={14} height={14} className='cursor-pointer' />
                        </Tooltip>
                    </div>

                    <div className='flex items-center gap-2 mb-10'>
                        <Image src={instantsp} alt='instantsp' width={20} height={20} />
                        <p className='text-xl text-[#C2D2FF4D]'>0 SP</p>
                    </div>
                    <div>
                        <p className='text-xs text-orange-500 membership-btn'>Membership Only</p>
                        <div className='flex  justify-between items-end'>
                            <p className='text-white text-base'>+0% CYCL APR</p>
                            <div className='flex items-center gap-2 text-base text-[#EBF0FFBF] pt-3 cursor-pointer hover:text-white'>
                                <span>Join Now</span>
                                <ArrowForwardIcon width={16} height={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default QuickMode