import React from 'react'
import Nav from '../component/Nav'

const Owner = () => {
    return (
        <>
            <Nav />
            <div className='flex items-center flex-col bg-slate-200 h-[1000px]'>
                <div className='w-[500px] text-3xl font-bold flex justify-center items-center p-5 m-10'>
                    <h1>Ten - Group 7 - 19</h1>
                </div>
                <div className='mb-10'>
                    <img src="https://app-bkp.com/images/product/2/579_1.jpg" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center w-[800px]'>
                    <p className='font-bold'>Short Biography</p>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla nostrum unde soluta veritatis, eveniet cupiditate beatae accusamus molestias nisi expedita dolor illum esse distinctio sint repellat, minus recusandae autem.</span>
                </div>
                
            </div>
        </>
    )
}


export default Owner
