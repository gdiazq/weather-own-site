'use client'

import { GoSearch } from "react-icons/go";
import { useState } from "react";

export const SearchBar = () => {
    const [location, setLocation] = useState('');

    return (
        <form className="flex items-center justify-center gap-x-4">
            <input
                type="text"
                id="location"
                value={location}
                onChange={() => {}}
                placeholder="Search city"
                className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button className="p-3 rounded-md bg-blue-500 text-white">
                <GoSearch />
            </button>
        </form>
    );
}