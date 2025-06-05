import {IComment} from "@/models/IComment";
import Link from "next/link";

interface CommentComponentProps {
    comment: IComment
}

export const CommentComponent = ({comment}: CommentComponentProps) => {
    return (
        <div>
            {
                <Link href={`/comments/`+ comment.id.toString() }>{comment.id} {comment.name}</Link>
            }
        </div>
    );
};