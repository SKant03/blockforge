import React from 'react'
import Marquee from 'react-fast-marquee'
import bank1 from "../../assets/bank1.jpg"
import bank2 from "../../assets/bank2.jpg"
import bank3 from "../../assets/bank3.jpg"
import bank4 from "../../assets/bank4.jpg"
import bank5 from "../../assets/bank5.jpg"
import bank6 from "../../assets/bank6.jpg"

const Bank = () => {
    return (
        <div className='w-full h-{50rem} p-5  flex flex-col justify-center items-center bg-blue-100 text-neutral-950'>
            <div className='w-[50%] flex flex-col'>
                <div className='flex space-y-2 flex-col text-center mb-14'>
                    <span className='text-5xl font-bold'>
                        Partner Banks and Key Stakeholders </span>
                    <span className='text-2xl'>
                        Various Ministries, Nodal Agencies and Lenders came together on a single
                        Platform to ensure fast, smooth and secure subsidy availing process for
                        beneficieries.
                    </span>


                </div>
                <Marquee autoFill pauseOnClick direction='left'>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank1} alt="" />
                    </div>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank2} alt="" />
                    </div>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank3} alt="" />
                    </div>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank4} alt="" />
                    </div>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank5} alt="" />
                    </div>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank6} alt="" />
                    </div>
                </Marquee>
                <Marquee autofill pauseOnClick direction='right'>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank6} alt="" />
                    </div>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank5} alt="" />
                    </div>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank4} alt="" />
                    </div>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank3} alt="" />
                    </div>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank2} alt="" />
                    </div>
                    <div className=' bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
                        <img className='h-12 w-13' src={bank1} alt="" />
                    </div>

                </Marquee>

            </div>

        </div>
    )
}

export default Bank