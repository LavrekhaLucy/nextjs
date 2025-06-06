import React from 'react';

export default function CreateLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Create Page Layout</h1>
            {children}
        </div>
    );
}