import {Metadata} from "next";
import React from "react";

export const metadata: Metadata={
    title: "PostsMetadata",

}
type Props = {children: React.ReactNode};
const PostsLayout = ({children}:Props) => {
    return (
        <div>
            <h4>Posts layout</h4>

            {children}
            <hr/>
        </div>
    );
};

export default PostsLayout;