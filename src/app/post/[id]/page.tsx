import React from 'react';

function Page({params}: { params: { id: string } }) {
    return (
        <>
            <div>url: localhost:3000/post/1</div>
            <div>My Post Id : {params.id}</div>
        </>
    );
}

export default Page;