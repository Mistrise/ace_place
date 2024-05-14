import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <div className='container mx-auto max-w-lg mt-40'>
            Инн не найден
            <div>
                <Link href={'/'} className='text-sky-400 hover:text-sky-500'>
                    На главную
                </Link>
            </div>
        </div>
    );
};

export default NotFound;