import React from 'react'
import {NavLink} from 'react-router-dom'

export default function CandidateList() {
  return (
    <div className='bg-[#FFF5E4] py-8'>
        <h1 className='font-bold text-4xl mb-10 text-center'>Vote For Your Party</h1>
        <div className='flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between px-8'>
        <NavLink to=''>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Indian_National_Congress_hand_logo.png/480px-Indian_National_Congress_hand_logo.png'
          className="w-32 h-32 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
        />
        </NavLink>

        <NavLink to=''>
        <img
          src='https://i.pinimg.com/236x/71/eb/2c/71eb2cc75e9615acd590e8b8e3967707.jpg'
          className="w-32 h-32 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
        />
        </NavLink>

        <NavLink to=''>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5R1eSjloExCcJSeJC6vA2TfKoL8f6kSnzQ&s'
          className="w-32 h-32 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
        />
        </NavLink>

        <NavLink to=''>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-vqk_PdvszlfyXEH_vOezvsqlZz1YNaFCQ&s'
          className="w-32 h-32 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
        />
        </NavLink>

        <NavLink to=''>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Jammu_and_Kashmir_%281936-1953%29.svg/640px-Flag_of_Jammu_and_Kashmir_%281936-1953%29.svg.png'
          className="w-32 h-32 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
        />
        </NavLink>

        <NavLink to=''>
        <img
          src='https://www.shutterstock.com/image-vector/communist-logo-flag-shirt-600nw-725765071.jpg'
          className="w-32 h-32 rounded-full object-cover border-2 border-transparent hover:border-black transition duration-300"
        />
        </NavLink>
        </div>
    </div>
  )
}
