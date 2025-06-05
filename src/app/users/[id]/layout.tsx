import {Metadata} from "next";
import React from "react";

export const metadata: Metadata={
    title: "UserMetadata",

}
type Props = {children: React.ReactNode};
const UserLayout = ({children}:Props) => {
    return (
        <div>
            user layout content

            {children}

        </div>
    );
};

export default UserLayout;

