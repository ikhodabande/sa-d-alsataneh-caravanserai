import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-2' name='navbar'>

    <div>
    <p className='text-4xl inline font-bold text-red-600 py-2 pl-2 cursor-pointer'> سعد السلطنه</p>
    <p className='inline text-2xl font-bold cursor-pointer'>کاروانسرا </p>
    </div>

    <div className='flex items-center justify-center'>
    <button className='pr-2 cursor-pointer mx-2'>ثبت نام</button>
    <button className='bg-red-600 rounded py-1.5 px-5 pb-2.5  text-white cursor-pointer hover:bg-[#b50303] '>ورود</button>
    </div>


    </div>
  )
}

export default Navbar