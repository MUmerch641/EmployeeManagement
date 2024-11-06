import React, { useContext, useState } from 'react'
import AllTask from './AllTask';
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {
  // AuthContext
  let [userData,setuserData] = useContext(AuthContext)
  // State for each input field
  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // State to store all created tasks
  const [tasks, setTasks] = useState([]);

  // Handler for form submission
  const handleCreateTask = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      taskTitle,
      date,
      assignTo,
      category,
      description,
      failed: false,
      active: false,
      newTask: true,
      completed: false
    };

    // Add the new task to the tasks array
    setTasks((prevTasks) => [...prevTasks, newTask]);

    const data = userData.employees;
    data?.forEach(element => {
      if (assignTo == element.firstName) {
        element.tasks.push(newTask);
      }
    });
    setuserData(data)
    console.log(data);
    alert("Task Created!");
    // Clear the input fields after creating the task
    setTaskTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };
  return (
    <>
      <form onSubmit={handleCreateTask} className="space-y-4 ">
        <div className="flex justify-between max-sm:flex-col w-[100vw] max-sm:w-[100%] gap-3">
          <div className="w-[50%] max-sm:w-[100%]">
            <div>
              <label className="block text-gray-700">Task Title</label>
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className=" p-2 border rounded bg-transparent w-[100%]"
                placeholder="Enter task title"
              />
            </div>
            <div>
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className=" p-2 border rounded bg-transparent w-[100%]"
              />
            </div>
            <div>
              <label className="block text-gray-700">Assign To</label>
              <input
                type="text"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className=" p-2 border rounded bg-transparent w-[100%]"
                placeholder="Enter assignee's name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className=" p-2 border rounded bg-transparent w-[100%]"
                placeholder="Enter task category"
              />
            </div>
          </div>
          <div className="w-[50%] max-sm:w-[100%]">
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-[100%] p-2 border rounded bg-transparent"
                placeholder="Enter task description"
              />
            </div>
            {/* Create Task Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>

      {/* Task Preview */}
      <AllTask tasks={tasks} />
      {/* All employees */}
      <div>

        {
          userData?.employees?.map((e) => {
            return <div className='flex w-full justify-around'>
              <p>{e.firstName}</p>
              <p>Task</p>
              <p>Set</p>
            </div>
          })
        }
      </div>
    </>
  )
}

export default CreateTask