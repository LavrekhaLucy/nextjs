import {Metadata} from "next";
import React from "react";

export const metadata: Metadata={
    title: "Comments Metadata",

}
type Props = {children: React.ReactNode};
const CommentsLayout = ({children}:Props) => {
    return (
        <div>
            <h4>Comments layout</h4>

            {children}
            <hr/>
        </div>
    );
};

export default CommentsLayout;