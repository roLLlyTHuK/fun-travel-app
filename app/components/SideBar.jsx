'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';


export default function SideBar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleExitClick = () => {
        router.push('/');
    };

    return (
        <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
            <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
                Sidebar
            </div>
        </aside>
    )
}
