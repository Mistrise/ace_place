import React from 'react';

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
    console.log(fetchedData.suggestions[0].value)
    return (
        <div className='flex-col'>
            <div>
                {fetchedData.suggestions[0].value}
            </div>
            <div>
                {fetchedData.suggestions[0].data.address.value}
            </div>
        </div>
    );
};

export default Page;