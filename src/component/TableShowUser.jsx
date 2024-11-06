import React from 'react'
import { useState } from 'react';

const TableShowUser = ({ showTable , adminShowTable}) => {

    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);

    //set state สำหรับเก็บข้อมูล    
    const [valueTable, setvalueTable] = useState({
        name: "",
        lastName: "",
        position: ""
    });

    //set state สำหรับเก็บข้อมูลที่ทำการแก้ไข
    const [formTask, setFormTask] = useState({
        name: "",
        lastName: "",
        position: "" 
    });    

    //เก็บค่าที่แก้ไขไปไว้ใน valueTable
    const valueTableChange = (e) => {
        setvalueTable({
            ...valueTable,
            [e.target.name]:e.target.value
        })
    }

    //เพิ่มข้อมูลเข้าตาราง
    const createUserTask = () => {
        const id = Date.now();
        const newTask = {...valueTable,id}
        setTasks([...tasks, newTask]);
    };

    //แก้ไขข้อมูลในตาราง
    const handleEditClick = (task) => {
        setEditTask(task.id);
        setFormTask({ name: task.name, lastName: task.lastName, position: task.position });
    };

    //รับค่าที่เปลี่ยนแปลงจากการกด edit
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormTask(prev => ({ ...prev, [name]: value }));
    };

    //save ค่าที่ต้องการใส่เข้า tasks
    const handleSave = (id) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, ...formTask } : task)));
        setEditTask(null);
    };

    //ลบข้อมูลในตาราง
    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    };

    return (
    <>
            {showTable && (
                <table className='border-2 border-solid border-black mt-20 w-[600px]'>
                    <thead className='bg-[#b8bedd] text-black'>
                        <tr className='h-10'>
                            <th className='w-[200px] border-solid border-2 border-black'>Name</th>
                            <th className='w-[200px] border-solid border-2 border-black'>Lastname</th>
                            <th className='w-[200px] border-solid border-2 border-black'>Position</th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#ffffff]'>
                        {tasks.map(task => (
                        <tr key={task.id} className='h-8 hover:bg-[#dddddd]'>
                            <td className='text-center'>{task.name}</td>
                            <td className='text-center'>{task.lastName}</td>
                            <td className='text-center'>{task.position}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                )}


            {adminShowTable && (
            <>
                <div className='text-xl font-bold mt-10'>
                    <h1 className='text-[#231942]'>Create User Here</h1>
                </div>
                <div className='flex justify-evenly w-full h-14 px-20 mt-5'>
                    <input
                        name = "name"
                        onChange={valueTableChange}
                        placeholder='Name'
                        className='w-[25%] rounded-md text-center drop-shadow-sm hover:bg-gray-300 border-2 border-[#5e548e]'
                    />
                    <input
                        name = "lastName"
                        onChange={valueTableChange}
                        placeholder='Last Name'
                        className='w-[25%] rounded-md text-center drop-shadow-sm hover:bg-gray-300 border-2 border-[#5e548e]'
                    />
                    <input
                        name = "position"
                        onChange={valueTableChange}
                        placeholder='Position'
                        className='w-[25%] rounded-md text-center drop-shadow-sm hover:bg-gray-300 border-2 border-[#5e548e]'
                    />
                    <button 
                        onClick={createUserTask}
                        className='w-[10%] bg-[#5e548e] text-white drop-shadow-xl hover:bg-[#231942] rounded-md'>Save</button>
                </div>
                <table className='border-2 border-[#231942]/50 mt-20 w-[800px]'>
                    <thead className='bg-[#b8bedd] text-black'>
                        <tr className='h-10'>
                            <th className='w-[200px] border-solid border-2 border-[#231942]'>Name</th>
                            <th className='w-[200px] border-solid border-2 border-[#231942]'>Lastname</th>
                            <th className='w-[200px] border-solid border-2 border-[#231942]'>Position</th>
                            <th className='w-[200px] border-solid border-2 border-[#231942]'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#ffffff]'>
                        {tasks.map(task => (
                        <tr key={task.id} className='h-8 hover:bg-[#dddddd]'>
                            <td className='text-center border-2 border-[#231942]/50'>
                                {editTask === task.id ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={formTask.name}
                                        onChange={handleInputChange}
                                        className='border rounded px-2 w-[180px]'
                                    />
                                ) : (
                                    task.name
                                )}
                            </td>
                            <td className='text-center border-2 border-[#231942]/50'>
                                {editTask === task.id ? (
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formTask.lastName}
                                        onChange={handleInputChange}
                                        className='border rounded px-2 w-[180px]'
                                    />
                                ) : (
                                    task.lastName
                                )}
                            </td>
                            <td className='text-center border-2 border-[#231942]/50'>
                                {editTask === task.id ? (
                                    <input
                                        type="text"
                                        name="position"
                                        value={formTask.position}
                                        onChange={handleInputChange}
                                        className='border rounded px-2 w-[180px]'
                                    />
                                ) : (
                                    task.position
                                )}
                            </td>
                            <td className='text-center flex justify-between px-12 '>
                                {editTask === task.id ? (
                                    <button onClick={() => handleSave(task.id)} className='text-green-600 cursor-pointer'>Save</button>
                                ) : (
                                    <p onClick={() => handleEditClick(task)} className='text-blue-600 cursor-pointer'>Edit</p>
                                )}
                                <p onClick={() => deleteTask(task.id)} className='text-red-600 cursor-pointer'>Delete</p>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </>
            )}
    </>
    )
}

export default TableShowUser
