import React, { useEffect, useState } from 'react'
import Header from '../others/Header';
import AcceptTask from '../TaskList/AcceptTask';
import CompleteTask from '../TaskList/CompleteTask';
import FailedTask from '../TaskList/FailedTask';
import NewTask from '../TaskList/NewTask';


export default function EmployeeDashboard({ userLoggedIn,setUser }) {
console.log(userLoggedIn);

    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (

        <div className='flex justify-center items-center h-screen'>
            <div className={`h-screen min-w-full p-6 ${isExpanded && 'p-0'}`} >
                <Header setUser={setUser} userLoggedIn={userLoggedIn} />

                <div className='w-full flex gap-3 flex-wrap mt-6'>

                    <div className='bg-red-400 w-[20vw] rounded-lg flex flex-col justify-center p-4 max-lg:p-3 max-lg:w-[40vw] '>
                        <p className='text-[4vh]'>{userLoggedIn.taskCounts.newTask}</p>
                        <p>New task </p>
                    </div>
                    <div className='bg-blue-400 w-[20vw] rounded-lg flex flex-col justify-center p-4 max-lg:p-3 max-lg:w-[40vw] '>
                        <p className='text-[4vh]'>{userLoggedIn.taskCounts.completed}</p>
                        <p>Complete task</p>
                    </div>
                    <div className='bg-orange-400 w-[20vw] rounded-lg flex flex-col justify-center p-4 max-lg:p-3 max-lg:w-[40vw] '>
                        <p className='text-[4vh]'>{userLoggedIn.taskCounts.active}</p>
                        <p>Accept task</p>
                    </div>
                    <div className='bg-green-400 w-[20vw] rounded-lg flex flex-col justify-center p-4 max-lg:p-3 max-lg:w-[40vw] '>
                        <p className='text-[4vh]'>{userLoggedIn.taskCounts.failed}</p>
                        <p>Failed task</p>
                    </div>
                </div>
                <div
                    className={`max-sm:block  flex w-full gap-3 items-end h-[55%] overflow-x-auto Scroll mt-9 transition-all duration-1000 ease-in-out transform ${isExpanded ? 'max-sm:translate-y-[-50%] max-sm:z-50 max-sm:h-[100%]' : ' max-sm:z-0 max-sm:h-[55%] max-sm:overflow-hidden'}`}>
                    <div className="hidden max-sm:block transition-all duration-300 ease-in-out " onClick={handleToggle}>
                        <p>^</p>
                    </div>



                    {userLoggedIn?.tasks.map((task, index) => (
                        <>
                            {task.active && <AcceptTask task={task} data={task} />}

                            {task.completed && <CompleteTask task={task} data={task} />}

                            {task.failed && <FailedTask task={task} data={task} />}

                            {task.newTask && <NewTask task={task} data={task} />}
                        </>
                    ))}

                </div>

            </div>
        </div>

    )
}
