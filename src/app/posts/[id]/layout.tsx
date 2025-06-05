import React from "react";


type Props = {children: React.ReactNode};
const PostLayout = ({children}:Props) => {
    return (
        <div>
            post layout content

            {children}

        </div>
    );
};

export default PostLayout;

