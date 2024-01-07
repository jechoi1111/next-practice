import React from 'react';

function Page({params}: { params: { type: string[] } }) {
    return (
        <>
            <div>url: localhost:3000/food/1/2/3/4/5</div>
            <div>My Post > Food > {params.type}</div>
        </>
    );
}

export default Page;