import React, { useState } from 'react';
import Nav from '../component/Nav';
import TableShowUser from '../component/TableShowUser';


const Home = () => {
    // ตาราง user
    const [showTable, setShowTable] = useState(false);
    const toggleTable = () => {
        setShowTable(table => !table);
        setAdminShowTable(false);
    };

    // ตาราง admin
    const [adminShowTable, setAdminShowTable] = useState(false);
    const toggleAdminTable = () => {
        setAdminShowTable(table => !table);
        setShowTable(false);
    };

    return (
        <>
            <Nav />
            <div className='flex items-center flex-col bg-[#f8f1e5] h-[1000px]'>
                <div className='w-[550px] text-5xl font-bold flex flex-col justify-center items-center p-5 m-10'>
                    <h1>Generation Thailand</h1>
                    {showTable ? (<p>Home - <span className='text-[#9c89b8]'>User sector</span></p>): adminShowTable ?(<p>Home - <span className='text-[#9c89b8]'>Admin Sector</span></p>):<p>React - <span className='text-[#9c89b8]'>Assessment</span></p>}
                </div>
                <div className='w-[500px] flex justify-between font-bold'>
                    <button className='bg-[#9f86c0] text-black p-5 text-base rounded-[5px] drop-shadow-xl hover:bg-[#5e548e] hover:text-white'
                            onClick={toggleTable}>User Home Sector</button>
                    <button className='bg-[#9f86c0] text-black p-5 text-base rounded-[5px] drop-shadow-xl hover:bg-[#5e548e] hover:text-white'
                            onClick={toggleAdminTable}>Admin Home Sector</button>
                </div>

                <TableShowUser 
                showTable={showTable}
                adminShowTable = {adminShowTable}/>

            </div>
        </>
    );
}

export default Home;