import React, { useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Image,
    Input,
} from '@chakra-ui/react'
import logo from '../assets/images/logo2.png'
import eth from '../assets/images/eth.svg'
import usdt from '../assets/images/usdt.svg'
import {
    SettingsIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    ArrowDownIcon
} from '@chakra-ui/icons'

function Swap({ setShowModal }) {

    const options = [
        {
            name: 'CYCL',
            logo: logo,
        },
        {
            name: 'ETH',
            logo: eth,
        },
        {
            name: 'USDT',
            logo: usdt,
        }
    ];

    const [fromCoin, setFromCoin] = useState(options[0]);
    const [toOptions, setToOptions] = useState(options.filter(option => option !== fromCoin));
    const [toCoin, setToCoin] = useState(toOptions[0]);

    const handleFromChange = (option) => {
        setFromCoin(option);
        setToOptions(options.filter(opt => opt !== option));
        setToCoin(options.filter(opt => opt !== option)[0]);
    }

    const handleToChange = (option) => {
        setToCoin(option);
    }

    const handleswap = () => {
        const temp = fromCoin;
        setFromCoin(toCoin);
        setToCoin(temp);
    }


    return (
        <div>
            <div style={{ background: '#15161980', backdropFilter: 'blur(16px)' }} className='py-8 px-10'>
                <div className='text-2xl font-semibold text-[#5D83FA]'>
                    DEX
                </div>
                <div className='text-base text-white mt-2 flex items-center justify-between'>
                    <p>
                        Purchase cryptocurrency using your existing assets
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
            <div className='dex-wrapper'>
                <div className='p-10 flex justify-center items-center'>
                    <div className='p-6 bg-[#151619] rounded-lg flex flex-col gap-4 md:w-3/4 lg:w-1/3 items-center' style={{ width: '400px', boxSizing: 'content-box' }}>
                        <div className='flex justify-between items-center w-full'>
                            <div className='text-sm text-[#D6E1FF99]'>Swap</div>
                            <SettingsIcon color={'#D6E1FF99'} className='cursor-pointer' />
                        </div>
                        <Menu boundary={'scrollParent'}>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} color={'white'} backgroundColor={'#1C1E22'} padding={'16'} borderRadius={'8px'} width={'100%'}>
                                        {
                                            <div className='flex items-center'>
                                                <Image src={fromCoin.logo} alt='logo' width={'20px'} />
                                                <span className='ml-2 text-base'>{fromCoin.name}</span>
                                            </div>
                                        }
                                    </MenuButton>
                                    <MenuList color={'white'} backgroundColor={'#1C1E22'} borderRadius={'8px'} width={'400px'} paddingX={'8px'} paddingY={'8px'}>
                                        {
                                            options.map((option, index) => (
                                                <MenuItem paddingBlock={'8px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => handleFromChange(option)} key={index}>
                                                    <Image src={option.logo} alt='logo' width={'20px'} />
                                                    <span className='ml-2 text-base'>{option.name}</span>
                                                </MenuItem>
                                            ))
                                        }
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                        <div className='p-4 rounded-lg bg-[#272930] w-full'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <Input placeholder='0.0' size={'md'} type='number' variant={'unstyled'} bg={'inherit'} border={'none'} outline={'none'} className='py-4 text-2xl font-semibold' _placeholder={{ color: 'gray.500' }} color={'#D6E1FF99'} />
                                </div>
                                <p className='text-xl text-[#D6E1FF99] font-bold'>{fromCoin.name}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-sm text-[#D6E1FF99]'>~$0</p>
                                <p className='text-sm text-[#D6E1FF99] hover:text-white cursor-pointer'>Balance: 0</p>
                            </div>
                        </div>
                        <ArrowDownIcon width={18} height={18} color={'#e2e8f0'} className='cursor-pointer' onClick={handleswap} />
                        <Menu boundary={'scrollParent'}>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} color={'white'} backgroundColor={'#1C1E22'} padding={'16'} borderRadius={'8px'} width={'100%'}>
                                        {
                                            <div className='flex items-center mr'>
                                                <Image src={toCoin.logo} alt='logo' width={'20px'} />
                                                <span className='ml-2 text-base'>{toCoin.name}</span>
                                            </div>
                                        }
                                    </MenuButton>
                                    <MenuList color={'white'} backgroundColor={'#1C1E22'} borderRadius={'8px'} width={'400px'} paddingX={'8px'} paddingY={'8px'}>
                                        {
                                            toOptions.map((option, index) => {
                                                return (
                                                    <MenuItem paddingBlock={'8px'} paddingInline={'8px'} _hover={{ bgColor: '#31343b' }} borderRadius={'8px'} onClick={() => handleToChange(option)} key={index}>
                                                        <Image src={option.logo} alt='logo' width={'20px'} />
                                                        <span className='ml-2 text-base'>{option.name}</span>
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                        <div className='p-4 rounded-lg bg-[#151619] w-full' style={{ border: '4px solid #1c1e22' }}>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <Input placeholder='0.0' size={'md'} type='number' variant={'unstyled'} bg={'inherit'} border={'none'} outline={'none'} className='py-4 text-2xl font-semibold cursor-not-allowed' _placeholder={{ color: 'gray.500' }} color={'#D6E1FF99'} disabled />
                                </div>
                                <p className='text-xl text-[#D6E1FF99] font-bold'>{toCoin.name}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-sm text-[#D6E1FF99]'>~$0</p>
                                <p className='text-sm text-[#D6E1FF99] hover:text-white cursor-pointer'>Balance: 0</p>
                            </div>
                        </div>
                        <div className=' rounded-lg font-medium text-sm bg-[#1c1e22] flex flex-col items-start w-full'>
                            <div className='w-full  text-[#EBF0FFBF] p-4' style={{ borderBottom: '1px solid #c2d2ff26' }}>
                                -
                            </div>
                            <div className='p-4 text-[#D6E1FF99]'>
                                Price Impact: 0%
                            </div>
                        </div>
                        <button className='text-base text-white py-4 px-8 font-bold bg-[#C2D2FF26] rounded-lg hover:bg-[#eef3ff26] w-full' onClick={() => setShowModal(true)}>Connect Wallet</button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Swap