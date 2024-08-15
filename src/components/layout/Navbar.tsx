'use client';

import React from "react";
import { ThemeSwitcher } from "@/components/button/ThemeSwitcher";
import  SearchBar from "../ui/form/SearchBar";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-center gap-x-5">
            <SearchBar />
            <ThemeSwitcher />
        </nav>
    );
}