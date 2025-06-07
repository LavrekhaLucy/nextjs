import React from 'react';

export default function CreateLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h3>Create Page Layout</h3>
            {children}
        </div>
    );
}