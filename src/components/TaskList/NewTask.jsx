import React from 'react'

export default function CompleteTask({task}) {
  return (
    <div className='bg-yellow-400 h-[30vh] w-[30%] rounded-xl flex-shrink-0  max-lg:h-[150px] max-lg:w-[150px] p-3 overflow-y-auto Scroll max-sm:w-full max-sm:rounded-none'>
    <div className="flex justify-between ">
        <h1 className='bg-red-500 p-1 rounded-md '>{task.category}</h1>
        <p>{task.taskDate}</p>
    </div>
    <div className='mt-3 '>
        <h1 className='text-4xl'>{task.taskTitle}</h1>
        <p>{task.taskDescription}</p>
    </div>
    <div>
        <button  className='bg-yellow-500 py-1 px-2 text-sm w-full'>
            Accept Task
        </button>
    </div>
</div>
  )
}
