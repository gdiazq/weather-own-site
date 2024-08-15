'use client';

import { ThemeSwitcher } from "@/components/button/ThemeSwitcher";
import SearchBar from "@/components/ui/form/SearchBar";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-center gap-x-5">
            <SearchBar setWeather={function (weather: JSX.Element): void {
                throw new Error("Function not implemented.");
            } } />
            <ThemeSwitcher />
        </nav>
    );
}