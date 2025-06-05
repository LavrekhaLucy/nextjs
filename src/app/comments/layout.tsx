import {Metadata} from "next";
import React from "react";

export const metadata: Metadata={
    title: "Comments Metadata",

}
type Props = {children: React.ReactNode};
const CommentsLayout = ({children}:Props) => {
    return (
        <div>
            comments layout

            {children}
            <hr/>
        </div>
    );
};

export default CommentsLayout;