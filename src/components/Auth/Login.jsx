import React, { useState } from 'react'

export default function Login({handleUser}) {

    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()


    let SubmitHandler = (e) => {
        e.preventDefault()
        handleUser(Email,Password)
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='h-[80vh] min-w-[25vw] border-2 border-blue-300 p-6 '>
                <h1>Login</h1>

                <form onSubmit={(e) => SubmitHandler(e)} className=' flex flex-col justify-center items-center  h-[100%]'>
                    <div className=' w-[100%]'>
                        <div className='flex flex-col'>
                            <input value={Email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email' type="text" className='bg-transparent p-2 rounded-full border-2 border-red-400 mb-4 outline-none px-3' />
                            <input value={Password} onChange={(e) => setPassword(e.target.value)} required placeholder='Password' type="password" className='bg-transparent p-2 rounded-full border-2 border-red-400 outline-none px-3' />
                        </div>
                        <div className='flex justify-around mt-4 max-lg:gap-x-5'>
                            <div className='flex cursor-pointer'>
                                <input name="RememberMe" id='RememberMe' className='bg-transparent' type="checkbox" />
                                <label className='cursor-pointer' for="RememberMe"> Remember me</label>
                            </div>
                            <div>
                                <p className='text-red-400 cursor-pointer'>Forget Password</p>
                            </div>
                        </div>
                        <button className='mt-7 bg-red-400 rounded-full p-2 w-[100%]'>Log In</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
