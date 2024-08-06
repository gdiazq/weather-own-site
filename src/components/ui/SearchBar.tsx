'use client'

export const SearchBar = () => {
    return (
        <form className="flex items-center justify-center gap-x-5">
            <input
                type="text"
                placeholder="Search for a city"
                className="p-2 rounded-md border border-gray-300 dark:border-gray-700"
            />
            <button className="p-2 rounded-md bg-blue-500 text-white dark:bg-blue-700">
                Search
            </button>
        </form>
    )
}