import React from 'react'
import { FaRegUser } from "react-icons/fa";


export default function NavBar() {
    return (
        <nav className="w-full h-[48px] flex flex-row items-center justify-end gap-10 px-4  bg-blue-400 text-black">

            <ul className='flex items-center gap-4 text-white-500'>
                <li>Top-100</li>
                <li>Last added</li>
                <li>Popularity</li>
            </ul>

            <button className='flex flex-row items-center gap-3 bg-white-500 px-2 py-1 border rounded-lg'>
                <FaRegUser />
                <span className=''>User Name</span>
            </button>


        </nav>
    )
}
