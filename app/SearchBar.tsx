'use client'
import React from "react";
import {useState} from "react";
import {useRouter} from "next/navigation";

const SearchBar = () => {
    const [input, setInput] = useState('')
    const router = useRouter()
    const handleClick = () => {
        router.push(`/info/${input}`)
    }
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value);
    }

    return (
        <div className='container mx-auto max-w-lg mt-40'>
            <div className="relative mt-2 rounded-md shadow-sm flex">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                </div>
                <input
                    onChange={handleChange}
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Укажите ИНН"
                />
                <button
                    onClick={handleClick}
                    disabled={input === ''}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                    Поиск
                </button>
            </div>
        </div>
    );
};

export default SearchBar;