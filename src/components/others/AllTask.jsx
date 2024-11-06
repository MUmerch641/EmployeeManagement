import React from 'react'

export default function AllTask({tasks}) {
  return (
    <div className="task-preview mt-10 p-4 border rounded overflow-y-scroll Scroll h-[35vh]">
  <h2 className="text-xl font-semibold mb-2">Task Preview</h2>
  
  {/* Display each task in the array */}
  {tasks.length === 0 ? (
    <p>No tasks created yet</p>
  ) : (
    tasks.map((task, index) => (
      <div key={index} className="mb-4 p-2 border-b">
        <p><strong>Title:</strong> {task.taskTitle}</p>
        <p><strong>Date:</strong> {task.date}</p>
        <p><strong>Assign To:</strong> {task.assignTo}</p>
        <p><strong>Category:</strong> {task.category}</p>
        <p><strong>Description:</strong> {task.description}</p>
      </div>
    ))
  )}
</div>

  )
}
