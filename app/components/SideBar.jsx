'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AuthForm from './AuthForm';
import Logo from './Logo';


export default function SideBar() {
    const auth = true;

    return (
        <aside className="fixed left-0 z-40 w-[340px] h-full">
            <div className="relative flex flex-col px-6 py-12 items-center h-full overflow-y-auto bg-blue-400">
                <Logo />
                {auth ? (<>
                    <ul className='flex flex-col gap-3 font-semibold capitalize'>
                        <li>User Logo</li>
                        <li>Find route</li>
                        <li>Create route</li>
                        <li>Saved routes</li>
                        <li>Friends list</li>
                    </ul>
                </>) : <AuthForm />}
            </div>
        </aside>
    )
}
