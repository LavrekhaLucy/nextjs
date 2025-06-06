import React from "react";

type Props = {children: React.ReactNode};
const CommentLayout = ({children}:Props) => {
    return (
        <div>
            <h4>Comment layout content</h4>

            {children}

        </div>
    );
};

export default CommentLayout;

