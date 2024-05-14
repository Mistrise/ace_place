import React from 'react';
import Link from "next/link";
import {notFound} from "next/navigation";

interface Props {
    params: {id: string}
}

const Page = async ({params} :Props) => {
    const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    const token = process.env.API_KEY
    const query = params.id

    const options: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query, branch_type: "MAIN"})
    }


    const data = await fetch(url, options)
    const fetchedData = await data.json()

    if (fetchedData.suggestions == false) {
        return notFound()
    }
    return (
        <div className='container mx-auto max-w-lg mt-40'>
            <div className='flex-col'>
                <div>
                    <h1>
                        {fetchedData.suggestions[0].value}
                    </h1>
                </div>
                <div>
                    <p>
                        {fetchedData.suggestions[0].data.address.value}
                    </p>
                </div>
                <div>
                    <p>
                        ИНН {fetchedData.suggestions[0].data.inn}
                    </p>
                </div>
                <div>
                    <Link
                        rel="noopener noreferrer" target="_blank"
                        className='text-sky-400 hover:text-sky-500'
                        href={`https://yandex.ru/maps/?whatshere[point]=${fetchedData.suggestions[0].data.address.data.geo_lon},${fetchedData.suggestions[0].data.address.data.geo_lat}&whatshere[zoom]=17`}>Адрес
                        на яндекс картах</Link>
                </div>
            </div>
            <div>
                <Link href={'/'} className='text-sky-400 hover:text-sky-500'>
                    На главную
                </Link>
            </div>
        </div>
    );
};

export default Page;

