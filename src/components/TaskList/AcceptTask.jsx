import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data.taskTitle)
  return (
    <div className='shrink-0 w-[300px] h-full bg-red-300 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
            <h4 className='text-sm'> {data.taskDate}</h4>
        </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}
            </p>
            <div className='flex justify-between mt-4 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
      </div>

  )
}

export default AcceptTask
