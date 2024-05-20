import React from 'react'

export default function NavBar() {
    return (
        <div className="w-full h-[48px] flex flex-row items-center justify-end  px-4  bg-blue-400 text-black">
            <ul className='flex items-center gap-2 text-white-500'>
                <li>Главная</li>
                <li>О нас</li>
                <li>Контакты</li>
            </ul>
        </div>
    )
}
