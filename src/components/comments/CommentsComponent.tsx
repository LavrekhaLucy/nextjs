import {getAllComments} from "@/services/api.service";
import {CommentComponent} from "@/components/comment/CommentComponent";

export const CommentsComponent = async() => {
    const comments =await getAllComments();
    console.log(comments);
    return (
        <div>

            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)
            }
        </div>
    );
};