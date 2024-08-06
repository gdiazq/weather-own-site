'use client';

import Image from 'next/image';
import { Navbar } from './Navbar';

export const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between p-4">
            <Image src="/logo.png" width={80} height={80} priority={true} alt="logo" />
            <Navbar />
        </header>
    );
}