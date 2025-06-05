import {Metadata} from "next";
import React from "react";

export const metadata: Metadata={
    title: "UsersMetadata",

}
type Props = {children: React.ReactNode};
const UsersLayout = ({children}:Props) => {
    return (
        <div>

            users content
            {children}
            <hr/>
        </div>
    );
};

export default UsersLayout;