import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-2' name='navbar'>

    <div>
    <p className='text-4xl inline font-bold text-red-600 py-2 pl-2 cursor-pointer'>SA-D ALSALTANEH</p>
    <p className='inline text-2xl font-bold cursor-pointer'>Carvanseri</p>
    </div>

    <div>
    <button className='pr-2 cursor-pointer'>Sign In</button>
    <button className='bg-red-600 rounded py-2 px-4 text-white cursor-pointer '>Sign Up</button>
    </div>


    </div>
  )
}

export default Navbar