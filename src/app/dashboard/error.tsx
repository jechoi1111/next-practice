'use client';

import React from 'react';

function Error({
    error,
    reset
               }: {
    error: Error & { digest?: string};
    reset: () => void
}) {
    return (
        <div>
            에러임
            <button onClick={() => reset()}>again</button>
        </div>
    );
}

export default Error;