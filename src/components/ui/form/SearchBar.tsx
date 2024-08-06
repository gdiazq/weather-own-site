'use client'

import { GoSearch } from "react-icons/go";

export const SearchBar = () => {
    return (
        <div className="flex items-center justify-center gap-x-4">
            <input
                type="text"
                id="location"
                value=""
                onChange={() => {}}
                placeholder="Search city"
                className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button className="p-3 rounded-md bg-blue-500 text-white">
                <GoSearch />
            </button>
        </div>
    );
}