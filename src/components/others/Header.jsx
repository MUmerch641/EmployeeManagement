import React, { useContext } from 'react'
export default function Header({ setUser,userLoggedIn }) {


  const handleLogout = () => {
    setUser(null);
    localStorage.setItem('loggedInUSer','');
  };
console.log("object",userLoggedIn);
  return (
    <div className='flex justify-between w-full '>
    <div>
        <h3 className='text-3xl'>Hello,<span>👋🏼</span></h3>
        { <h1 className='text-2xl'>{userLoggedIn==null ? '': (userLoggedIn.firstName ? userLoggedIn.firstName: userLoggedIn) }</h1> }
    </div>
    <div>
        <button onClick={()=>handleLogout()} className='bg-red-600  text-white h-[content] p-2 rounded-md'>Log Out</button>
    </div>
</div>
  )
}
