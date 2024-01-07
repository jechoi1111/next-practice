'use client';

import React, {useEffect, useState} from 'react';
import Error from "next/error";

function Page(props) {
    const [data, setData] = useState<any>('');

    useEffect(() => {
        return new Error();
    }, []);

    return (
        <div style={{height: '500px'}}>
            <div>url: localhost:3000/dashboard</div>
            Dashboard
            <strong>{data.id}</strong>
        </div>
    );
}

export default Page;