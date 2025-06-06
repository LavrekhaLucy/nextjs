import React from "react";

type Props = {children: React.ReactNode};


const UserLayout = ({children}:Props) => {
    return (
        <div>
            <h4>User layout content</h4>

            {children}

        </div>
    );
};

export default UserLayout;

