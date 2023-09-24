import React, { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Invest.css'
import QuickMode from './QuickMode';

function Invest({ setShowModal }) {


    const [activeTab, setActiveTab] = useState(0);
    return (

        <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(0)}>
            <div>
                <div style={{ background: '#15161980', backdropFilter: 'blur(16px)' }} className='py-8 px-10'>
                    <div className='text-2xl font-semibold text-[#5D83FA]'>
                        Dual Investment
                    </div>
                    <div className='text-base text-white mt-2'>
                        Gain stable returns irrespective of market fluctuations
                    </div>
                    <div className='flex justify-between items-center mt-6'>
                        <TabList>
                            <Tab>Quick Mode</Tab>
                            <Tab>Pro Mode</Tab>
                        </TabList>
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
                </div>
                <div className='p-10 bg-black'>
                    <TabPanel>
                        <QuickMode setShowModal={setShowModal} />
                    </TabPanel>
                    <TabPanel>
                        <></>
                    </TabPanel>
                </div>
            </div>
        </Tabs>
    )
}

export default Invest