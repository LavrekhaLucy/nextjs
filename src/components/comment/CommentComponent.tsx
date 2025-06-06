import {IComment} from "@/models/IComment";
import Link from "next/link";

interface CommentComponentProps {
    comment: IComment
}

export const CommentComponent = ({comment}: CommentComponentProps) => {
    return (
        <div>
            {
                <Link href={ {pathname:`/comments/`+ comment.id.toString(), query:{data:JSON.stringify(comment)} } }>{comment.id} {comment.name}</Link>
            }
        </div>
    );
};