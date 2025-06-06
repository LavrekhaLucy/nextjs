import React from "react";


type Props = {children: React.ReactNode};
const PostLayout = ({children}:Props) => {
    return (
        <div>
            <h4>Post layout content</h4>

            {children}

        </div>
    );
};

export default PostLayout;

