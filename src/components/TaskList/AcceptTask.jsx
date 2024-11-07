import React from 'react'

export default function AcceptTask({task}) {
  return (
    <div className='bg-green-400 h-[30vh] w-[30%] rounded-xl flex-shrink-0  max-lg:h-[200px] max-lg:w-[150px] p-3 overflow-y-auto Scroll max-sm:w-full max-sm:rounded-none max-sm:rounded-t-lg max-sm:mt-[-25px] flex flex-col justify-between max-sm:justify-start max-sm:gap-2 max-sm:p-4'>
          <div className="flex justify-between ">
        <h1 className='bg-red-500 p-1 rounded-md '>{task.category}</h1>
        <p>{task.taskDate}</p>
    </div>
    <div className='mt-3 '>
        <h1 className='text-4xl'>{task.taskTitle }</h1>
        <p>{task.taskDescription}</p>
    </div>
    <div className=' flex  items-end  justify-between'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as complete</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
</div>
  )
}
