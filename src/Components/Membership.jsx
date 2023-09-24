import React from 'react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Divider, Image } from '@chakra-ui/react'
import tree from '../assets/images/satellite-tree.svg'
import Slot from './Slot'

function Membership({ setShowModal }) {
    return (
        <div>
            <div style={{ background: '#15161980', backdropFilter: 'blur(16px)' }} className='py-8 px-10'>
                <div className='text-2xl font-semibold text-[#F68629]'>
                    Membership Program
                </div>
                <div className='text-base text-white mt-2 flex items-center justify-between'>
                    <p>
                        Join our membership for exclusive rewards and bring your friends along!
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
            <div className='px-10 pt-6 pb-16 bg-[#08080A]'>
                <div className='flex items-center justify-start gap-2 text-base text-[#EBF0FFBF] cursor-pointer'>
                    <ArrowBackIcon />
                    <p>Back to your page</p>
                </div>


                <div className='w-full max-w-2xl mx-auto mt-8 bg-[#151619] rounded-lg text-white p-6'>
                    <p className='text-base font-bold'>A member's benefits</p>
                    <div className='mt-6 flex gap-5'>
                        <div>
                            <p className='text-xl'>Get ~33% additional SP</p>
                            <p className='text-sm text-[#D6E1FF99]'>from your referees</p>
                        </div>
                        <div style={{ height: '45px' }}>
                            <Divider orientation="vertical" style={{ opacity: '0.6', borderStyle: 'solid', borderColor: '#c2d2ff26', borderWidth: '0px 0px 0px 1px', borderImage: 'inherit' }} />
                        </div>
                        <div>
                            <p className='text-xl'>Get ~33% additional SP</p>
                            <p className='text-sm text-[#D6E1FF99]'>from your referees</p>
                        </div>
                    </div>
                    <div className='mt-11 flex items-center gap-8'>
                        <button className='text-base text-white py-4 px-8 font-bold bg-[#C2D2FF26] rounded-lg hover:bg-[#3b72ff26]' style={{ background: 'linear-gradient(90deg, rgba(245, 133, 34, 0.25) 0%, rgba(255, 143, 147, 0.25) 100%)' }} onClick={() => setShowModal(true)}>Connect Wallet</button>
                        <div>
                            <p className='flex items-center gap-2 text-sm text-[#ebf0ffbf] cursor-pointer'>Find your referrer in the community
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 10.6667H2C1.63333 10.6667 1.33333 10.3667 1.33333 10V2C1.33333 1.63333 1.63333 1.33333 2 1.33333H5.33333C5.7 1.33333 6 1.03333 6 0.666667C6 0.3 5.7 0 5.33333 0H1.33333C0.593333 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V6.66667C12 6.3 11.7 6 11.3333 6C10.9667 6 10.6667 6.3 10.6667 6.66667V10C10.6667 10.3667 10.3667 10.6667 10 10.6667ZM7.33333 0.666667C7.33333 1.03333 7.63333 1.33333 8 1.33333H9.72667L3.64 7.42C3.38 7.68 3.38 8.1 3.64 8.36C3.9 8.62 4.32 8.62 4.58 8.36L10.6667 2.27333V4C10.6667 4.36667 10.9667 4.66667 11.3333 4.66667C11.7 4.66667 12 4.36667 12 4V0.666667C12 0.3 11.7 0 11.3333 0H8C7.63333 0 7.33333 0.3 7.33333 0.666667Z" fill="currentColor" fillOpacity="0.6"></path></svg>
                            </p>
                        </div>
                    </div>
                </div>

                <Image src={tree} alt='tree' className='mt-1 mx-auto' />

                <div className='p-6 rounded-lg bg-[#151619] mx-auto flex flex-col lg:flex-row items-center gap-4' style={{ maxWidth: '980px' }}>
                    <Slot />
                    <Slot />
                    <Slot />
                </div>

                <div className='mt-12'>
                    <p className='text-xl text-white mb-8 font-bold'>FAQS</p>
                    <ol className='list-decimal' style={{ maxWidth: '880px' }}>
                        <li className='pb-8 text-sm text-[#EBF0FFBF]'>
                            How do I enroll in the Membership Program?
                            <p className='pt-2 text-[#D6E1FF99]'>
                                To start as a beginner, obtain a unique invite code for registration. Ask friends or join to find someone who can refer you!</p>
                        </li>
                        <li className='pb-8 text-sm text-[#EBF0FFBF]'>
                            What should I do as a referrer?
                            <p className='pt-2 text-[#D6E1FF99]'>You are allowed to generate up to three invitation codes, and for each friend who invests, you will receive 1/3rd of the SP.</p>
                        </li>
                        <li className='pb-8 text-sm text-[#EBF0FFBF]'>
                            What steps should I take to maximize my returns after enrolling in the Membership Program?
                            <p className='pt-2 text-[#D6E1FF99]'>You are now eligible to earn additional CYCL APR. Additionally, by inviting friends, you can reap benefits from their investments.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Membership