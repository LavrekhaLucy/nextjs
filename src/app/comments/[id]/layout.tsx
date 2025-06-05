import React from "react";

type Props = {children: React.ReactNode};
const CommentLayout = ({children}:Props) => {
    return (
        <div>
            comment layout content

            {children}

        </div>
    );
};

export default CommentLayout;

