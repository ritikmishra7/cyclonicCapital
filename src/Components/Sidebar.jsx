import React, { useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {

    const location = useLocation();
    const navigate = useNavigate();
    const [path, setPath] = useState(location.pathname.split('/')[2]);

    useEffect(() => {
        setPath(location.pathname.split('/')[2]);
    }, [location]);



    const thumbStyle = {
        backgroundColor: '#8890A4',
        borderRadius: '8px',
    };

    return (
        <div className='fixed w-60 mr-4 bg-[#151619d9]' style={{ height: '100vh' }}>
            <Scrollbars
                renderThumbVertical={({ style }) => <div style={{ ...style, ...thumbStyle }} />}
            >
                <div className='flex flex-col pt-6 gap-6'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs text-[#D6E1FF99] font-bold pl-5'>Dual Investment</p>
                        <button className={path === 'invest' ? 'bg-[#08080abf] py-2 w-56 rounded-e-lg mr-2' : 'py-2 w-56 rounded-e-lg mr-2'} onClick={() => navigate('/dashboard/invest')}>
                            <div className={path === 'invest' ? 'flex items-center text-white border-l-4 border-solid border-blue-500' : 'flex items-center text-[#EBF0FFBF] hover:text-white'}>
                                <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.9442 20.2744C12.425 20.3344 12 19.9026 12 19.3769L12 4.6231C12 4.0974 12.425 3.66563 12.9442 3.72558C13.7073 3.81369 14.4561 4.00837 15.1686 4.30523C16.1732 4.72379 17.0859 5.33728 17.8548 6.11068C18.6237 6.88408 19.2336 7.80223 19.6497 8.81272C20.0658 9.82322 20.28 10.9063 20.28 12C20.28 13.0937 20.0658 14.1768 19.6497 15.1873C19.2336 16.1978 18.6237 17.1159 17.8548 17.8893C17.0859 18.6627 16.1732 19.2762 15.1686 19.6948C14.4561 19.9916 13.7073 20.1863 12.9442 20.2744Z" fill="currentColor"></path><path d="M7.97836 19.2821C8.41713 19.5278 8.92454 19.1857 8.92454 18.6806V5.31941C8.92454 4.81428 8.41713 4.4722 7.97836 4.7179C5.43832 6.14027 3.71997 8.86828 3.71997 12C3.71997 15.1317 5.43832 17.8597 7.97836 19.2821Z" fill="currentColor"></path></svg>
                                </div>
                                <p className='text-base'>Invest</p>
                            </div>
                        </button>
                        <button className={path === 'position' ? 'bg-[#08080abf] py-2 w-56 rounded-e-lg mr-2' : 'py-2 w-56 rounded-e-lg mr-2'} onClick={() => navigate('/dashboard/position')}>
                            <div className={path === 'position' ? 'flex items-center text-white border-l-4 border-solid border-blue-500' : 'flex items-center text-[#EBF0FFBF] hover:text-white'}>
                                <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.11862 3.60001C7.54684 3.60001 6.00923 4.42081 5.16639 5.88001C3.91353 8.05741 4.66525 10.8504 6.84068 12.1044C7.55823 12.5148 8.34412 12.72 9.11862 12.72C10.6904 12.72 12.228 11.8992 13.0708 10.44C14.3237 8.26261 13.5834 5.46961 11.4079 4.20421C10.679 3.79381 9.89312 3.60001 9.11862 3.60001Z" fill="currentColor"></path><path d="M16.7991 11.4C16.1874 11.4 15.5758 11.556 15.0001 11.88C13.285 12.876 12.6853 15.072 13.6808 16.8C14.3524 17.952 15.5518 18.6 16.7991 18.6C17.4108 18.6 18.0225 18.444 18.5982 18.12C20.3133 17.124 20.913 14.928 19.9175 13.2C19.2458 12.048 18.0465 11.4 16.7991 11.4Z" fill="currentColor"></path><path d="M6.3683 16.26C6.87983 15.3768 7.80612 14.88 8.76006 14.88C9.23012 14.88 9.714 15.0042 10.1426 15.2526C11.456 16.0116 11.9122 17.6952 11.1518 19.02C10.6403 19.9032 9.714 20.4 8.76006 20.4C8.29 20.4 7.80612 20.2758 7.37754 20.0274C6.06414 19.2684 5.60791 17.5848 6.3683 16.26Z" fill="currentColor"></path></svg>
                                </div>
                                <p className='text-base'>Position</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <p className='text-xs text-[#D6E1FF99] font-bold pl-5'>DEX</p>
                        <button className={path === 'swap' ? 'bg-[#08080abf] py-2 w-56 rounded-e-lg mr-2' : 'py-2 w-56 rounded-e-lg mr-2'} onClick={() => navigate('/dashboard/swap')}>
                            <div className={path === 'swap' ? 'flex items-center text-white border-l-4 border-solid border-blue-500' : 'flex items-center text-[#EBF0FFBF] hover:text-white'}>
                                <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.91698 3.37479C2.9068 3.11788 3.11787 2.90686 3.37484 2.91704L9.3862 3.15522C9.7702 3.17043 9.95215 3.63542 9.6804 3.9071L9.18355 4.40384C9.01142 4.57592 9.01142 4.85492 9.18355 5.02701L10.8986 6.74163C11.0707 6.91372 11.0707 7.19272 10.8986 7.3648L7.36643 10.8961C7.19431 11.0682 6.91524 11.0682 6.74311 10.8961L5.02807 9.18147C4.85594 9.00938 4.57687 9.00938 4.40475 9.18147L3.90728 9.67881C3.63553 9.95049 3.17043 9.76859 3.15521 9.38468L2.91698 3.37479Z" fill="currentColor"></path><path d="M17.0829 16.6253C17.0931 16.8822 16.882 17.0932 16.6251 17.083L10.6137 16.8448C10.2297 16.8296 10.0478 16.3646 10.3195 16.0929L10.8164 15.5962C10.9885 15.4241 10.9885 15.1451 10.8164 14.973L9.10133 13.2584C8.92921 13.0863 8.92921 12.8073 9.10133 12.6352L12.6335 9.10395C12.8056 8.93186 13.0847 8.93186 13.2568 9.10395L14.9718 10.8186C15.144 10.9907 15.423 10.9907 15.5952 10.8186L16.0926 10.3212C16.3644 10.0495 16.8295 10.2314 16.8447 10.6154L17.0829 16.6253Z" fill="currentCOlor"></path></svg>
                                </div>
                                <p className='text-base'>Swap</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <p className='text-xs text-[#D6E1FF99] font-bold pl-5'>Membership Program</p>
                        <button className={path === 'membership' ? 'bg-[#08080abf] py-2 w-56 rounded-e-lg mr-2' : 'py-2 w-56 rounded-e-lg mr-2'} onClick={() => navigate('/dashboard/membership')}>
                            <div className={path === 'membership' ? 'flex items-center text-white border-l-4 border-solid border-blue-500' : 'flex items-center text-[#EBF0FFBF] hover:text-white'}>
                                <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.2469 13.2887C18.1737 12.67 16.8835 12.7792 15.955 13.4707L13.2058 11.8815V8.69094C14.2669 8.21781 15.0145 7.16238 15.0145 5.91285C15.0145 4.23872 13.664 2.88 12 2.88C10.336 2.88 8.98549 4.23872 8.98549 5.91285C8.98549 7.15025 9.73308 8.21781 10.7942 8.69094V11.8815L8.04496 13.4828C7.10443 12.7913 5.82628 12.67 4.75312 13.3009C3.30616 14.1379 2.81178 15.9819 3.64378 17.4377C4.47579 18.8934 6.32066 19.3908 7.76762 18.5538C8.84079 17.9351 9.3834 16.7462 9.25076 15.5937L12 13.9802L14.7492 15.5816C14.6166 16.7462 15.1592 17.9229 16.2324 18.5416C17.6793 19.3787 19.5121 18.8813 20.3562 17.4255C21.1882 15.9819 20.6938 14.1379 19.2469 13.2887Z" fill="currentColor"></path></svg>
                                </div>
                                <p className='text-base'>Membership</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <p className='text-xs text-[#D6E1FF99] font-bold pl-5'>Prime Rewards</p>
                        <button className='py-2 w-56 rounded-e-lg mr-2 text-[#C2D2FF4D] cursor-not-allowed'>
                            <div className='flex items-center'>
                                <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.565 5.44643C16.2801 3.14911 12.4264 2.9805 8.97281 5.0249C8.47793 5.31997 8.30947 5.9628 8.60429 6.45809C8.89911 6.96392 9.55192 7.12199 10.0468 6.82692C12.6475 5.28835 15.4694 5.33051 17.0698 6.9323C18.5334 8.3971 18.6808 10.8946 17.5015 13.3184L16.4688 12.2848C16.3176 12.1335 16.059 12.2406 16.059 12.4544V15.6099C16.059 15.875 16.2739 16.0899 16.539 16.0899H19.6917C19.9054 16.0899 20.0125 15.8315 19.8614 15.6803L19.0704 14.8886C21.0078 11.4742 20.8182 7.70159 18.565 5.44643Z" fill="currentColor"></path><path d="M11.9859 9.32764C11.5315 9.32764 11.0637 9.44794 10.6494 9.68855C9.36633 10.4237 8.93864 12.0545 9.67373 13.3377C10.1683 14.1932 11.0637 14.6744 11.9859 14.6744C12.4404 14.6744 12.8948 14.5541 13.3225 14.3135C14.6056 13.5783 15.0332 11.9342 14.2982 10.6643C13.8036 9.80885 12.9082 9.32764 11.9859 9.32764Z" fill="currentColor"></path><path d="M6.93013 17.0594C8.53058 18.6612 11.3524 18.7034 13.9532 17.1648C14.448 16.8697 15.1008 17.0384 15.3851 17.5336C15.68 18.0395 15.522 18.6823 15.0166 18.9774C13.4162 19.9258 11.721 20.4 10.1416 20.4C8.33052 20.4 6.65637 19.7783 5.43497 18.5558C3.18171 16.3007 2.99218 12.528 4.92957 9.12422L4.13001 8.30995C3.98094 8.15814 4.08849 7.9018 4.30125 7.9018H7.46094C7.72604 7.9018 7.94094 8.1167 7.94094 8.3818V11.5373C7.94094 11.7512 7.68232 11.8582 7.53116 11.7069L6.49843 10.6733C5.31915 13.0971 5.46656 15.5946 6.93013 17.0594Z" fill="currentColor"></path></svg>
                                </div>
                                <div className='flex flex-col justify-start'>
                                    <p className='text-base text-left'>Claim</p>
                                    <p className='text-xs text-left'>Swap SP to DYSN</p>
                                </div>
                            </div>
                        </button>
                        <button className={path === 'staking' ? 'bg-[#08080abf] py-2 w-56 rounded-e-lg mr-2' : 'py-2 w-56 rounded-e-lg mr-2'} onClick={() => navigate('/dashboard/staking')}>
                            <div className={path === 'staking' ? 'flex items-center text-white border-l-4 border-solid border-blue-500' : 'flex items-center text-[#EBF0FFBF] hover:text-white'}>
                                <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 10.7387C17.472 10.0749 17.472 9.41108 17.472 8.61448C17.472 0.648525 6.52803 0.648525 6.52803 8.61448C6.52803 9.41108 6.52803 10.0749 6.52803 10.7387C5.57043 11.8009 5.16003 13.2613 5.16003 14.7217C5.16003 18.4392 8.16963 21.36 12 21.36C15.8304 21.36 18.84 18.4392 18.84 14.7217C18.84 13.2613 18.2928 11.8009 17.472 10.7387ZM9.26403 8.61448C9.26403 6.2247 10.7688 5.29533 12 5.29533C13.2312 5.29533 14.736 6.2247 14.736 8.61448C13.9152 8.21619 12.9576 8.08342 12 8.08342C11.0424 8.08342 10.0848 8.21619 9.26403 8.61448ZM12 18.4392V11.4026C13.9152 11.4026 15.9672 12.9958 15.9672 14.8545C15.9672 16.846 13.9152 18.4392 12 18.4392Z" fill="currentColor"></path></svg>
                                </div>
                                <div className='flex flex-col justify-start'>
                                    <p className='text-base text-left'>Staking</p>
                                    <p className='text-xs text-left text-[#D6E1FF99]'>Stake CYCL to get sCYCL</p>
                                </div>
                            </div>
                        </button>
                        <button className={path === 'boosting' ? 'bg-[#08080abf] py-2 w-56 rounded-e-lg mr-2' : 'py-2 w-56 rounded-e-lg mr-2'} onClick={() => navigate('/dashboard/boosting')}>
                            <div className={path === 'boosting' ? 'flex items-center text-white border-l-4 border-solid border-blue-500' : 'flex items-center text-[#EBF0FFBF] hover:text-white'}>
                                <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.67603 8.71578C5.67603 5.1955 8.57884 2.39999 12 2.39999C15.4212 2.39999 18.2204 5.1955 18.324 8.71578C18.324 12.236 15.4212 15.0316 12 15.0316C8.47517 15.0316 5.67603 12.1325 5.67603 8.71578Z" fill="currentColor"></path><path d="M8.20563 16.5473C8.20563 15.8497 7.63936 15.2842 6.94083 15.2842C6.2423 15.2842 5.67603 15.8497 5.67603 16.5473V18.3158C5.67603 19.0134 6.2423 19.5789 6.94083 19.5789C7.63936 19.5789 8.20563 19.0134 8.20563 18.3158V16.5473Z" fill="currentColor"></path><path d="M18.324 16.5473C18.324 15.8497 17.7578 15.2842 17.0592 15.2842C16.3607 15.2842 15.7944 15.8497 15.7944 16.5473V18.3158C15.7944 19.0134 16.3607 19.5789 17.0592 19.5789C17.7578 19.5789 18.324 19.0134 18.324 18.3158V16.5473Z" fill="currentColor"></path><path d="M12 17.3053C12.6986 17.3053 13.2648 17.8708 13.2648 18.5684V20.3368C13.2648 21.0345 12.6986 21.6 12 21.6C11.3015 21.6 10.7352 21.0345 10.7352 20.3368V18.5684C10.7352 17.8708 11.3015 17.3053 12 17.3053Z" fill="currentColor"></path></svg>
                                </div>
                                <div className='flex flex-col justify-start'>
                                    <p className='text-base text-left'>Boosting</p>
                                    <p className='text-xs text-left text-[#D6E1FF99]'>Stake sCYCL to boost yields</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div>
                        <p className='text-xs text-[#D6E1FF99] font-bold pl-5'>GOV</p>
                        <button className='flex items-center w-full py-2 text-[#C2D2FF4D] cursor-not-allowed' >
                            <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.20002 4.2C5.7582 4.2 5.40002 4.55817 5.40002 5V19C5.40002 19.4418 5.7582 19.8 6.20002 19.8H17.8C18.2419 19.8 18.6 19.4418 18.6 19V5C18.6 4.55817 18.2419 4.2 17.8 4.2H6.20002ZM16.18 17.85H7.82002C7.21502 17.85 6.72002 17.3486 6.72002 16.7357C6.72002 16.1229 7.21502 15.6214 7.82002 15.6214H16.18C16.785 15.6214 17.28 16.1229 17.28 16.7357C17.28 17.3486 16.785 17.85 16.18 17.85ZM6.72002 11.1643C6.72002 10.5514 7.21502 10.05 7.82002 10.05H14.86C15.465 10.05 15.96 10.5514 15.96 11.1643C15.96 11.7771 15.465 12.2786 14.86 12.2786H7.82002C7.21502 12.2786 6.72002 11.7771 6.72002 11.1643ZM16.18 8.37857H7.82002C7.21502 8.37857 6.72002 7.87714 6.72002 7.26428C6.72002 6.65143 7.21502 6.15 7.82002 6.15H16.18C16.785 6.15 17.28 6.65143 17.28 7.26428C17.28 7.87714 16.785 8.37857 16.18 8.37857Z" fill="currentColor"></path></svg>
                            </div>
                            <p className='text-base'>Governance</p>
                        </button>
                        <button className='flex items-center w-full py-2 text-[#C2D2FF4D] cursor-not-allowed'>
                            <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.11862 3.60001C7.54684 3.60001 6.00923 4.42081 5.16639 5.88001C3.91353 8.05741 4.66525 10.8504 6.84068 12.1044C7.55823 12.5148 8.34412 12.72 9.11862 12.72C10.6904 12.72 12.228 11.8992 13.0708 10.44C14.3237 8.26261 13.5834 5.46961 11.4079 4.20421C10.679 3.79381 9.89312 3.60001 9.11862 3.60001Z" fill="currentColor"></path><path d="M16.7991 11.4C16.1874 11.4 15.5758 11.556 15.0001 11.88C13.285 12.876 12.6853 15.072 13.6808 16.8C14.3524 17.952 15.5518 18.6 16.7991 18.6C17.4108 18.6 18.0225 18.444 18.5982 18.12C20.3133 17.124 20.913 14.928 19.9175 13.2C19.2458 12.048 18.0465 11.4 16.7991 11.4Z" fill="currentColor"></path><path d="M6.3683 16.26C6.87983 15.3768 7.80612 14.88 8.76006 14.88C9.23012 14.88 9.714 15.0042 10.1426 15.2526C11.456 16.0116 11.9122 17.6952 11.1518 19.02C10.6403 19.9032 9.714 20.4 8.76006 20.4C8.29 20.4 7.80612 20.2758 7.37754 20.0274C6.06414 19.2684 5.60791 17.5848 6.3683 16.26Z" fill="currentColor"></path></svg>
                            </div>
                            <p className='text-base'>Forum</p>
                        </button>
                    </div>
                    <div>
                        <p className='text-xs text-[#D6E1FF99] font-bold pl-5'>Learn More</p>
                        <button className='flex items-center w-56 py-2 text-[#EBF0FFBF] hover:text-white justify-between'>
                            <div className='flex items-center'>
                                <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.20002 4.2C5.7582 4.2 5.40002 4.55817 5.40002 5V19C5.40002 19.4418 5.7582 19.8 6.20002 19.8H17.8C18.2419 19.8 18.6 19.4418 18.6 19V5C18.6 4.55817 18.2419 4.2 17.8 4.2H6.20002ZM16.18 17.85H7.82002C7.21502 17.85 6.72002 17.3486 6.72002 16.7357C6.72002 16.1229 7.21502 15.6214 7.82002 15.6214H16.18C16.785 15.6214 17.28 16.1229 17.28 16.7357C17.28 17.3486 16.785 17.85 16.18 17.85ZM6.72002 11.1643C6.72002 10.5514 7.21502 10.05 7.82002 10.05H14.86C15.465 10.05 15.96 10.5514 15.96 11.1643C15.96 11.7771 15.465 12.2786 14.86 12.2786H7.82002C7.21502 12.2786 6.72002 11.7771 6.72002 11.1643ZM16.18 8.37857H7.82002C7.21502 8.37857 6.72002 7.87714 6.72002 7.26428C6.72002 6.65143 7.21502 6.15 7.82002 6.15H16.18C16.785 6.15 17.28 6.65143 17.28 7.26428C17.28 7.87714 16.785 8.37857 16.18 8.37857Z" fill="currentColor"></path></svg>
                                </div>
                                <p className='text-base'>Docs</p>
                            </div>
                            <div className='flex items-center'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 10.6667H2C1.63333 10.6667 1.33333 10.3667 1.33333 10V2C1.33333 1.63333 1.63333 1.33333 2 1.33333H5.33333C5.7 1.33333 6 1.03333 6 0.666667C6 0.3 5.7 0 5.33333 0H1.33333C0.593333 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V6.66667C12 6.3 11.7 6 11.3333 6C10.9667 6 10.6667 6.3 10.6667 6.66667V10C10.6667 10.3667 10.3667 10.6667 10 10.6667ZM7.33333 0.666667C7.33333 1.03333 7.63333 1.33333 8 1.33333H9.72667L3.64 7.42C3.38 7.68 3.38 8.1 3.64 8.36C3.9 8.62 4.32 8.62 4.58 8.36L10.6667 2.27333V4C10.6667 4.36667 10.9667 4.66667 11.3333 4.66667C11.7 4.66667 12 4.36667 12 4V0.666667C12 0.3 11.7 0 11.3333 0H8C7.63333 0 7.33333 0.3 7.33333 0.666667Z" fill="currentColor" fillOpacity="0.6"></path></svg>
                            </div>
                        </button>
                        <button className='flex items-center w-full py-2 text-[#C2D2FF4D] cursor-not-allowed'>
                            <div className='rounded-full mr-3 ml-5 bg-[#c2d2ff26] p-0.5'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.11862 3.60001C7.54684 3.60001 6.00923 4.42081 5.16639 5.88001C3.91353 8.05741 4.66525 10.8504 6.84068 12.1044C7.55823 12.5148 8.34412 12.72 9.11862 12.72C10.6904 12.72 12.228 11.8992 13.0708 10.44C14.3237 8.26261 13.5834 5.46961 11.4079 4.20421C10.679 3.79381 9.89312 3.60001 9.11862 3.60001Z" fill="currentColor"></path><path d="M16.7991 11.4C16.1874 11.4 15.5758 11.556 15.0001 11.88C13.285 12.876 12.6853 15.072 13.6808 16.8C14.3524 17.952 15.5518 18.6 16.7991 18.6C17.4108 18.6 18.0225 18.444 18.5982 18.12C20.3133 17.124 20.913 14.928 19.9175 13.2C19.2458 12.048 18.0465 11.4 16.7991 11.4Z" fill="currentColor"></path><path d="M6.3683 16.26C6.87983 15.3768 7.80612 14.88 8.76006 14.88C9.23012 14.88 9.714 15.0042 10.1426 15.2526C11.456 16.0116 11.9122 17.6952 11.1518 19.02C10.6403 19.9032 9.714 20.4 8.76006 20.4C8.29 20.4 7.80612 20.2758 7.37754 20.0274C6.06414 19.2684 5.60791 17.5848 6.3683 16.26Z" fill="currentColor"></path></svg>
                            </div>
                            <p className='text-base'>Tutorials</p>
                        </button>
                    </div>
                    <div className="border-t-2 border-[#c2d2ff26] flex justify-start items-center text-[#EBF0FFBF] pl-7 gap-6 mb-14 mt-4">
                        <a href="#socialss" className='hover:text-white'>
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
                        <a href="#socialss" className='hover:text-white'>
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
                        <a href="#socialss" className='hover:text-white'>
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
            </Scrollbars >
        </div >
    )
}

export default Sidebar